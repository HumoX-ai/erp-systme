import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="text-center flex h-screen items-center justify-center gap-1">
      <h1>404 - Page not found. Go back to</h1>
      <Link to="/dashboard" className="text-blue-500 hover:underline">
        Home
      </Link>
    </div>
  );
};

export default Page404;
