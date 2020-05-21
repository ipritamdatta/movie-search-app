import React, { useState } from "react";

function Search(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div>
      <div className="container">
        <div className="jumbo">
          <div className="formCenter">
            <form id="searchForm" className="searchInput">
              <input
                type="text"
                className="form-control"
                id="searchText"
                onChange={handleChange}
                placeholder="Search Movie"
                value={inputText}
              />
              <button
                onClick={(e) => {
                  props.onAdd(inputText);
                  setInputText("");
                  e.preventDefault();
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
