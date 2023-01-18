import { Link, useNavigate, useParams } from "react-router-dom"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { gigService } from "../services/gig.service"
import { showErrorMsg } from "../services/event-bus.service"

export function GigDetails() {
    const navigate = useNavigate()
    const [gig, setGig] = useState(null)
    const { gigId } = useParams()
    const elReview = useRef(null)

    useEffect(() => {
        loadGig()
    }, [])

    async function loadGig() {
        try {
            const gig = await gigService.get(gigId)
            setGig(gig)
            console.log(gig)
        } catch (err) {
            showErrorMsg('eror msg from details, need to thing about txt...')
            navigate('/gig')
        }
    }

    function goToReview() {
        elReview.current.scrollIntoView({ behavior: "smooth" })
    }
    if (!gig) return <p></p> //TODO: loader will be here!

    return (
        <section className="gig-details flex">

            <section className="main">

            //TODO:navlink breadcrumds
            
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        //TODO:mini user: photo, name, miniInfo(level..) , rate(stars+ reviewsCount) , langs...
                <div className="mini-user"> Lorem ipsum dolor sit amet.</div>
        //TODO:photos gallery (carosela) + mini photos

                //TODO: carosela mini-review (drag-drop support)
                <br />
                <h2>What people loved about this seller</h2>

                <button className='open-btn' onClick={goToReview}>See all reviews</button>
                {/* <a href="#reviews">See all reviews</a> */}


        //TODO: about the gig
                <h2>About This Gig</h2>
                <p>{gig.description}</p>

                <p>I will design a creative and unique webpage for you. The best website design gig on Fiverr!
                    I can create any page be it homepage for a new website, inner page, designing a landing page, or redesigning an existing webpage</p>

                <strong>What you will get:</strong>

                <u>Basic $10 gig:</u>


            //TODO: about the seller (img, name, mini-des, rate, contact chat link)
                //TODO: about the seller div border()
                //TODO: packeges 
                //TODO: FAQ
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, dolor? Magnam eligendi qui eos architecto neque libero odio, repellat vero nesciunt magni facilis, totam, eveniet beatae error dignissimos enim perspiciatis dolorum ab officiis. Nam necessitatibus ab, sint consequatur nesciunt eos illo suscipit nostrum! Placeat excepturi pariatur aliquid, et magnam consectetur. Sequi hic dolores voluptatibus voluptas autem perspiciatis labore nihil a itaque eligendi sed, ab fugit? Ullam cupiditate necessitatibus placeat aut cum, numquam commodi eius aliquid neque, iure unde dicta soluta architecto magnam rem autem aperiam adipisci consequatur itaque odit eos. Praesentium minima, labore voluptas voluptates aliquid enim fugit ducimus beatae nihil nam unde in consequatur rem quos fugiat eius ex soluta quaerat? Illo rem tempore eius corrupti dolorem sapiente mollitia velit totam, esse quo suscipit nisi odio obcaecati qui laudantium ex ducimus fugit nam quaerat sed doloremque non? Asperiores facere dolore rem, consequatur cumque natus vero libero, explicabo commodi in velit deleniti quos eveniet cum expedita ipsum! Est dolore quia autem nostrum neque libero, quidem, culpa nihil nemo inventore dignissimos. Sapiente ratione consequuntur perspiciatis, quasi neque veritatis, aspernatur expedita voluptatibus quaerat ducimus repellendus placeat quis pariatur ipsam repudiandae hic provident optio nobis nisi. Perspiciatis, exercitationem asperiores! Alias voluptates, voluptatem, consequuntur dolore laborum earum, vero minus maxime rem qui ea atque. Beatae earum sed enim commodi laudantium asperiores saepe esse. Dolores culpa quo itaque illo quis! Officia adipisci repellendus ut dolor sit vel voluptatum nemo vero commodi nobis et nostrum, excepturi pariatur, architecto deserunt iste voluptatem enim tenetur eligendi, quas labore. Numquam, ut perferendis. Nemo illum necessitatibus neque ullam sed nam numquam non reiciendis omnis repellat ipsum consequuntur totam laboriosam quisquam, facilis porro aperiam eaque optio esse dolores, voluptatem, dignissimos dolorum debitis! Iusto mollitia sequi error, cum veritatis, earum quas labore esse ipsam quisquam laudantium iure. Dolor, est quibusdam dignissimos possimus sunt facilis quae, nisi eum earum blanditiis odit quidem aperiam vel fugit, quas eos commodi recusandae! Deserunt, sit rerum nemo eveniet delectus temporibus laudantium ex porro? Rem animi libero sequi repellendus maiores voluptatibus! Natus, odit distinctio nulla iure atque voluptatibus soluta eligendi nemo itaque fugit maiores molestiae sunt veritatis est, adipisci quibusdam? Quibusdam nesciunt nam qui. Tempora quae eum praesentium quos consectetur fugit possimus debitis ducimus harum beatae illo perspiciatis et, reprehenderit cupiditate ratione facilis necessitatibus eius accusamus dicta cumque? Tempore ducimus debitis fugit rem! Sed rerum in quo nemo, autem corporis dignissimos? Eligendi ab totam ullam nam temporibus doloribus aliquid corporis recusandae illum nulla asperiores illo at excepturi laudantium id vitae ex, possimus ratione minima. Aperiam deleniti dolores, porro modi repudiandae tenetur praesentium consequuntur officiis laborum eligendi iusto nemo neque perspiciatis doloribus unde optio ratione placeat temporibus. Minima perferendis accusamus dicta necessitatibus, voluptatem dolores neque, ipsam nemo repellat est error repudiandae quae eius voluptas, mollitia asperiores laboriosam tempore? Ut ab, velit fugiat doloremque cupiditate ducimus rerum iure repellat quia, recusandae voluptas mollitia deserunt tenetur veniam illum repellendus provident? Quo consequatur id exercitationem, temporibus iste saepe ipsum nam illum architecto quia esse delectus sequi iure excepturi recusandae debitis cupiditate repellendus laboriosam quas, fugit magni quam labore impedit libero? Culpa, odit. Dignissimos, cupiditate. Modi, aliquam. Nobis natus obcaecati incidunt laborum. Et quae maiores placeat excepturi! Ducimus aliquam aut laboriosam dolorem quia architecto repudiandae soluta, tempora temporibus error quibusdam recusandae ex sequi aspernatur nihil quos amet eos. Explicabo nesciunt rem asperiores eum?
                //TODO: full reviews (load more...)
                //TODO: count of reviews, 'reviews of this gig', rate(stars)
                //TODO: filter reviews by stars (count)
                //TODO: search reviews
                //TODO: sort reviews
                //TODO: filter, checkBox (reviews with imgs)
                //TODO: photo, name || country and name || stars , date || body || review for the review(helpful?yes/no)

                <div ref={elReview} id='reviews'>reviews!!!!!!!!!!!!!!</div>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at vitae autem accusamus iusto fuga error officia maiores quaerat obcaecati molestias inventore voluptas nemo expedita aliquam recusandae molestiae adipisci, tempora suscipit totam eos, impedit assumenda? Dolore autem recusandae animi assumenda debitis tempora aliquid dignissimos veritatis, libero, repellendus impedit voluptatibus tenetur, ducimus id molestias expedita laborum enim obcaecati voluptatem quibusdam minus? Excepturi voluptatem, adipisci doloremque reiciendis inventore repudiandae ipsa maxime, minus, labore beatae hic culpa. Omnis quaerat dolores cupiditate amet fugit in tenetur deleniti nostrum earum at accusantium maxime facilis ullam est unde magnam, possimus architecto vitae! Sed fuga reprehenderit exercitationem porro aspernatur quod mollitia, quo unde alias molestiae nisi obcaecati quos dignissimos. Aperiam quae at iure temporibus delectus natus nam alias dolores ipsam harum neque velit nemo exercitationem obcaecati quidem ut corrupti tempore, pariatur vitae! Inventore minima aspernatur perferendis ducimus reiciendis eos commodi ullam repudiandae sed a. Quia id sint deleniti dignissimos eaque? Laborum amet assumenda rem magnam quam tempora, mollitia expedita veritatis ducimus accusantium ratione enim consectetur eaque ex unde explicabo illum voluptatibus quisquam dolor quae, ipsum labore laudantium molestias! Esse, nulla quasi. Atque et repellat fugit vitae. Inventore harum quibusdam esse veritatis animi aliquid, veniam earum magnam et?
            </section>

            
            <section className="sidebar-content-container">
            //TODO:stiky buying&&contect(chat)
                <header>
                    <h3 className="flex">
                        <b className="title">Package name</b>
                        <div className="price-container">
                            <span>{gig.price}$</span>
                        </div>
                    </h3>
                    <p>{gig.title}</p>
                </header>
                <article>
                    <div className="additional-info flex">
                        <div className="delivery-info">
                            <p>{gig.daysToMake} Days Delivery</p>
                        </div>
                        <div className="revisions-info">
                            <p>{gig.revisions} Revisions</p>
                        </div>
                    </div>

                </article>
                <Link to={`/gig/payment/${gigId}`} ><button className="Continue-btn">Continue</button></Link>

                <button className="contact-seller">Contact Seller</button>
            </section>

        </section>
    )
}