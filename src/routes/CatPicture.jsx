import { useLoaderData, useParams } from "react-router-dom";

export default function CatPicture() {
  const catPicture = useLoaderData()
  const { catPictureId } = useParams();
    return (
      <>
        <h1>Katzencontent { catPictureId }</h1>
        <p>{catPicture}</p>
        <img src={`https://cataas.com/cat/${ catPictureId }`} alt="My Image" />
  
      </>
    );
}

export const catPictureLoader = async ({ params }) => {
  const { catPictureId } = params
  const response = await fetch(`https://cataas.com/cat/${ catPictureId }`)
  if (!response.ok) {
    throw Error('Dieser Pfad konnte nicht auf dem Server gefunden werden')
  }

  return response.ok
}
