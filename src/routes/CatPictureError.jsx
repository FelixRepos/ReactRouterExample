import { useRouteError } from "react-router-dom";

export default function CatPictureError() {
  const error = useRouteError();

    return (
      <div className="error">
        <h1>Fehler bei der Ausgabe eines Katzenbildes</h1>
        <p>{ error.message }</p>
      </div>
    );
}

