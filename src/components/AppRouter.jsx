import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router/routes";
import Login from "../pages/Login";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route => 
          <Route
            path={route.path}
            element={<route.component/>}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path="/*" element={<Posts/>} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route => 
          <Route
            path={route.path}
            element={<route.component/>}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path="/*" element={<Login/>} />
      </Routes>
  );
};

export default AppRouter;