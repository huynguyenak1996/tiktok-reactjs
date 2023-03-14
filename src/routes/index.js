import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import DefaultLayout from "~/layouts/DefaultLayout";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: null },
  { path: "/search", component: Search, layout: null },
];
// const privateRoutes = [];
const Index = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={
                // nếu tồn tại layout thì
                route.layout ? (
                  <route.layout>
                    <route.component />
                  </route.layout>
                ) : // nếu  layout = null thì
                route.layout === null ? (
                  <route.component />
                ) : (
                  //layout mặc định là
                  <DefaultLayout>
                    <route.component />
                  </DefaultLayout>
                )
              }
              key={index}
              exact={true}
            />
          ))}
        </Routes>
      </Router>
    </React.Fragment>
  );
};
export default Index;
