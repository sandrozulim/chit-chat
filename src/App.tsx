import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <ProtectedRoute redirectPath="/login">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
