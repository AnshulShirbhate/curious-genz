import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as fs from "fs"
import InfiniteScroll from 'react-infinite-scroll-component';

const Posts = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(5);
  // useEffect(()=>{
  //   fetch("http://localhost:3000/api/blogs").then((a)=>{
  //     return a.json();})
  //     .then((parsed)=>{
  //       setBlogs(parsed); 
  //     })
  // }, [])

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  }

  return (
    <>
      <div className="blogsSection mt-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">Blogs</h2>
        <ul className='flex items-center flex-col mb-5 lg:w-2/4 w-3/4'>
          <InfiniteScroll
            dataLength={blogs.length} //This is important field to render the next data
            next={fetchData}
            hasMore={props.allCount !== blogs.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            {blogs.map((blogItem, index) => {
              return (
                <li key={index} className='blogItem my-6'>
                  <Link href={`/blogposts/${blogItem.slug}`}><h3 className="font-bold">{blogItem.title}</h3></Link>
                  <p className='text-justify'>{blogItem.content.slice(0, 200)}...<Link className="text-blue-300" href={`/blogposts/${blogItem.slug}`}>Read More</Link></p>
                </li>
              )
            })}
          </InfiniteScroll>



        </ul>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await fs.promises.readdir("blogdata");
  let length;
  if(data.length>5){
    length = 5
  } else {
    length = data.length;
  }
  let allCount = data.length;
  let myFile;
  let allBlogs = [];

  for (let index = 0; index < length; index++) {
      const item = data[index];
      myFile = await fs.promises.readFile(("blogdata/"+item), "utf-8");
      allBlogs.push(JSON.parse(myFile));
  }



  return { props: { allBlogs, allCount } }
}

export default Posts