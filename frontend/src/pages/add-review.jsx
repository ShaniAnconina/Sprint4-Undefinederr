import { useEffect } from "react"

import { GrClose } from "react-icons/gr"


export function AddReview({ setIsAddReview, elApp }) {

    useEffect(() => {
        disableScroll(true)
    }, [])

    function onCloseModal() {
        setIsAddReview(null)
        disableScroll(false)
    }

    function disableScroll(status) {
        if (status) {
            elApp.current.style.overflow = 'hidden'
            elApp.current.style.maxHeight = '100vh'
        }
        else {
            elApp.current.style.overflow = 'visible '
            elApp.current.style.maxHeight = 'none'
        }
    }

    return <section onClick={onCloseModal} className="add-review-screen flex column">

        <article onClick={(ev) => ev.stopPropagation()} className="add-review">

            <div className="header flex space-between">
                <h2>Review & Rate</h2>
                <button onClick={onCloseModal}><GrClose /></button>
            </div>

            


        </article>

    </section>
}