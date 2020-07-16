import React, { Component } from "react";
import SearchForm from "./SearchForm";

import API from "../utils/API";

class SearchContainer extends Component {
    state = {
        result: {},
        search: ""
    };
    componentDidMount() {
        this.searchBooks("");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default SearchContainer;
