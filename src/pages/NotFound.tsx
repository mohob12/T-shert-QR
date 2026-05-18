import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-black">404</h1>
        <p className="mt-3 text-white/60">Page not found</p>
        <a href="/" className="mt-6 inline-block rounded-full bg-lime-400 px-5 py-3 font-semibold text-black">
          Return to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;