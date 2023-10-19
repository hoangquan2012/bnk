import { Button } from "antd";
import React from "react";
import { logout, selectIsAuthenticated } from "../reducer/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    console.log("isAuthenticated", isAuthenticated);
  };

  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated === false) {
    navigate("/");
  }
  return (
    <div>
      <div>Home</div>
      <Button onClick={handleLogout}>Dang xuat</Button>
    </div>
  );
};
export default Home;
