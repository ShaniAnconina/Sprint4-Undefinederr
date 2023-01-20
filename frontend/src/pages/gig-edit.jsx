import { Link } from "react-router-dom";


export function GigEdit() {
    
function onSaveGig(){

}

    return (
        <section className="gig-edit">
            {/* <h2>{gigToEdit._id ? 'Edit gig' : 'Add gig'}</h2> */}

            <form onSubmit={onSaveGig}>
                <label htmlFor="name">Name: </label>
                <input type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name..."
                    // value={gigToEdit.name}
                    // onChange={handleChange}
                />

                <label htmlFor="price">Price: </label>
                <input type="number"
                    name="price"
                    id="price"
                    placeholder="Enter price..."
                    // value={gigToEdit.price}
                    // onChange={handleChange}
                />

      

                <div>
                    {/* <button>{gigToEdit._id ? 'Save' : 'Add'}</button> */}
                    <Link to="/gig">Cancel</Link>
                </div>
            </form>
        </section>
    )
}