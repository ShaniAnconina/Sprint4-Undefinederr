
export function MiniProfile ({loggedinUser}) {

    return <section className="mini-profile">
<div className="profile-username flex space-around">
    <img src={loggedinUser.imgUrl}/>
    <h4>{loggedinUser.fullname}</h4>
</div>
<div className="performance-stats flex column">
    <div className="flex">
        response rate
    </div>
    <div className="flex">
        response rate
    </div>
    <div className="flex">
        response rate
    </div>
    <div className="flex">
        response rate
    </div>
</div>
    </section>
} 