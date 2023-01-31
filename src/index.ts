import { Hono } from 'hono'
import es from '../copypastas-es.json'
import en from '../copypastas-en.json'
export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
}

const randomInt = (min:number, max:number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  
const app = new Hono()

app.get('/', async (c) => {
	if (randomInt(0, 1)) return c.text(en[randomInt(0, en.length)])
	return c.text(es[randomInt(0, es.length)])
})

app.get('/es', async (c) => {
	return c.text(es[randomInt(0, es.length)])
})

app.get('/en', async (c) => {
	return c.text(en[randomInt(0, es.length)])
})

export default app