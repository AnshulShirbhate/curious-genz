// import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

const Slug = (props) => {
    // const router = useRouter();
    // const {slug} = router.query;
    const [post, setPost] = useState(props.blog);
    


  return (
    <div className='container flex flex-col items-center py-5'>
      <style jsx>{`
          hr{
            border: 0;
            clear:both;
            display:block;
            width: 50%;               
            background-color:black;
            height: 1px;
          }
          `}
      </style>
      
      <h1 className='text-3xl my-5 font-bold'>{post && post.title}</h1>
      <hr/>
      <div className='my-5 w-3/4 text-justify lg:text-center'>{post &&post.content}</div>

    </div>
  )
}

export async function getServerSideProps(context){
  const {slug} = context.query;
  const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const blog = await data.json();
  return {props: {blog}}
}

export default Slug