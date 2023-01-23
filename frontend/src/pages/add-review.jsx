import { useEffect } from "react"

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
            elApp.current.style.overflow = 'none'
            elApp.current.style.maxHeight = 'none'
        }
    }

    return <section onClick={onCloseModal} className="add-review-screen">

        <article onClick={(ev) => ev.stopPropagation()} className="add-review">
            

        </article>

    </section>
}