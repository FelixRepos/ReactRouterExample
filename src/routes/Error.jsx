import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

    return (
      <div className="error">
        <h1>Allgemeine Fehlermeldung</h1>
        <p>{error.message}</p>
      </div>
    );
}

