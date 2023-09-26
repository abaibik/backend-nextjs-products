import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const router = useRouter();

  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <Link href="/products">Back to all</Link>
      <h1>{data.name}</h1>
      <p>
        {data.description}. Price: {data.price}
        {data.currency}, category: {data.category}
      </p>
    </>
  );
}
