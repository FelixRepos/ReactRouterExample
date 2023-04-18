import { NavLink, Outlet, } from "react-router-dom";

export default function RootLayout() {
    return (
      <>
       <header>
        <nav>
          <h2>Header</h2>
          <NavLink to="/">Home</NavLink>
          <NavLink to="product">Produkte</NavLink>
          <NavLink to="info">Info</NavLink>
          <NavLink to="catPictures">Katzencontent</NavLink>
        </nav>
       </header>
       <hr />
       <main>
        <Outlet />
       </main>
      </>
    );
  }