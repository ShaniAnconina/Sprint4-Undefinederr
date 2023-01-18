
export function SearchBar({onChange , onFilterSubmit , filterByToEdit}){

    return <form className="filter-form" onSubmit={onFilterSubmit}>
    <div className="filters-container flex">
        <input
            className="search-bar"
            type="text"
            id="txt"
            name="txt"
            placeholder="Try 'building mobile app'"
            value={filterByToEdit.txt}
            onChange={onChange}
        />
        <button className="search-bar-btn">search</button>
    </div>
</form>
}