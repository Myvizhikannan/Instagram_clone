import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Suggestion() {

  const [profile,setProfile]=useState(null);
  const [suggestions,setSuggestions]=useState([]);

  const [following,setFollowing]=useState({});


  useEffect(()=>{
          fetch('http://localhost:3000/profile').
          then(response=>response.json())
          .then(response=>setProfile(response))
          .catch(err=>console.log(err.message))
      },[])

    useEffect(()=>{
            fetch('http://localhost:3000/suggestion').
            then(response=>response.json())
            .then(response=>setSuggestions(response))
            .catch(err=>console.log(err.message))
        },[])

   

    const handleOnClickUpdate=async(sid,susername,sprofile_pic)=>{
      console.log(sid);
      axios.post('http://localhost:3000/followers',{id:sid,username:susername,profile_pic:sprofile_pic})
      .then(console.log('follower added'))
      .catch(err=>console.log(err))
    }

    const handleOnClickRemove=async(sid)=>{
      
      axios.delete(`http://localhost:3000/followers/${sid}`)
      .then(console.log('follower removed'))
      .catch(err=>console.log(err))
    }

  return (
    <div className='suggestion w-75 mx-auto mt-5'>
      <div>
        {profile?
        (<div className='d-flex mb-2'>
          <img className="dp rounded-circle me-1" src={profile.profile_pic} alt="profile_pic" />
          <div className='h6'>{profile.username}</div>
          <p className='text-info ms-auto h6'>Switch</p>
        </div>):
        <div>
          Loading..
        </div>}
      </div>

      <div className='d-flex'>
        <div className='p'>Suggested for you</div>
        <div className='fw-bold ms-auto'>See All</div>
      </div>

      <div>
        {suggestions.length>0?
        (<div className='mt-3'>
            {suggestions.map(suggestion=>(
              <div className='d-flex my-3' key={suggestion.id}>
                  <img className="dp rounded-circle me-1" src={suggestion.profile_pic} alt="profile_pic" />
                  <div className='h6'>{suggestion.username}</div>
                  <a className='text-info ms-auto h6 ' onClick={()=>{
                    const isFollowing=!following[suggestion.id];
                    setFollowing((prev)=>({
                      ...prev,
                    [suggestion.id]:isFollowing}));
                    isFollowing?(
                    handleOnClickUpdate(suggestion.id,suggestion.username,suggestion.profile_pic)
                    ):handleOnClickRemove(suggestion.id);
                  }}
                    >{following[suggestion.id]?'Following':'Follow'}
                  </a>
              </div>
            ))}
        </div>):
        <div>
          Loading..
        </div>}
      </div>
      <div className='text-secondary'>© 2026 Instagram from Meta</div>



    </div>
  )
}

export default Suggestion