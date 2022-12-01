import { Fragment } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}
export default App;
