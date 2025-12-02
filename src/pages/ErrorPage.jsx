import { Link } from "react-router";

function ErrorPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl tracking-wider font-semibold">404 - error</h1>
        <h2 className="text-xl uppercase">Page Not Found</h2>
        <p className="text-sm text-gray-400">Your search has ventured beyond the known universe.</p>
        <Link to="/" className="font-light border-2 rounded-3xl px-4 py-2 text-sm border-gray-500">Back to Home</Link>
      </div>
    </>
  );
}

export default ErrorPage;
