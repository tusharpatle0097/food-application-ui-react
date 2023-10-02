import React, { useEffect, useState } from 'react';
import like from "../assets/like.svg"
import comments from "../assets/comments.svg"
import rating from "../assets/Star.png"
import axios from 'axios';

const Card = () => {

  //hello
  //hello2
  //hello3
  //helle4

  const [fetchdata,setfetchdata] = useState([])

    const mylike = like;
    const mycomments = comments;
    const star = rating

useEffect(()=>{
  getCardData();
})

const getCardData=()=>{
  axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
  .then(res=>{
    console.log(res.data.photos)
    setfetchdata(res.data.photos)
  })
  .catch(err=>{
    console.log(err)
  })
}

  return (
    <>
    {
      fetchdata.map((items)=>{
        return(
          <>
           <div class="card" style={{ width: "18rem" }}>
                    <img src={items.url} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="card_minititle">
                            <span>Dairy Free</span>
                        </div>
                        <div class="d-flex">
                            <div className="card-title">
                            {items.title}
                            </div>
                            <div className="card_Rating d-flex gap-2">
                           <span className='star_rating'><img src={star} alt="" /></span>
                           <span className='rating_number'><p>4.5</p></span>
                            </div>
                          </div>

                       <div className="title_likes d-flex">
                        <div className="Order_min">
                           {items.user} min
                        </div>
                        <div className="like_chat d-flex gap-2">
                            <div className="likess"><img src={mylike} alt="" /></div>
                            <div className="chat"><img src={mycomments} alt="" /></div>
                        </div>
                       </div>
                    </div>
                </div>
          </>
        )
      })
    }
    
    </>
  )
}

export default Card