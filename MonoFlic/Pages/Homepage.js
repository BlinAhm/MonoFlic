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
                        <img src="https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg" alt="Bourne Identity image" />
                        <h2>Bourne Identity</h2>
                        <p>A man with a bullet-ridden body is found and looked after by strangers. He wakes up with a blank memory and begins a journey to learn his identity, unaware that the road ahead is full of danger.</p>
                    </div>
                    <div className="App-card">
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/2970945770FC137FF7D5D3408D5D40836FD4C715DE6A1744F6F5AF21B2386827/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="How I Met Your Mother image" />
                        <h2>How I Met Your Mother</h2>
                        <p>Ted Mosby, an architect, recounts to his children the events that led him to meet their mother. His journey is made more eventful by the presence of his friends Lily, Marshall, Robin and Barney.</p>
                    </div>
                    <div className="App-card">
                        <img src="https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Campaign/landingpages/library/theoffice/mainpage/office-social-min.png/_jcr_content/renditions/original" alt="The Office image" />
                        <h2>The Office</h2>
                        <p>A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
