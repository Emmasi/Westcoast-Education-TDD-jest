import {useState } from 'react';


const PostInfo =({item})=>{
      return (
        <div className='infocontainer'>
            <p> Personummer:{item.security}</p>
            <p> Email: {item.email}</p>
            <p> mobile: {item.mobile}</p>
            <p> Övrigt: {item.description}</p>
        </div>
      )
}
export default PostInfo