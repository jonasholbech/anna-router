import { Link } from "react-router-dom";
export default function Home({ products }) {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            {products.map((entry) => (
              <Link to={`/product/${entry.id}`}>
                {entry.productdisplayname}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
