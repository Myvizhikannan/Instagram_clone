import React, { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {

  const [stories,setStories]=useState([]);

  const navigate=useNavigate();

  useEffect(()=>{
          fetch('http://localhost:3000/stories').
          then(response=>response.json())
          .then(response=>setStories(response))
          .catch(err=>console.log(err.message))
  },[])

  let tot=0;

  return (
    <div>
      <div className='d-none'>{tot=stories.length}</div>
      {stories.length>0?
      (<div className='d-flex'>
        {stories.map((story)=>(
          <div className='mx-2 mt-1' key={story.id}>
            <div className='gradiant-border'>
              <img className="storyDp rounded-circle" src={story.user.profile_pic} alt="profile" onClick={()=>navigate(`/stories/${story.id}/${tot}`)} />
            </div>
             <div className='text-truncate' style={{maxWidth:"60px"}}>{story.user.username}</div>
          </div>
        ))}
      </div>):
      (<div>
        Loading..
      </div>)}
    </div>
  )
}

export default Stories