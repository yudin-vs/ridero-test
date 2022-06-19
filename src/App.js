import "./App.css";
import { Table } from "./Table";
import { CreateForm } from "./CreateForm";
import { EditForm } from "./EditForm";
import React, { useState } from "react";

export function App() {
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [keyBook, setKeyBook] = useState("");

  function buttonShowForm() {
    setShowForm(true);
  }

  function buttonEditForm(index) {
    setEditMode(true);
    setKeyBook(index);
  }

  function buttonShowEditForm() {
    setEditMode(false);
  }

  if (editMode) {
    return (
      <EditForm keyBook={keyBook} onButtonShowEditForm={buttonShowEditForm} />
    );
  } else {
    if (showForm) {
      return <CreateForm />;
    } else {
      return (
        <Table
          onButtonShowForm={buttonShowForm}
          onButtonEditForm={buttonEditForm}
        />
      );
    }
  }
}

export default App;
