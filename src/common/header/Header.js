import { Button, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";

import "./Header.css";
import Login from "./Login";
import Register from "./Register";

function Header(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();
  const [tabValue, setTabValue] = useState(0);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isDetailsPage, setIsDetailsPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/details") {
      setIsDetailsPage(true);
    }
  }, [location]);

  const customStyles = {
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleLoginLogout = () => {
    if (userLoggedIn) {
      setUserLoggedIn(false);
      closeModal();
    }
  };
  const handleUpdateUser = (user) => {
    setUser(user);
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleUserLoggedIn = (value) => {
    setUserLoggedIn(value);
  };
  return (
    <div className="header">
      <img
        src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"
        alt="Logo"
        className="logo"
      />
      <div className="buttonContainer">
        {isDetailsPage ? (
          <Button className="bookNowButton" variant="contained" color="primary">
            Book Now
          </Button>
        ) : (
          ""
        )}
        <Button
          className="loginLogoutButton"
          variant="contained"
          onClick={() => {
            setIsModalOpen(true);
            handleLoginLogout();
          }}
        >
          {userLoggedIn ? "LOGOUT" : "LOGIN"}
        </Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="LOGIN" />
          <Tab label="REGISTER" />
        </Tabs>
        {tabValue === 0 && (
          <Login
            closeModal={closeModal}
            user={user}
            handleUserLoggedIn={handleUserLoggedIn}
          />
        )}
        {tabValue === 1 && <Register handleUpdateUser={handleUpdateUser} />}
      </Modal>
    </div>
  );
}

export default Header;
