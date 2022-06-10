import fetdata from "./fetdata";
let url = "https://fakestoreapi.com/products/category/electronics";
test("fettching data", async () => {
  let data = await fetdata(url);
  expect(data).toBeDefined();
  expect(data).toBeTruthy();
});
