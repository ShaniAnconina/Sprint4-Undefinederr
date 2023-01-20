import { useState } from "react";
import { Link } from "react-router-dom";
import { gigService } from "../services/gig.service";
import { saveGig } from "../store/gig/gig.action";


export function GigEdit() {
    const [gigToEdit, setGigToEdit] = useState(gigService.getEmptyGig())

    function onSaveGig(ev) {
        ev.preventDefault()
        saveGig(gigToEdit)
    }


    function handleChange({ target }) {
        let { type, value, name: field } = target
        value = type === 'number' ? +value : value
        setGigToEdit((prevGig) => ({ ...prevGig, [field]: value }))
    }

    return (
        <section className="gig-edit">
            <h2>{gigToEdit._id ? 'Edit gig' : 'Add gig'}</h2>

            <form onSubmit={onSaveGig}>

                <div className="title-container">
                    <div className="title-desc">
                        <h3>Gig title</h3>
                        <p>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                    </div>
                    <input type="text" name="title" className="title" placeholder="I will..." value={gigToEdit.title} onChange={handleChange} />
                </div>

                <div className="description-container">
                    <div className="description-desc">
                        <h3>Gig description</h3>
                        <p>Briefly Describe Your Gig</p>
                    </div>
                    <input type="text" name="description" className="description" value={gigToEdit.description} onChange={handleChange} />
                </div>

                <div className="price-container">
                    <div className="price-desc">
                        <h3>Price</h3>
                        <p>Price you're offering for this gig</p>
                    </div>
                    <input type="number" name="price" className="price" value={gigToEdit.price} onChange={handleChange} />
                </div>

                <div className="img-container">
                    <div className="img-desc">
                        <h3>Upload Images</h3>
                        <p>Encourage buyers to choose your Gig by featuring a variety of your work.</p>
                    </div>
                    <input type="file" name="img" className="img" value={gigToEdit.imgUrl} />
                </div>

                <div className="category-container">
                    <div className="category-desc">
                        <h3>Category</h3>
                        <p>Choose the category most suitable for your Gig.</p>
                    </div>
                    <select multiple name="category" className="category" value={gigToEdit.tags} onChange={handleChange}>
                        <option value=""></option>
                        <option value="graphics-design">Graphics & Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="writing-translation">Writing & Translation</option>
                        <option value="video-animation">Video & Animation</option>
                        <option value="music-audio">Music & Audio</option>
                        <option value="programming-tech">Programming & Tech</option>
                        <option value="business">Business</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="trending">Trending</option>
                    </select>
                </div>

                <div className="days-to-Make-container">
                    <div className="days-to-Make-desc">
                        <h3>Days to Make</h3>
                        <p>Days it will take you on average to finish this gig.</p>
                    </div>
                    <select name="daysToMake" className="days-to-Make" value={gigToEdit.daysToMake} onChange={handleChange}>
                        <option value=""></option>
                        <option value="1">1 day delivery</option>
                        <option value="2">2 days delivery</option>
                        <option value="3">3 days delivery</option>
                        <option value="4">4 days delivery</option>
                        <option value="5">5 days delivery</option>
                        <option value="6">6 days delivery</option>
                        <option value="7">7 days delivery</option>
                        <option value="8">8 days delivery</option>
                        <option value="9">9 days delivery</option>
                        <option value="10">10 days delivery</option>
                        <option value="14">14 days delivery</option>
                        <option value="21">21 days delivery</option>
                        <option value="30">30 days delivery</option>
                        <option value="45">45 days delivery</option>
                        <option value="60">60 days delivery</option>
                        <option value="75">75 days delivery</option>
                        <option value="90">90 days delivery</option>
                    </select>
                </div>

                <div>
                    <button>{gigToEdit._id ? 'Save' : 'Add'}</button>
                    <Link to="/gig">Cancel</Link>
                </div>
            </form>
        </section>
    )
}