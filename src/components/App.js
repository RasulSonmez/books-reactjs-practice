import React from "react";
import BooksList from "./BookList";
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeContextProvider>
          <BookContextProvider>
            <BooksList />
          </BookContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
