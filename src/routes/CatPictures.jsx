import { Link, useLoaderData } from "react-router-dom";

export default function CatPictures() {
  const catPictures = useLoaderData();
  return (
    <>
      <h1>Katzencontent</h1>
      <br />
      <p>Die IDs der Bilder wurden mittels Loader vor dem Rendern der Seite von einer externen API geladen:</p>
      {catPictures.map((catPicture, index) => (
        <><Link to={`/catPicture/${catPicture._id}`} key={index}>Beitrag {catPicture._id}</Link><br /></>
      ))}
    </>
  );
}

export const catPicturesLoader = async () => {
  const response = await fetch('https://cataas.com/api/cats')

  return response  
}