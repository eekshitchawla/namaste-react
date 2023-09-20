import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const dataObj = {
      name: "eeki",
    };
    setUserName(dataObj.name);
  }, []);
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

export default AppLayout;
