import React, { useEffect, useState } from 'react'

function Posts() {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/posts').
        then(response=>response.json())
        .then(response=>setPosts(response))
        .catch(err=>console.log(err.message))
    },[])
  return (
    <div className='d-flex justify-content-center'>
        {posts.length>0?(
        <div>
            {posts.map((post)=>(
                <div key={post.id} className='my-3'>
                    <div className='d-flex gap-2'>
                        <img className='dp rounded-circle' src={post.user.profile_pic} alt="profile_pic" />
                        <div className='h6'>{post.user.username}</div>
                    </div>
                    <img className="image" src={post.image} alt="posted_image" />
                    <div className='d-flex mt-2'>
                        <i className="fa-regular fa-heart fs-5 me-0"></i>
                        <div className='h6 me-2'>{post.likes}</div>
                        <i className="fa-regular fa-comment me-0 fs-5"></i>
                        <div className='h6 me-2'>{post.comments.length}</div>
                        <i className="fa-regular fa-paper-plane fs-5"></i>
                    </div>
                    <div>{post.caption}</div>
                    
                    
                </div>
            ))}
        </div>)
        :(<div>
           Loading..
        </div>)

        }
    </div>
  )
}

export default Posts