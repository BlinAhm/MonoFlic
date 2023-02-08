import React from 'react';
import './Homepage.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="" alt="Monoflic logo" />
                <nav className="App-nav">
                    <a href="#">Home</a>
                    <a href="#">TV Shows</a>
                    <a href="#">Movies</a>
                    <a href="#">Recently Added</a>
                    <a href="#">My List</a>
                </nav>
            </header>
            <main className="App-main">
                <h1>Netflix Originals</h1>
                <div className="App-cards">
                    <div className="App-card">
                        <img src="" alt="Bourne Identity image" />
                        <h2>Bourne Identity</h2>
                        <p></p>
                    </div>
                    <div className="App-card">
                        <img src="" alt="How I Met Your Mother image" />
                        <h2>How I Met Your Mother</h2>
                        <p></p>
                    </div>
                    <div className="App-card">
                        <img src="" alt="The Office image" />
                        <h2>The Office</h2>
                        <p></p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
