export function ServicesOptionsModal({ onSubmit }) {

    const titles = ['Graphics & Design', 'Digital Marketing', 'Writing & Translation', 'Video & Animation', 'Music & Audio', 'Programming & Tech', 'Business', 'Lifestyle', 'Trending']

    const filterByCategories = []

    function onChange(value) {
        let idx = filterByCategories.indexOf(value)
        if (idx > -1) { // only splice array when item is found
            filterByCategories.splice(idx, 1)
        } else filterByCategories.push(value)
        console.log(filterByCategories)
    }

    return (
        <form id="filters" name="tags" className="services-options" onSubmit={(ev) => onSubmit(ev, filterByCategories)}>
            <div className="service">
                <input type="checkbox" id="graphics-design" name="graphics-design" value="Graphics and Design" onChange={() => onChange("Graphics and Design")} />
                <label htmlFor="graphics-design">Graphics & Design</label>
            </div>
            <div className="service">
                <input type="checkbox" id="digital-marketing" name="digital-marketing" value="Digital Marketing" onChange={() => onChange("Digital Marketing")} />
                <label htmlFor="digital-marketing">Digital Marketing</label>
            </div>
            <div className="service">
                <input type="checkbox" id="writing-translation" name="writing-translation" value="Writing and Translation" onChange={() => onChange("Writing and Translation")} />
                <label htmlFor="writing-translation">Writing & Translation</label>
            </div>
            <div className="service">
                <input type="checkbox" id="video-animation" name="video-animation" value="Video and Animation" onChange={() => onChange("Video and Animation")} />
                <label htmlFor="video-animation">Video & Animation</label>
            </div>
            <div className="service">
                <input type="checkbox" id="music-audio" name="music-audio" value="Music and Audio" onChange={() => onChange("Music and Audio")} />
                <label htmlFor="music-audio">Music & Audio</label>
            </div>
            <div className="service">
                <input type="checkbox" id="programming-tech" name="programming-tech" value="Programming and Tech" onChange={() => onChange("Programming and Tech")} />
                <label htmlFor="programming-tech">Programming & Tech</label>
            </div>
            <div className="service">
                <input type="checkbox" id="business" name="business" value="Business" onChange={() => onChange("Business")} />
                <label htmlFor="business">Business</label>
            </div>
            <div className="service">
                <input type="checkbox" id="lifestyle" name="lifestyle" value="lifestyle" onChange={() => onChange("lifestyle")} />
                <label htmlFor="lifestyle">Lifestyle</label>
            </div>
            <div className="service">
                <input type="checkbox" id="trending" name="trending" value="Trending" onChange={() => onChange("Trending")} />
                <label htmlFor="trending">Trending</label>
            </div>
            <div className="service">
                <input type="checkbox" id="lifestyle" name="lifestyle" value="Lifestyle" onChange={() => onChange("Lifestyle")} />
                <label htmlFor="lifestyle">Lifestyle</label>
            </div>
        </form>
    )
}