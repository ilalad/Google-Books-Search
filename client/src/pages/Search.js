import React, { Component } from "react";
import SearchForm from "../components/SearchForm"
import Results from "../components/Results"
import SearchContainer from "../components/SearchContainer";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function Search() {
    return (
        <div>
            <nav></nav>
            <Jumbotron>
                <h1>(React) Google Books Search</h1>
                <p>Search for Books and Save Books of Interest</p>
            </Jumbotron>
            <Jumbotron><SearchForm></SearchForm></Jumbotron>

            <br></br>

            <form>
                <Input
                    onChange={() => { }}
                    name="title"
                    placeholder="Title (required)"
                />
                <Input
                    onChange={() => { }}
                    name="author"
                    placeholder="Author (required)"
                />
                <TextArea
                    onChange={() => { }}
                    name="synopsis"
                    placeholder="Synopsis (Optional)"
                />
            </form>

        </div>
    )
}

export default Search;