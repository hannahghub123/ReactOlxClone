import React, { useContext, useEffect, useState } from 'react';
import 'firebase/compat/firestore';
import './View.css';
import { PostContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/Context';

function View() {
  
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    const {userId} = postDetails 
    firebase.firestore().collection('users').where('id','==',userId).get().then((response)=>{
      response.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  },[firebase, postDetails])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="img"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
      {userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
