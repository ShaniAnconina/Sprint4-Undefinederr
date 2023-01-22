export function ServicesOptionsModal() {

    return (
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

        </form>
    )
}