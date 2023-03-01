import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { FaFeatherAlt } from "react-icons/fa";
import Post from "../components/Post";
import { AiOutlinePlus } from "react-icons/ai";
import { PostsContext } from "../context/PostContext";

function Posts() {
  const [posts, setPosts] = useContext(PostsContext);


  return (
    <div className="flex ">
      {/* Left */}
      <Sidebar />

      {/* Right */}
      <div className="flex justify-between border-r">

        <div className="lg:w-[60vw] ">
          {/* Left side */}
          <div className="block">
            <div className="flex justify-center">
              <div className="flex space-x-[12px] items-center">
                <h1 className="mt-[30px] text-[30px] font-serif text-gray-500">All posts</h1>
                <FaFeatherAlt className="text-[40px] text-purple-800 mt-[12px]" />
              </div>

            </div>


            {/* Posts */}
            <div className="ml-[40px] mt-[50px] block space-y-[100px]">

              {posts.map((post) => (

                <Post onClick={() => setSelected(post)} key={post._id} postsId={post._id} title={post.title} author={post.author} description={post.description} />
              ))}




            </div>
          </div>
        </div>

        <div className="block">
          {/* Right side */}
          <div className="flex justify-center">
            <AiOutlinePlus className="text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts;
