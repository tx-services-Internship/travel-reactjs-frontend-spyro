import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
};
export default App;
