import React, { Component } from 'react';
import './css/Stream.css';
import $ from 'jquery';

export class Stream extends Component {

    render() {
        return (
            <div className="stream-background">
                <video width="100%" height="820" controls >
                    <source src="https://localhost:7116/Api/Stream/Get/1" type="video/mp4" />
                </video>
            </div>
        );
    }
}

function getURL() {
    $.ajax({
        type: "GET",
        url: "https://localhost:7116/Api/Stream/GetURL",
        success: function (data) {
            return data
        },
        error: function (jqXHR) {
            alert(jqXHR.status);
        }
    });
}