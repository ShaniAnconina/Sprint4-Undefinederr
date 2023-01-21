
import { axios } from 'axios'
// import { image } from 'cloudinary-react'
// import { useState } from 'react'

export const uploadImg = async () => {
    const CLOUD_NAME = 'dhl3pnprn'
    const UPLOAD_PRESET = 'vwwno82i'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData()

    // FORM_DATA.append('file', ev.target.files[0])
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        console.log('res:', res)
   
        // const res = await fetch(UPLOAD_URL, {
        //     method: 'POST',
        //     body: FORM_DATA
        // })
        // const elImg = document.createElement('img')
        // const { url } = await res.json()
        // elImg.src = url
        // document.body.append(elImg)
    } catch (err) {
        console.error(err)
    }
}