import React, { useState } from "react";

export function EditForm(props) {
  let books = localStorage.getItem("books");
  books = JSON.parse(books);
  let book = books[props.keyBook];

  const [author, setAuthor] = useState(book.author);
  const [title, setTitle] = useState(book.title);

  function handleChangeAuthor(event) {
    const value = event.target.value;
    setAuthor(value);
  }

  function handleChangeTitle(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleFormSubmit() {
    let books = localStorage.getItem("books");
    books = JSON.parse(books);

    books[props.keyBook] = { author, title };
    localStorage.setItem("books", JSON.stringify(books));

    props.onButtonShowEditForm();
  }

  function deleteBook() {
    let index = props.keyBook;
    let books = localStorage.getItem("books");
    books = JSON.parse(books);

    books.splice(index, 1);

    localStorage.setItem("books", JSON.stringify(books));

    props.onButtonShowEditForm();
  }

  return (
    <div>
      <label>
        автор книги:
        <input name="author" value={author} onChange={handleChangeAuthor} />
      </label>
      <label>
        название книги:
        <input name="title" value={title} onChange={handleChangeTitle} />
      </label>
      <button className="Button" onClick={handleFormSubmit}>
        СОХРАНИТЬ
      </button>
      <button className="Button" onClick={props.onButtonShowEditForm}>
        НАЗАД
      </button>
      <button className="Button" onClick={deleteBook}>
        УДАЛИТЬ
      </button>
    </div>
  );
}
