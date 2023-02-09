import './homepage.css';
import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;


    render() {
        return (
            <div class="movies">
                <h1>Featured Movies</h1>

                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/AHmCH7iB_IM/maxresdefault.jpg" alt="Creed III" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Creed III</div>
                    </div>

                </div>

                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/qEVUtrk8_B4/maxresdefault.jpg" alt="John Wick: chapter 4" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">John Wick: Chapter 4</div>
                    </div>

                </div>

                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/uLtkt8BonwM/maxresdefault.jpg" alt="Last Of Us" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Last of Us</div>
                    </div>

                </div>

                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/05w_GiCN39Y/maxresdefault.jpg" alt="Triple Frontier" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Triple Frontier</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/fEE4RO-_jug/maxresdefault.jpg" alt="FF9" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Fast and Furious 9</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/hOAgHDsQrQY/maxresdefault.jpg" alt="Cars 3" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Cars 3</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/hflCiNtY6MA/maxresdefault.jpg" alt="Oppenheimer" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Oppenheimer</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/eFYUX9l-m5I/maxresdefault.jpg" alt="AMCO" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">A Man Called Otto</div>
                    </div>

                </div>
                <h1>Featured TV Shows</h1>

                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/VcQvAze0_PI/maxresdefault.jpg" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">The Office</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/IcMxe5b_VUs/maxresdefault.jpg" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Friends</div>
                    </div>

                </div>

                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/_HQQSUNRUHI/maxresdefault.jpg" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">How I Met Your Mother</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/BZ5OCIJVErw/maxresdefault.jpg" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Dark</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/k4pSqXVhZAA/maxresdefault.jpg" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Designated Survivor</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Breaking Bad</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/mactiVSU0m0/maxresdefault.jpg" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Better Call Saul</div>
                    </div>

                </div>
                <div class="image">
                    <img class="image__img" src="https://i.ytimg.com/vi/AL9zLctDJaU/maxresdefault.jpg" />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Prison Break</div>
                    </div>

                </div>
            </div>
        );
    }
}
