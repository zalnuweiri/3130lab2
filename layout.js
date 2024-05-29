import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className = {"link1"} to="/">Home</Link> <Link className = {"link2"} to="./about">About</Link> <Link className = {"link3"} to="./contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
