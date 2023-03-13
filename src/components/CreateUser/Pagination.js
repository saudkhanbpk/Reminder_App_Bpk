import React from 'react'
import "./GetUser.css"
export default function Pagination(props) {
let {totalPost,postsPerPage,setCurrentPage,currentPage} = props

  let pages =[];

  for (let i = 1; i <= Math.ceil(totalPost/postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className='Pagination'>
      {
        pages.map((page,index)=>{
          return <button className={page == currentPage ? 'active' : ''} key={index} onClick={()=>{setCurrentPage(page)}}>{page}</button>;
        })
      }
    </div>
  )
}

