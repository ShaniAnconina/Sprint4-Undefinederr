import {getCategories} from '../services/categories-data.js'
export function CategoryNav() {

    const categories = getCategories()
    console.log(categories)
    const titles = []

    for (let key in categories){
        titles.push(key)
    }

    function OnSelectCatogery(title){
        console.log("selected ", title)
    }


    return <ul className='flex space-around none-list-style'>
{
    titles.map((title)=> <li key={title}><a onClick={()=>{OnSelectCatogery(title)}}>{title}</a></li>)
}
    </ul>
}