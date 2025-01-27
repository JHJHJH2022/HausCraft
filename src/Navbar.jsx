import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="shadow-md  z-50 " style={{ height: "8%" }}>
      <nav className="flex justify-between py-3 px-20">
        <Link to="/" className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="green"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span className="font-bold text-xl text-accent">HausCraft</span>
        </Link>

        <ul className="flex gap-4  py-2 px-4 ">
          <li>
            <Link to="/home" className="text-lg text-accent font-bold ">
              Home
            </Link>
          </li>
          <li className="border-l border-accent"></li>
          <li>
            <Link to="/corridor" className="text-lg text-accent font-bold ">
              Components
            </Link>
          </li>
          <li className="border-l border-accent"></li>
          <li>
            <Link
              to="/neighbourhood"
              className="text-lg text-accent font-bold "
            >
              Neighbourhood
            </Link>
          </li>
          <li className="border-l border-accent"></li>
          <li>
            <Link to="/about" className="text-lg text-accent font-bold ">
              About
            </Link>
          </li>
        </ul>

        <Link className="flex items-center gap-2 border border-accent/80 rounded-full py-2 px-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="orange"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="bg-accent text-neutral rounded-full border border-accent overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 relative top-1"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </nav>
    </div>
  );
}
