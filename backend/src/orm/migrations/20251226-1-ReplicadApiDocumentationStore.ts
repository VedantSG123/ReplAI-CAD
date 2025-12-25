import { DataTypes, Sequelize } from 'sequelize'

import type { Migration } from '../migrate'

const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.createTable('replicad_api_documentation_store', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
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
}

const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.dropTable('replicad_api_documentation_store')
}

export { down, up }
