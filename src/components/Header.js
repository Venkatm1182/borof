import React, {useState} from 'react'
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
  const[act,setAct]=useState('menus');
  const navact=()=>{act=='menus'?setAct('menus nav-act'):setAct('menus')};
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function searchPage(event){
    if(event.key==="Enter"){
      // console.log(searchInput);
      navigate("/search/"+searchInput,{state:{search:searchInput}});
    }
    
  }

  function movetoHome(){
    navigate("/homepage");
  }
  function movetoTop(){
    navigate("/top-airing");
  }
  function movetoPopular(){
    navigate("/popular")
  }

  // function

  return (
    <div className='headerMain'>
<nav className="nav">
  <a href='#' className="tit">BORO</a>

  <input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   onKeyDown={searchPage}
   value={searchInput} className='input' onSubmit={searchPage}/>

   <button type="button" class="btn btn-primary">Login</button>

  <ul className={act}>
    <li className="menuiten" onClick={movetoHome}><a href='' className="menulink">Home</a></li>
    <li className="menuiten" onClick={movetoTop}><a href='' className="menulink">Top-airing</a></li>
    <li className="menuiten" onClick={movetoPopular}><a href='' className="menulink">Popular</a></li>

  </ul>
  <div onClick={navact} className="menutog">
    <div className="l1"></div>
    <div className="l2"></div>
    <div className="l3"></div>
  </div>
</nav>
    </div>
  )
}

export default Header