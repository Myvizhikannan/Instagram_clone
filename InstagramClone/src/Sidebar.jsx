import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



function Sidebar() {

  const navigate=useNavigate();

  return (
    <div className='m-3'>
        <div className='d-flex flex-column gap-4 position-fixed'>
            <i className="bi bi-instagram mt-3 mb-3 fs-4"></i>
            <div><i className="fa-regular fa-house fs-5"></i>Home</div>
            <div><i className="bi bi-play-btn fs-5"></i>Reels</div>
            <div><i className="fa-regular fa-paper-plane fs-5"></i>Message</div>
            <div><i className="bi bi-search fs-5"></i>Search</div>
            <div><i className="fa-regular fa-heart fs-5"></i>Notification</div>
            <div><i className="fa-solid fa-plus fs-5"></i>Create</div>
            <div onClick={()=>navigate('/profile')}><i className="fa-regular fa-circle-user fs-5"></i>Profile</div>
        </div>
        <div className='d-flex flex-column gap-4 position-fixed bottom-0 mb-3'>
            <div><i className="bi bi-list fs-5"></i>More</div>
            <div><i className="bi bi-grid-1x2 fs-5"></i>Also from Meta</div>
            
        </div>
    </div>
  )
}

export default Sidebar