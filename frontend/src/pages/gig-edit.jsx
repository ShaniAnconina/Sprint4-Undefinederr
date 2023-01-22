import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { saveGig } from "../store/gig/gig.action"

import axios from "axios"

import { gigService } from "../services/gig.service"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export function GigEdit() {
    const navigate = useNavigate()
    const [imageData, setImageData] = useState('')
    const [gigToEdit, setGigToEdit] = useState(gigService.getEmptyGig())
    const [selectedImage, setSelectedImage] = useState(null)
    const [tags, setTags] = useState([])

    async function onSaveGig(ev) {
        ev.preventDefault()
        try {
            gigToEdit.imgUrl = imageData.secure_url
            gigToEdit.tags = tags
            await saveGig(gigToEdit)
            navigate('/gig')
            showSuccessMsg('Your gig has been saved!')
        } catch (err) {
            showErrorMsg('Cannot save your gig')
        }
    }

    function handleChange({ target }) {
        let { type, value, name: field } = target
        value = type === 'number' ? +value : value
        if (field === 'tags') {
            setTags((prevTags) => [...prevTags, value])
            return
        }
        setGigToEdit((prevGig) => ({ ...prevGig, [field]: value }))
    }

    const uploadImg = async () => {
        const CLOUD_NAME = 'dhl3pnprn'
        const UPLOAD_PRESET = 'vwwno82i'
        const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
        const FORM_DATA = new FormData()

        FORM_DATA.append('file', selectedImage)
        FORM_DATA.append('upload_preset', UPLOAD_PRESET)
        try {
            const res = await axios.post(UPLOAD_URL, FORM_DATA)
            setImageData(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <section className="gig-edit main-layout full">
            <div className="add-gig-form">
                <form onSubmit={onSaveGig} id="add-gig-form">

                    <div className="title-container form-containers">
                        <div className="title-desc desc">
                            <h3>Gig title</h3>
                            <p>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                        </div>
                        <textarea required name="title" className="title" placeholder="I will..." value={gigToEdit.title} onChange={handleChange} />
                    </div>

                    <div className="description-container form-containers">
                        <div className="description-desc desc">
                            <h3>Gig description</h3>
                            <p>Briefly Describe Your Gig</p>
                        </div>
                        <textarea name="description" className="description" value={gigToEdit.description} onChange={handleChange} />
                    </div>

                    <div className="form-containers">
                        <div className="img-desc desc">
                            <h3>Upload Images</h3>
                            <p>Encourage buyers to choose your Gig by featuring a variety of your work.</p>
                        </div>
                        <div className="img-input">
                            <div className="upload">
                                <button type="button" className="file-btn">Select image<input type="file" name="img" className="img" onChange={(ev) => setSelectedImage(ev.target.files[0])} /></button>
                                <button type="button" onClick={uploadImg}>Click here to confirm</button>
                            </div>
                            <div className="img-container">
                                {imageData && <img src={`https://res.cloudinary.com/dhl3pnprn/image/upload/v1674297453/${imageData.public_id}`} />}
                            </div>
                        </div>
                    </div>
                    <div className="selects-container">

                        <div className="tags-container form-containers line">
                            <div className="tags-desc desc">
                                <h3>Category</h3>
                                <p>Choose the category most suitable for your Gig.</p>
                            </div>
                            <select multiple name="tags" className="tags" onChange={handleChange}>
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

                        <div className="days-to-Make-container form-containers line">
                            <div className="days-to-Make-desc desc">
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
                        <div className="price-container form-containers line">
                            <div className="price-desc desc">
                                <h3>Price</h3>
                                <p>Price you're offering for this gig</p>
                            </div>
                            <input type="number" name="price" className="price" value={gigToEdit.price} onChange={handleChange} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="add-gig-btns">
                <button type="button" className="cancel"><Link to="/gig">Cancel</Link></button>
                <button className="save" form="add-gig-form" type="submit">Save & Continue</button>
            </div>
        </section >
    )
}