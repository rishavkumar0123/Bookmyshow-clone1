import { useState } from "react"

function Searchbar(){
    const[searchText,setSearchText]=useState("")//state var
    return(
       <>
       <input type="text"
       placeholder="Search for movies,event,plays,sports"
       onChange={event =>setSearchText(event.target.value)} />
       </>
    )


}
export default Searchbar