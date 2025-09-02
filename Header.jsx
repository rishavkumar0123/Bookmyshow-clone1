import location from './location.jsx'
import Searchbar from './Searchbar.jsx'
import Userprofile from './Userprofile.jsx'

function Header(){
    return(
        <>
        //logo
           <Searchbar/>
           <location/>
           <Userprofile/>
        </>
    )
}
export default Header
