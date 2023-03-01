import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { PostContext, SelectedContext } from '../context/PostContext';
import parse from 'html-react-parser';

function Post({ title, author, description, postsId }) {


    const [id, setId] = useContext(PostContext);
    const [selected, setSelected] = useContext(SelectedContext)

    const stringedDescription = description.toString()
    // const postClicked = () => {
    //     setPost(selected)
    //     console.log("post clicked", selected)
    // }
    // How to display styled data from ckeditor in react ?
    useEffect(() => {
        setId(postsId)
        console.log(id)
        console.log(typeof(description))
    }, [])


    useEffect(() => {
        console.log("selected", selected)
        
    }, [selected])

    return (
        <div className="rounded-[8px]  h-[200px] group cursor-pointer relative z-10 w-[600px] block ">
            <div className="flex h-full mt-[50px]">
                {/* Left side */}

                <img onClick={() => setSelected({ title, author, description, postsId })} className="w-[280px] h-full object-cover rounded-[8px]" src="https://cdn.discordapp.com/attachments/817048198022430761/1056661734913474640/Screen_Shot_2022-12-24_at_7.22.38_PM.png" />

                {/* Right side */}
                <div className="block space-y-[10px]  ml-[30px]  ">
                    <h2 className="text-[20px] text-gray-800 font-serif whitespace-nowrap">{title}</h2>
                    <p className="text-gray-700">By {author}</p>
                    <p className="text-gray-500 font-serif leading-[30px] text-ellipsis overflow-hidden ... max-h-[90px]">
                        {
                            parse(
                                description
                            )
                        } 
                       ...
                        </p>

                    <div className="flex space-x-[10px]">
                        <Link to={`/posts/${postsId}`}>
                            <button onClick={() => setSelected({ title, author, description, postsId })} className="font-serif bg-green-600 text-gray-700 px-[8px] py-[6px]">Edit</button>

                        </Link>
                        <button className="font-serif bg-red-400 text-gray-900 px-[8px] py-[6px]">Delete</button>

                    </div>
                </div>
            </div>

            <div className="bg-gray-400 h-[0.02em] w-full mt-[60px] " />


        </div >
    )
}

export default Post

// How to make a detail page for a blog post in React that pulls in data from an API ?