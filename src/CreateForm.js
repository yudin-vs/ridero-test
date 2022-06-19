import React, { useState } from "react";

export function CreateForm(props) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  function handleChangeAuthor(event) {
    const value = event.target.value;
    setAuthor(value);
  }

  function handleChangeTitle(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleFormSubmit() {
    const book = { author, title };
    let books = localStorage.getItem("books");
    books = JSON.parse(books);

    if (!books) {
      books = [];
    }

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  return (
    <div>
      <form>
        <button className="Button" onClick={handleFormSubmit}>
          СОХРАНИТЬ
        </button>
        <button className="Button">НАЗАД</button>
        <label>
          автор книги: 
          <input name="author" value={author} onChange={handleChangeAuthor} />
        </label>
        <label>
          название книги: 
          <input name="title" value={title} onChange={handleChangeTitle} />
        </label>
      </form>
    </div>
  );
}
