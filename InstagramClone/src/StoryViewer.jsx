import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

function ViewStory() {
    const [story,setStory]=useState(null);
    const {id,tot}=useParams();

    const navigate=useNavigate();
    useEffect(()=>{
        if(id>tot || id<=0){
             navigate('/');
             return;
        }
        fetch(`http://localhost:3000/stories/${id}`).
        then(response=>response.json())
        .then(response=>setStory(response))
        .catch(err=>console.log(err.message))
  },[id])

  
     // http://localhost:5173/stories/0/4
  return (
    <div className=' vh-100 d-flex justify-content-center align-item-center'>
      {story?
      (<div>
          <div className='h6 ms-5'>{story.user.username}</div>
          <Link to={`/stories/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill fs-3"></i></Link>
          <img style={{height:"95%"}} src={story.image} alt="story-loading" />
          <Link to={`/stories/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill ms-2 fs-3"></i></Link>
          
          
      </div>):
      (<div>
        loading..
      </div>)}
    </div>
  )
}

export default ViewStory

///${tot}