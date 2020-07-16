import React from "react";

function Results(props) {
    return (
        <form>
            <div className="form-group">
                <h2 htmlFor="results">Results</h2>
                <br>
                </br>

                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    View
                    </button>
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Save
                    </button>
                <div className="text-center">
                    <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />

                </div>

            </div>
        </form>
    );
}

export default Results;
