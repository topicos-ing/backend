
const baseURL = "https://resolver-backend-preprod.azurewebsites.net"
//const app = require('../server.js')
const request = require('supertest')

describe('get all products /', () =>{
  test('should respond 200 status code', async ()=>{
    const response = await request(baseURL).get('/products').send()
     expect(response.statusCode).toBe(200)
     
  })
})

describe('get product with getin 9506000134352',  () => {
  test('should respond 302 status code', async () => {
    const response = await request(baseURL).get('/products/9506000134352').send()
    expect(response.statusCode).toBe(302)
   
  })
})



