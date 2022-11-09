const app = require("../server.js");
const request = require("supertest");

jest.setTimeout(30000);

describe("get all products /", () => {
  test("should respond 200 status code", async () => {
    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(200);
  });
});

describe("get product with getin 9506000134352", () => {
  test("should respond 200 status code", async () => {
    const response = await request(app).get("/products/9506000134352");
    expect(response.statusCode).toBe(200);
  });
});
