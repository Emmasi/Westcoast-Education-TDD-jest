import {useState } from 'react';


const PostInfo =({item})=>{

      return (
        <div className='infocontainer'>
          <p> längd:{item.coursetime}</p>
          <p>Startar:{item.date}
          </p> 
          <p>Övrigt:{item.description}</p>
        </div>
      )

}
export default PostInfo