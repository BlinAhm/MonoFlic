import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;


    render() {
        return (
            <div>
                <video width="750" height="500" controls >
                    <source src="https://localhost:7116/Api/Stream/Get/1" type="video/mp4" />
                </video>
            </div>
        );
    }
}
