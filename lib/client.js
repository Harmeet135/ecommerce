export async function getAllUser(){
  const apiResponse = await fetch('https://fakestoreapi.com/products');
  console.log(apiResponse);
  const result = await apiResponse.json();

  return result;
}