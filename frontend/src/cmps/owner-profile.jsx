import { OwnerRate } from "./owner-rate";

export function OwnerProfile({ gig }) {
    return <div className="owner-profile">
        <h2>About The Seller</h2>

        <div className="profile-info flex">

            <img className="owner-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
            <div className="flex column ">
                <p className="owner-name">{gig.owner.fullname}</p>
                <div className="owner-rate flex"> <OwnerRate rate={gig.owner.rate} /> </div>
                <button>Contact Me</button>

            </div>
        </div>
        <div className="profile-Description">
cdsdc
            
        </div>
    </div>
}