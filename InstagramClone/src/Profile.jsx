import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [profile,setProfile]=useState();

    const [followers,setFollowers]=useState();

    const [unfollowing,setUnfollowing]=useState();

    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then(response=>{setProfile(response.data)})
        .catch(err=>console.log(err));

        axios.get('http://localhost:3000/followers')
        .then(response=>{setFollowers(response.data)})
        .catch(err=>console.log(err));

    },[unfollowing])

    function handleOnChange(eve){
        setProfile(prev=>({
             ...prev,
            [eve.target.name]:eve.target.value

        })  
        );
    }

    const handleUpdate=async()=>{
        axios.put('http://localhost:3000/profile',profile)
        .then(console.log('updated'))
        .catch(err=>console.log(err))
    }

    const handleOnClickDelete=async(pid)=>{
        axios.delete(`http://localhost:3000/followers/${pid}`)
      .then(alert('follower removed'))
      .then(setUnfollowing(!unfollowing))
      .catch(err=>console.log(err))
    }

  return (
    <div>
        {profile?(
        <div className='ms-5'>
            <img className="profilePic rounded-circle mt-5 mb1" src={profile.profile_pic} alt="profile_pic" />
            <div className='h5'>{profile.username}</div>
            <input  onChange={handleOnChange} className='form-control my-2 w-50' type="text"
                    value={profile.username}
                    name='username'
                    /><br/>
            <input onChange={handleOnChange} className='form-control my-2 w-50' type="text"
                    value={profile.profile_pic}
                    name='profile_pic'/><br/>
            <button onClick={handleUpdate} className='btn btn-info'>Update</button>


        </div>):
        (<div>
            loading..
        </div>)}

        <div className='ms-5'>
            {followers?(
                <div>
                    <div className='h3 my-2'>following</div>
                    {followers.map((person)=>(
                        <div className='d-flex my-2' key={person.id}>
                            <img className='dp me-1 rounded-circle' src={person.profile_pic} alt="profile_pic" />
                            <div className='h6'>{person.username}</div>
                            <button className='btn btn-secondary ms-auto me-2' onClick={()=>handleOnClickDelete(person.id)}>Remove</button>
                        </div>
                    ))}

                </div>)
                :(<div>
                    Loading..
                </div>)}
        </div>


    </div>
  )
}

export default Profile