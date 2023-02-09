import React, { Component } from 'react';
import './css/Stream.css';
import { useLocation } from 'react-router-dom';

export const Stream = () => {

    const location = useLocation();
    if (location.state?.streamtype === "series") {
        return (
            <div className="stream-background">
                <video width="100%" height="820" controls >
                    <source src={getURLSeries()} type="video/mp4" />
                </video>
            </div>
        );
    }

    if (location.state?.streamtype === "movie") {
        return (
            <div className="stream-background">
                <video width="100%" height="820" controls >
                    <source src={getURLMovie()} type="video/mp4" />
                </video>
            </div>
        );
    }
 

    function getURLSeries() {
        var id = location.state?.streamid;
        return "https://localhost:7116/Api/Stream/GetSeries/" + id;
    }
    function getURLMovie() {
        var id = location.state?.streamid;
        return "https://localhost:7116/Api/Stream/GetMovie/" + id;
    }
}

