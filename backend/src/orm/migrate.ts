import path from 'path'
import { Sequelize } from 'sequelize'
import { SequelizeStorage, Umzug } from 'umzug'

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set.')
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
})

const umzug = new Umzug({
  migrations: { glob: path.join(__dirname, 'migrations', '*.ts') },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
})

export type Migration = typeof umzug._types.migration

// --- CLI Execution Logic ---
const main = async () => {
  console.log('--- 🐘 PostgreSQL Migration Tool ---')

  const args = process.argv.slice(2)
  const isDown = args.includes('down')
  const specificMigration = args.find((arg) => arg.endsWith('.ts'))

  try {
    // Determine and announce the action
    if (isDown && specificMigration) {
      const migrationName = specificMigration
      console.log(`⏪ Reverting migrations down to: ${migrationName}...`)
      await umzug.down({ to: migrationName })
    } else if (isDown) {
      console.log('⏪ Reverting the last applied migration...')
      await umzug.down()
    } else {
      console.log('🚀 Running all pending migrations...')
      await umzug.up()
    }

    console.log('\n✅ Migration process finished successfully.')
  } catch (err) {
    console.error('\n❌ Migration failed:')
    console.error(err)
    process.exit(1)
  } finally {
    console.log('🔒 Closing database connection...')
    await sequelize.close()
  }
}

main()
