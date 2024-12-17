import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./layouts/Layout";
import ErrorBoundary from "./pages/ErrorBoundary";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routes, { basename: "/" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
