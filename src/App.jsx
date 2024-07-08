import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { Provider } from "react-redux";
import store from "./states/Store";
import { AppProvider } from "./states/Context.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AppProvider>
    </Provider>
  );
};

export default App;
