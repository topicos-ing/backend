const app = require("../server.js");
const request = require("supertest");

jest.setTimeout(30000);

describe("List all link types", () => {
  test("Should respond 200 status code", async () => {
    const response = await request(app).get("/linkTypes");
    expect(response.statusCode).toBe(200);
  });
});

describe("List all languages", () => {
  test("Should respond 200 status code", async () => {
    const response = await request(app).get("/languages");
    expect(response.statusCode).toBe(200);
  });
});

describe("List all providers", () => {
  test("Should respond 200 status code", async () => {
    const response = await request(app).get("/providers");
    expect(response.statusCode).toBe(200);
  });
});

describe("Get link for GTIN 9506000134352", () => {
  test("Should respond 302 status code", async () => {
    const response = await request(app).get("/links/9506000134352");
    expect(response.statusCode).toBe(302);
  });
});

describe("Get link for GTIN 9506000134352, recipeInfo and spanish language", () => {
  test("Should respond 302 status code", async () => {
    const response = await request(app)
      .get("/links/9506000134352")
      .set("Accept-Language", "es");
    expect(response.statusCode).toBe(302);
  });
});

describe("Get links for provider with ID 1", () => {
  test("Should get products with the following ID 9506000134352 & 9506000245463", async () => {
    const response = await request(app)
      .get("/links")
      .query({ "providerID": 1 })
      .set("Accept-Language", "es");
    let responseBody = response.body;
    expect(responseBody.every(elem => ["9506000134352", "9506000245463"].includes(elem["gtin"]))).toBe(true);
  });
});

describe("Get links for provider with ID 2 but don't include other providers' products", () => {
  test("Should not get products with the following ID 9506000134352 & 9506000245463", async () => {
    const response = await request(app)
      .get("/links")
      .query({ "providerID": 2 })
      .set("Accept-Language", "es");
    let responseBody = response.body;
    expect(responseBody.every(elem => ["9506000134352", "9506000245463"].includes(elem["gtin"]))).toBe(false);
  });
});