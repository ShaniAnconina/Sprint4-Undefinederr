export function FilterModal() {



    return (
        <section className="filter-modal">
            {serviceOption &&
                <form id="filters" className="services-options">
                    <div>
                        <input type="checkbox" id="graphics-design" name="graphics-design" value="graphics-design" />
                        <label for="graphics-design">Graphics and Design</label>
                    </div>
                    <div>
                        <input type="checkbox" id="digital-marketing" name="digital-marketing" value="digital-marketing" />
                        <label for="digital-marketing">Digital Marketing</label>
                    </div>
                    <div>
                        <input type="checkbox" id="writing-translation" name="writing-translation" value="writing-translation" />
                        <label for="writing-translation">Writing and Translation</label>
                    </div>
                    <div>
                        <input type="checkbox" id="video-animation" name="video-animation" value="video-animation" />
                        <label for="video-animation">Video and Animation</label>
                    </div>
                    <div>
                        <input type="checkbox" id="music-audio" name="music-audio" value="music-audio" />
                        <label for="music-audio">Music and Audio</label>
                    </div>
                    <div>
                        <input type="checkbox" id="programming-tech" name="programming-tech" value="programming-tech" />
                        <label for="programming-tech">Programming and Tech</label>
                    </div>
                    <div>
                        <input type="checkbox" id="business" name="business" value="business" />
                        <label for="business">Business</label>
                    </div>
                    <div>
                        <input type="checkbox" id="lifestyle" name="lifestyle" value="lifestyle" />
                        <label for="lifestyle">Lifestyle</label>
                    </div>
                    <div>
                        <input type="checkbox" id="trending" name="trending" value="trending" />
                        <label for="trending">Trending</label>
                    </div>

                </form>}

            {budget &&
                <form id="filters" className="budget">
                    <div className="min">
                        <p>MIN.</p>
                        <input type="number" name="min-price" className="min-price" />
                        <span>$</span>
                    </div>
                    <div className="max">
                        <p>MAX.</p>
                        <input type="number" name="max-price" className="max-price" />
                        <span>$</span>
                    </div>
                </form>}

            {deliveryTime &&
                <form id="filters" className="delivery">
                    <div>
                        <input type="radio" id="24h" name="delivery-time" value="24h" />
                        <label for="24h">Express 24H</label>
                    </div>
                    <div>
                        <input type="radio" id="3d" name="delivery-time" value="3d" />
                        <label for="3d">Up to 3 days</label>
                    </div>
                    <div>
                        <input type="radio" id="7d" name="delivery-time" value="7d" />
                        <label for="7d">Up to 7 days</label>
                    </div>
                    <div>
                        <input type="radio" id="anytime" name="delivery-time" value="" checked />
                        <label for="anytime">Anytime</label>
                    </div>
                </form>}

            <div className="filters-footer">
                <button type="button">Clear All</button>
                <button form="filters" type="submit">Apply</button>
            </div>
        </section>
    )
}