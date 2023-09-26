import { getAllProducts } from "@/services/productServices";

export const products = getAllProducts();

export default function handler(request, response) {
  response.status(200).json(products);
}
