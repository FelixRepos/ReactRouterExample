import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Titles() {
  const titles = useLoaderData();
  return (
    <>
      <h1>Titel</h1>
      <br />
      <p>Die Titel wurden mittels Loader vor dem Rendern der Seite von einer externen API geladen:</p>
      <ul>
        {titles.map((title, index) => (
          <React.Fragment key={index}>
            <li>{title.title}</li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export const titlesLoader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

  if (!response.ok) {
    throw Error('Die Titel konnten nicht vom Server geladen werden')
  }
  return response  
}