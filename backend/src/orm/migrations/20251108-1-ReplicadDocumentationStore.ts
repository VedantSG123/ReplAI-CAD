import { DataTypes, Sequelize } from 'sequelize'

import type { Migration } from '../migrate'

const up: Migration = async ({ context: queryInterface }) => {
  // Enable the vector extension if not already enabled
  await queryInterface.createTable('replicad_documentation_store', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    embedding: {
      type: 'HALFVEC(3584)',
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metadata: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  })

  // Create HNSW index on embedding column for fast similarity search
  await queryInterface.sequelize.query(`
    CREATE INDEX replicad_documentation_store_embedding_idx
    ON replicad_documentation_store
    USING hnsw (embedding halfvec_cosine_ops)
  `)

  // Create GIN index on metadata column for fast JSONB queries
  await queryInterface.sequelize.query(`
    CREATE INDEX replicad_documentation_store_metadata_idx
    ON replicad_documentation_store
    USING gin (metadata)
  `)
}

const down: Migration = async ({ context: queryInterface }) => {
  // Drop indexes first
  await queryInterface.sequelize.query(`
    DROP INDEX IF EXISTS replicad_documentation_store_metadata_idx
  `)
  await queryInterface.sequelize.query(`
    DROP INDEX IF EXISTS replicad_documentation_store_embedding_idx
  `)

  await queryInterface.dropTable('replicad_documentation_store')
}

export { down, up }
