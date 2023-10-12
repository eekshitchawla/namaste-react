import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const dataObj = {
      name: "eeki",
    };
    setUserName(dataObj.name);
  }, []);
  return (
    <div className="app px-4">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default AppLayout;
