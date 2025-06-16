import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import SignIn from "./pages/SignInPage.tsx";
import UploadPage from "./pages/UploadPage.tsx";
import { protectedLoader } from "./lib/loaders/protectedLoader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
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
