import React, { Component } from 'react';
import { BrowseCard } from './BrowseCard';
import './css/Browse.css';
import './css/BrowseCard.css';
import $ from 'jquery';
import { useEffect, useState } from "react";

export class Browse extends Component {

    render() {
        return (
            <Details />
        );
    }
}

const Details = () => {
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
            {response?.map((key) => (
                <div key={key.id} className="browse-card" >
                    {key.name}
                </div>
            )) ?? ""}
        </div>
    );
}