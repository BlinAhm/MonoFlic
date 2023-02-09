import React, { Component } from 'react';
import './css/Browse.css';
import './css/BrowseCard.css';
import $ from 'jquery';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export class Browse extends Component {

    render() {
        return (
            <div>
                <BrowseMovies />
                <BrowseSeries />
            </div>
        );
    }
}

const BrowseMovies = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        displayFeatured();
        // eslint-disable-next-line
    }, []);

    function displayFeatured() {
        $.ajax({
            type: "GET",
            url: "https://localhost:7116/Api/Movies/GetAll",
            success: function (data) {
                if (response !== data) {
                    setResponse(data);
                }
            },
            error: function (jqXHR) {
                alert(jqXHR.status);
            }
        });
    }

    return (
        <div className="card-container">
            <div className="card-top">Movies</div>
            <div className="cards">
                {response?.map((key) => (
                    <div key={key.id} className="browse-card" >
                        <p>{key.name}</p>
                        <img src={key.posterURL} alt="yes" />
                        <Link className="watch-link"
                            to="/stream" state={{
                                streamid: key.id,
                                streamtype: "movie",
                            }}>Watch Now!
                        </Link>
                    </div>
                )) ?? ""}
            </div>
        </div>
    );
}

const BrowseSeries = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        displayFeatured();
        // eslint-disable-next-line
    }, []);

    function displayFeatured() {
        $.ajax({
            type: "GET",
            url: "https://localhost:7116/Api/Series/GetAll",
            success: function (data) {
                if (response !== data) {
                    setResponse(data);
                }
            },
            error: function (jqXHR) {
                alert(jqXHR.status);
            }
        });
    }

    return (
        <div className="card-container">
            <div className="card-top">Series</div>
            <div className="cards">
                {response?.map((key) => (
                    <div key={key.id} className="browse-card" >
                        <p>{key.name}</p>
                        <img src={key.posterURL} alt="yes" />
                        <Link className="watch-link"
                            to="/stream" state={{
                                streamid: key.id,
                                streamtype: "series",
                            }}>Watch Now!
                        </Link>
                    </div>
                )) ?? ""}
            </div>
        </div>
    );
}