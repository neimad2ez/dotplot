import './searchbar.css'
function Searchbar(){
    return(
    <div id='searchbar'>
        <input id='box' type="text" name="Search" placeholder='Patient Name/ID'/>
        <button id='search'>Search</button>
    </div>
    )
}

export default Searchbar