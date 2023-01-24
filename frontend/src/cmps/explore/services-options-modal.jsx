//TODO refactor to loop on categories

export function ServicesOptionsModal({onSubmit}) {

    return (
        <form id="filters" className="services-options">
            <div className="service">
                <input type="checkbox" id="graphics-design" name="graphics-design" value="graphics-design" />
                <label htmlFor="graphics-design">Graphics and Design</label>
            </div>
            <div className="service">
                <input type="checkbox" id="digital-marketing" name="digital-marketing" value="digital-marketing" />
                <label htmlFor="digital-marketing">Digital Marketing</label>
            </div>
            <div className="service">
                <input type="checkbox" id="writing-translation" name="writing-translation" value="writing-translation" />
                <label htmlFor="writing-translation">Writing and Translation</label>
            </div>
            <div className="service">
                <input type="checkbox" id="video-animation" name="video-animation" value="video-animation" />
                <label htmlFor="video-animation">Video and Animation</label>
            </div>
            <div className="service">
                <input type="checkbox" id="music-audio" name="music-audio" value="music-audio" />
                <label htmlFor="music-audio">Music and Audio</label>
            </div>
            <div className="service">
                <input type="checkbox" id="programming-tech" name="programming-tech" value="programming-tech" />
                <label htmlFor="programming-tech">Programming and Tech</label>
            </div>
            <div className="service">
                <input type="checkbox" id="business" name="business" value="business" />
                <label htmlFor="business">Business</label>
            </div>
            <div className="service">
                <input type="checkbox" id="lifestyle" name="lifestyle" value="lifestyle" />
                <label htmlFor="lifestyle">Lifestyle</label>
            </div>
            <div className="service">
                <input type="checkbox" id="trending" name="trending" value="trending" />
                <label htmlFor="trending">Trending</label>
            </div>

        </form>
    )
}