import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Overview from "./pages/Overview";
import Structure from "./pages/Structure";
import { GlobalStyles } from "./components/styles/Global";
import PlanetPage from "./pages/PlanetPage";
import data from "./data.json";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Surface from "./pages/Surface";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      {data.map((planet) => (
        <Route
          key={planet.radius}
          path={`${planet.path}`}
          element={
            <PlanetPage path={planet.path} data={data} name={planet.name} />
          }
        >
          <Route
            path={`${planet.path}/overview`}
            element={<Overview data={data} name={planet.name} />}
          />

          <Route
            path={`${planet.path}/structure`}
            element={<Structure data={data} name={planet.name} />}
          />
          <Route
            path={`${planet.path}/surface`}
            element={<Surface data={data} name={planet.name} />}
          />
        </Route>
      ))}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>
);

{
  /* <Route path={`${planet.path}/overview`} />
        </Route> */
}
