const request = require("supertest");

jest.mock("../src/services/product-service", () => ({
  listProducts: jest.fn().mockResolvedValue([]),
  saveProduct: jest.fn().mockResolvedValue({}),
  getProduct: jest.fn().mockResolvedValue(null),
  updateProduct: jest.fn().mockResolvedValue(null),
  deleteProduct: jest.fn().mockResolvedValue(undefined),
}));

const app = require("../src/index");

describe("Calling /posts with GET", () => {
  test("It should response with a 200 status code", async () => {
    const response = await request(app).get("/product").send();
    expect(response.status).toBe(200);
  });

  test("It should response with an array of product objects", async () => {
    const response = await request(app).get("/product").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("Creating a product without a required name", () => {
  test("It should response with a 400 status code", async () => {
    const response = await request(app).post("/product").send({
      description: "",
    });
    expect(response.status).toBe(400);
  });
});
