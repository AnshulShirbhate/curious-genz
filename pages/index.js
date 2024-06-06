import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { getServerSideProps } from "./blogposts/[slug]";


export default function Home(props) {
  const [blogs, setBlogs] = useState(props.parsedResult);

  // useEffect(()=>{
  //   fetch("http://localhost:3000/api/blogs").then((data)=>{
  //     return data.json();
  //   }).then((parsedData)=>{
  //     setBlogs(parsedData);
  //   })
  // }, [])
  return (
    <div >
      <main className="flex flex-col items-center justify-between p-10">
        <h1 className="lg:text-4xl text-2xl italic font-bold font-serif mb-4">{`<The Curious GenZ/>`}</h1>
        <Image src="/homeimg.jpg" alt="Home Image" width={400} height={250} className="my-5 rounded-xl h-48 w-60"/>
        <p className="mt-3 font-semibold">A blog for all your curiosity</p>

        <div className="blogsSection mt-10 lg:text-center lg:w-2/4 w-11/12">
          <h2 className="text-2xl font-bold mb-5 text-center">Latest Blogs</h2>
          <ul>
            {
                blogs.slice(0, 4).map((blogItem, index)=>{
                  return(
                    <li key={index} className="my-6 space-y-2">
                      <h3 className="text-start text-lg font-semibold ">{blogItem.title}</h3>
                      <p className="text-justify">{blogItem.content.slice(0, 150)}...<Link className="text-blue-300" href={`/blogposts/${blogItem.slug}`}>Read More</Link></p>
                    </li>
                  )
                })
              
            }
            
          </ul>
        </div>
      </main>
    </div>
  );

}

export async function getServerSideProps(context){
    const result = await fetch(`http://localhost:3000/api/blogs`);
    let parsedResult = await result.json();
    parsedResult = parsedResult.sort((a, b)=> (a.no > b.no ? 1 : -1))
    parsedResult = parsedResult.reverse()
    return {props: {parsedResult}};
}