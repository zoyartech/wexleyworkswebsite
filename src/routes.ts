import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:slug", Component: CaseStudy },
      { path: "articles", Component: Articles },
      { path: "articles/:slug", Component: Article },
      { path: "about", Component: About },
    ],
  },
]);
