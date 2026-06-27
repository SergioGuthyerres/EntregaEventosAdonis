import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inscricoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_evento')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('eventos')
        .onDelete('CASCADE')
      table
        .integer('id_participante')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('participantes')
        .onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
