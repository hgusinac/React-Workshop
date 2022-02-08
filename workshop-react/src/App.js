import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import ReadonlyRow from "./components/ReadonlyRow";
import EditableRow from "./components/EditableRow";
import CrudContact from "./components/CrudContact";

const App = () => {
  return <CrudContact />;
};
export default App;
