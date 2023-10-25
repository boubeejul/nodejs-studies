import fastify from "fastify"
// import crypto from "node:crypto"
import { knex } from "./database"

const app = fastify()

app.listen({
    port: 3333
}).then(() => {
    console.log('Server running on port 3333')
})

// npm run knex -- migrate:make migration_name
// npm run knex -- migrate:rollback
// npm run knex -- migrate:latest

app.get('/', async () => {
    // const transactions = await knex('transactions').insert({
    //     id: crypto.randomUUID(),
    //     title: 'Transação de teste 2',
    //     amount: 1000,
    // }).returning('*')

    const transactions = await knex('transactions')
    .select('title')
    .where('amount', 1000)

    return transactions
})