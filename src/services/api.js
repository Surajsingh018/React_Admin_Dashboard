export const getproducts = async()=>{
  const resp = await fetch("https://dummyjson.com/products");
  const data = await resp.json()
  return data.products;
}