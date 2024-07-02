import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex w-screen h-screen" id="error-page">
      <div className="m-auto text-center">
        <h1 className="text-4xl mb-5">Oops!</h1>
        <p className="text-lg mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
