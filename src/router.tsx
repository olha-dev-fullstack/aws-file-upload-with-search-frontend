import { createBrowserRouter, RouterProvider } from "react-router";
import SignIn from "./pages/SignInPage.tsx";
import UploadPage from "./pages/UploadPage.tsx";
import { protectedLoader } from "./lib/loaders/protectedLoader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: UploadPage,
    loader: protectedLoader
  },
  {
    path: "/sign-in",
    Component: SignIn,
  },
  {
    path: "/upload",
    Component: UploadPage,
    loader: protectedLoader
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
