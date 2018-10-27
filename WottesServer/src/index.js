const express = require('express')
import fetch from 'node-fetch'
import { Base64 } from 'js-base64'

const app = express()


async function fetchBlockbox() {
    const query = {"v":3,"q":{"find":{"out.h1":"534c5000","out.s3":"GENESIS"},"limit":1000},"r":{"f":"[ .[] | { id: .tx.h, timestamp: (.blk.t | strftime(\"%Y-%m-%d %H:%M\")), symbol: .out[0].s4, name: .out[0].s5, document: .out[0].s6 } ]"}}
    console.log(query)
    const stringifyQuery = await JSON.stringify(query) 
    const base64encoding = await Base64.encode(stringifyQuery)
    console.log(base64encoding)
    const key = 'qpumnrr0u6fuvm79vt560a50c8c8f2zq7ysnxqmr28'
    console.log('getting the data')

    const data = await fetch(`http://httpbin.org/q${base64encoding}`, { 
    method: 'GET',
    body:    JSON.stringify(body),
    headers: { key: key },
    })
    
    console.log(data)
}

fetchBlockbox()


app.get('/', async (req, res) => {
  try {
    const thing = await Promise.resolve({ one: 'two' }) // async/await!
    return res.json({...thing, hello: 'world'}) // object-rest-spread!
  } catch (e) {
    return res.json({ error: e.message })
  }
})
const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  }

  if (__DEV__) { // webpack flags!
    console.log('> in development')
  }

  console.log(`> listening on port ${port}`)
})
