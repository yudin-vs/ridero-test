import React from "react";

export function Table(props) {
  let books = localStorage.getItem("books");
  books = JSON.parse(books);

  if (books) {
  const rows = books.map((book, index) => {
    return (
      <tr className="BooksTable__row" key={index} onClick={() => props.onButtonEditForm(index)}>
        <td className="BooksTable__body--cell">{book.author}</td>
        <td className="BooksTable__body--cell">{book.title}</td>
      </tr>
    );
  });
  return <>
      <div className="ButtonContainer">
        <button className="Button" onClick={props.onButtonShowForm}>ДОБАВИТЬ КНИГУ</button>
      </div>
      <table className="BooksTable">
        <thead className="BooksTable__head">
          <tr className="BooksTable__row">
            <th className="BooksTable__head--cell">АВТОР</th>
            <th className="BooksTable__head--cell">НАЗВАНИЕ</th>
          </tr>
        </thead>
        <tbody className="BooksTable__body">{rows}</tbody>
      </table>
    </>
  }
  return (
    <>
    <div className="ButtonContainer">
      <button className="Button" onClick={props.onButtonShowForm}>ДОБАВИТЬ КНИГУ</button>
      </div>
      <table className="BooksTable">
        <thead className="BooksTable__head">
         <tr className="BooksTable__row">
         <th className="BooksTable__head--cell">АВТОР</th>
            <th className="BooksTable__head--cell">НАЗВАНИЕ</th>
                  </tr>
        </thead>
      </table>
        </>
); 
}

