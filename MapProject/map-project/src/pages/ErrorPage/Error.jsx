import react from 'react'
import { useRouteError } from "react-router-dom";

export default function Error() {
  //useRouteError is a hook provided by react-router-dom that allows components to access the error thrown during the routing process
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}