import "./App.css";
import AddDetails from "./components/AddDetails/AddDetails";
import AddContacts from "./components/AddContacts/AddContacts";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
    <Route index element={<AddDetails/>}/>
    <Route path="/addcontact" element={<AddContacts/>}/>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={router} />


      {/* <ContextMenu
        text="Edit Contact"
        textDanger="Delete Contact"
        textColor="var(--primary-900)"
        textColorDanger="var(--danger)"
        editContact={editContact}
        deleteContact={deleteContact}
      ></ContextMenu>

      <Toast
        title={"Mail sent"}
        description={"Retailers have been notified of their orders."}
        type={"success"}
      ></Toast>
      <Select text={"Please select one"} option={"one"}></Select>
      <Card
        src="https://picsum.photos/600"
        name={"Ramesh Gupta"}
        tel={"49172330 29581"}
        address={"$38 K/123 Triveel Nager sitapur rood lucknow"}
      ></Card>
      <EmptyState text="Add members via filling form or using contact picker if supported"></EmptyState>
    </> */}
  );
}

export default App;
