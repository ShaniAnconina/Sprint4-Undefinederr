
export function GigPreview({gig}) {


    return (
       <section className="gig-preview">
        <img src={require('../assets/img/freelancer.jpg')} />
        <h3>{gig.title}</h3>
       </section>
    )
}
