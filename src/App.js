import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTodoPage from "./pages/AddTodoPage";
import MainTodoPage from "./pages/MainTodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainTodoPage/>
  },
  
  {
    path: "/addtodo",
    element:<AddTodoPage/>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
