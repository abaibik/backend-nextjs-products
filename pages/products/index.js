import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
  const { data, isLoading } = useSWR("/api/products/", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>,{" "}
          {product.description}. Price: {product.price}
          {product.currency}, category: {product.category}
        </li>
      ))}
    </ul>
  );
}
