
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Create } from "./components/Create";

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
   
    <Route path="/" element={<HomePage />} >
      <Route index element={<Create/>}/>
    </Route>
  ));

  return <RouterProvider router={router} />;
  
};

export default App;
