
export function GigPreview({gig}) {

    return (
       <section className="gig-preview">
        <img src={img} />
        <h3>{gig.title}</h3>
       </section>
    )
}
