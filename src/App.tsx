import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Fragment>
  );
}
export default App;
