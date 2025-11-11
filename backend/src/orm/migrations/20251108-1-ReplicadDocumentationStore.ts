import { DataTypes } from 'sequelize'

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
      type: 'VECTOR(1536)',
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
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  })
}

const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.dropTable('replicad_documentation_store')
}

export { down, up }
