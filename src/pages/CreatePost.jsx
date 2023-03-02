import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { PostsContext, SelectedContext } from '../context/PostContext'
import { useParams } from "react-router-dom"
import { FcNext } from "react-icons/fc";
import { MdOutlineTitle } from "react-icons/md"
import { BsCalendar2Check } from "react-icons/bs"
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function CreatePost() {

    // const [posts, setPosts] = useContext(PostsContext)
    // const { id } = useParams()
    // const thisPost = posts.find(post => post._id === id)

    // console.log("this post", thisPost)




    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const published_date = Date.now()
    const coverImage = "https://cdn.discordapp.com/attachments/839784544798638090/1075882560753766540/bd430195-f82a-4ada-a35a-85cc4b2a6659.png"

    // const [post, setPost] = useState({
    //     title,
    //     author,
    //     description,
    //     publishedDate: Date.now()
    // })

    // console.log("post staged", post)
    // const handlePhoto = (e) => {
    //     setImage(e.target.files[0])
    //     console.log("image", image)
    // }

    const addPost = async (e) => {
        e.preventDefault()
        axios.post('https://mern-cms-backend.adaptable.app/api/posts/', {
            title: title,
            author: author,
            user: author,
            description: description,
            cover_image:image,
            published_date: Date.now(),

        })
            .then((res) => {
                console.log("response", res)
            })
            .catch((err) => {
                console.log('Error in CreateBook!', err);
            });
    }

    console.log(title)

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });

    }

    
    return (
        <div className="flex">
            {/* Left side */}
            <Sidebar />

            {/* Right side */}
            <form onSubmit={addPost} className="block">
                {/* <div className="h-[50px]  bg-[#E0E0E0] flex justify-between w-screen">
                    <FcNext className="text-[20px]" />
                </div> */}

                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Introduction</p>
                    </div>

                    <div className="">
                        {/* Input field */}
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-[700px] h-[49px] border border-gray-300 mt-[20px] px-[10px]" placeholder="Enter a title here" />
                    </div>
                </div>

                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Cover Image Link(temporary)</p>
                    </div>

                    <div className="">
                        {/* Input field */}
                        <input value={image} onChange={(e) => setImage(e.target.value)} className="w-[700px] h-[49px] border border-gray-300 mt-[20px] px-[10px]" placeholder="Enter a title here" />
                    </div>
                </div>

                {/* Cover photo */}

                {/* Uncomment below section later */}
                {/* <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Upload a cover image</p>
                    </div>

                    <div className="">
                        <input onChange={handlePhoto}type="file" accept='.png, .jpg, .jpeg' className="w-[700px] h-[49px] border border-gray-300 mt-[20px] p-[10px]" placeholder="Enter an author here" />
                    </div>
                </div> 
                 */}


                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Author</p>
                    </div>

                    <div className="">
                        {/* Input field */}
                        <input value={author} onChange={(e) => setAuthor(e.target.value)} className="w-[700px] h-[49px] border border-gray-300 mt-[20px] px-[10px]" placeholder="Enter an author here" />
                    </div>
                </div>


                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Description</p>
                    </div>

                    <div className="">
                        {/* Input field */}
                        <input value={description} onChange={(e) => setDescription(e.target.value)} className="w-[700px] h-[49px] border border-gray-300 mt-[20px] px-[10px]" placeholder="Enter a Description here" />
                    </div>
                </div>


                {/* Rich text editor */}
                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Marked up description</p>
                    </div>


                    <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setDescription(data)
                            console.log({ event, editor, data });
                        }}
                    />



                </div>

                <button className="flex space-x-[10px] items-center w-[199px] bg-[#007D7E] mt-[70px] ml-[45px] py-[16px] px-[12px] cursor-pointer rounded-[8px]">
                    <BsCalendar2Check className="text-[20px] text-white" />
                    <p className="text-white ">Publish</p>
                </button>

            </form>
        </div>
    )
}

export default CreatePost