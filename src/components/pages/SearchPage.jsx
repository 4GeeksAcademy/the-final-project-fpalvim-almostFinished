import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import { Link } from "react-router-dom";
import Maps from "../common/Maps";
import axios from "axios";

function SearchPage() {
    const { comments, setComments, userTags, setUserTags, images } = useContext(MyContext);
    const {users, searchQuery, setSearchQuery} = useContext(MyContext)
    const loggedInProfile = "venue"
    const filteredUsers = users.filter((user) => user.profile_type !== loggedInProfile)
    const queryProfile = filteredUsers.filter((profile) => profile.username.toLowerCase().includes(searchQuery.toLowerCase()));
    const id = localStorage.getItem("userId")
    const user = users.find(user => user.id === Number(id));
    const handleSearch = (e) => {
        const searchWord = e.target.value
        setSearchQuery(searchWord)
    }
    const fetchUserTagsById = async () => {
        const response = await axios.get(`https://didactic-capybara-7v7r7g6p7jx43p5wg-8787.app.github.dev/user/${id}/tags`)
        // console.log(response.data);
        setUserTags(response.data)
        console.log(userTags, response.data)
      }
    useEffect(()=>{
       
    },[])
    return ( 
        <div className="search-page-container">
            <div className="search-bar p-3 d-flex align-items-center">
                <input className="search-bar-input w-75" id="searchBar" value={searchQuery} onChange={(e)=>handleSearch(e)} type="text" placeholder="Who are you looking for?"></input>
            </div>
        
            <div className="search-page-middle-wrapper  auto p-3">
            <Maps/>
                <div className="search-page-middle-left-side">
                
                    {queryProfile.map((filteredUser)=>(
                        <div className="card-holder col auto mb-5" style={{zIndex: 4, position:"relative", top:"-150px", left:"50px"}}>
                    <div key={filteredUser.id} className="card " style={{width: "300px", height:"450px",}}>
                        <img src={filteredUser.profile_picture} className="card-img-top" alt="..."></img>
                        <h5 className="band-title p-2">{filteredUser.username} </h5>
                        <div className="cardTop d-flex justify-content-center">
                        <div className="dropdown">
  <button onClick={fetchUserTagsById} className="button-78 dropdown-toggle" role="button" type="button" data-bs-toggle="dropdown" aria-expanded="false">genres</button>
  <ul className="dropdown-menu">
    
 
  </ul>
</div>
<Link type="button" to={`/profilepage/${filteredUser.id}`}><button className="button-78">visit account</button></Link>
</div>
                        <div className="card-body ">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           
                        </div>
                    </div> 
                    </div>
                     ))}
                </div>
                
                    <div className=" text-center">
                        <h1 className="">hellp</h1>
                        
                    
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="nav justify-content-center">
                <Link to={`/faqspage`} type="button" className="btn btn-link">FAQS</Link>
                <button type="button" className="btn btn-link" onClick={() => navigate('/FaqsPage')}>about us</button>
                <button type="button" className="btn btn-link" onClick={() => navigate('/FaqsPage')}>contact</button>
            </div>
        </div>
     );
}

export default SearchPage;