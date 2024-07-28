import { useEffect, useRef, useState } from "react";
import { useUser } from "./hooks/api/useUser";
import { Link, useNavigate } from "react-router-dom";

import Home from "./assets/home.svg?react";
import Logout from "./assets/logout.svg?react";
import { baseURL } from "./http-common";

export function Profile({ redirect = false }) {
  const navigate = useNavigate();

  const { isUserPending, isUserError, user, userError } = useUser(
    (redirect = redirect)
  );

  const [showOptions, setShowOptions] = useState(false);

  const ref = useRef();

  useEffect(() => {
    // If user clicks outside of the profile, hide it
    function onClick(e) {
      if (!ref.current.contains(e.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  const handleLogout = () => {
    // Make a request to logout route
    const res = fetch(`${baseURL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    navigate("/login");
  };

  return user && user.email ? (
    <div ref={ref} className="text-right z-30 absolute top-3 right-3">
      <button
        className=""
        onClick={() => setShowOptions((showOptions) => !showOptions)}
      >
        <h2 className="text-lg text-slate-600 hover:text-slate-900">
          {user.email}
        </h2>
      </button>
      {showOptions && (
        <div className="text-left bg-white mt-1 rounded-md border shadow-md overflow-hidden">
          <Link to="/">
            <div className="w-full px-2 py-3 hover:bg-slate-50 flex items-center">
              <Home className="fill-slate-400 mr-2 inline h-[18px]" />
              <p className="text-lg text-slate-800">Home</p>
            </div>
          </Link>
          <button onClick={handleLogout} className="w-full">
            <div className="w-full px-2 py-3 hover:bg-slate-50 flex items-center">
              <Logout className="fill-slate-400 mr-2 inline h-[18px]" />
              <p className="text-lg text-slate-800">Logout</p>
            </div>
          </button>
        </div>
      )}
    </div>
  ) : null;
}
