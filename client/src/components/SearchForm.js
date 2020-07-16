import React from "react";

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <h2 htmlFor="search">Book Search</h2>
                <label htmlFor="search">Book</label>
                <br>
                </br> <br>
                </br>

                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Name of the Book"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit} className="btn btn-primary">
                        Search
                   
        </button>
            </div>
        </form>
    );
}

export default Search;
