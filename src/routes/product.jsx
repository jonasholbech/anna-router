import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  console.log(params);
  const product = await fetch(
    "https://kea-alt-del.dk/t7/api/products/" + params.productId
  ).then((res) => res.json());
  return { product };
}

export default function Product() {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <div id="contact">
      <div>
        <img
          alt=""
          src={`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`}
        />
      </div>

      <div>
        <h1>{product.productdisplayname}</h1>
      </div>
    </div>
  );
}
