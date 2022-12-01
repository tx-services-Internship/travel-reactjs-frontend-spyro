import React, { Fragment } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faUser)

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Fragment>
  );
};
export default App;
