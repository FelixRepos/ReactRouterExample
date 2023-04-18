import { Link, useLoaderData } from "react-router-dom";

export default function ProductOverview() {
const catPictures = useLoaderData();
console.log(catPictures)

  return (
    <>
      <h1>Produkte</h1>
      <p>Entdecken Sie unsere Produkte</p>
      <Link to="/product/T-Shirt">T-Shirt</Link>
    </>
  );
}

  