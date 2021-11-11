import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('txs', (table)=>{
		table.bigIncrements('id') //easier to use bigIncrements now than have to convert incrementes later
		table.specificType('txid', 'char(43)').unique().notNullable() //consider just using text
		table.text('content_type').notNullable()
		table.bigInteger('content_size').notNullable() //N.B. bigint returns strings to JS !!!
		table.boolean('flagged')
		table.boolean('valid_data')
		table.text('data_reason')
		table.timestamp('last_update_date', { useTz: true }).defaultTo(knex.fn.now())
	})
	await knex.schema.raw('ALTER TABLE txs ADD CONSTRAINT cc_txid CHECK ((char_length(txid) = 43))')

	/**
	 * Remove all that dbowner stuff
	 */

	await knex.schema.createTable('states', table=> {
		table.increments('id')
		table.text('pname').notNullable()
		table.integer('value').notNullable()
	})
	await knex('states').insert([
		{ pname: 'scanner_position', value: 0},
		{ pname: 'rating_position', value: 0},
	])
}


export async function down(knex: Knex): Promise<void> {
	//this seems dangerous?
	await knex.schema.dropTableIfExists('txs')
	await knex.schema.dropTableIfExists('states')
}

