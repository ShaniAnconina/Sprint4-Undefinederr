import { OwnerRate } from "./owner-rate"

export function OwnerProfile({ gig }) {
    return <div className="owner-profile">
        <h2>About The Seller</h2>
        <div className="profile-info flex">
            <img className="owner-img" src={gig.owner.imgUrl} />
            <div className="flex column ">
                <p className="owner-name bold">{gig.owner.fullname}</p>
                <div className="owner-rate flex"> <OwnerRate rate={gig.owner.rate} /> </div>
                <button>Contact Me</button>
            </div>
        </div>
        <div className="profile-Description">
            <div className="owner-stas grid" >
                <p className="from flex column">
                    From
                    <strong>{gig.country}</strong>
                </p>
                <p className="respone flex column">
                    Avg. response time
                    <strong>1 hour</strong>
                </p>
                <p className="member flex column">
                    Member since
                    <strong>Jun 2019</strong>
                </p>
                <p className="delivery flex column">
                    Last delivery
                    <strong>2 days</strong>
                </p>
            </div>
            <p className="owner-desc">
                {gig.about}
            </p>
        </div>
    </div>
}