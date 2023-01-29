import { loader } from '../../assets/loader/loader.gif' 


export function Loader() {
function inTime(){
    return <div class="loadingio-spinner-spin-z5r3fl0qh6"><div class="ldio-tmioj0xomke">
<div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
</div></div>
}
function outTime(){
    return <div className='flex column'><div class="loadingio-spinner-spin-z5r3fl0qh6"><div class="ldio-tmioj0xomke">
<div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
</div>
<p>Something went wrong :\</p>
</div>
</div>
}

    return( 
inTime()
    )
}