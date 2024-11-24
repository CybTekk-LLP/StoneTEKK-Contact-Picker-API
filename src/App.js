import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AddContacts from "./components/AddContacts/AddContacts";
import AddDetails from "./components/AddDetails/AddDetails";
import RootLayout from "./components/RootLayout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<AddContacts />} />
        <Route path="/details" element={<AddDetails />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
