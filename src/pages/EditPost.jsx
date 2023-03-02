import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { PostsContext, SelectedContext } from '../context/PostContext'
import { useNavigate, useParams } from "react-router-dom"
import { FcNext } from "react-icons/fc";
import { MdOutlineTitle } from "react-icons/md"
import { BsCalendar2Check } from "react-icons/bs"
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function EditPost() {

    const [posts, setPosts] = useContext(PostsContext)
    const [selected, setSelected] = useContext(SelectedContext)
    const navigate = useNavigate();

    const { id } = useParams()

    const thisPost = posts.find(post => post._id === id)


    const [newPost, setNewPost] = useState({
        title: "",
        author: "",
        description: ""
    })
    const [updatedTitle, setUpdatedTitle] = useState(selected.title)
    const [updatedAuthor, setUpdatedAuthor] = useState(selected.author)
    const [updatedDescription, setUpdatedDescription] = useState(selected.description)
    const [updatedCoverImage, setUpdatedCoverImage] = useState(selected.coverImage)

    const updatePost = () => {

        axios.put(`https://mern-cms-backend.adaptable.app/api/posts/${id}`, {
            title: updatedTitle,
            author: updatedAuthor,
            description: updatedDescription,
            cover_image:updatedCoverImage

        }).then((res) => {
            console.log("Post succesfully added", res)
            // Push to /, 
            navigate('/');
        }).catch((err) => console.log("Failed because of the following error", err))
    }



    // useEffect(() => {
    //     console.log('selected', selected)
    // }, [id])
    return (
        <div className="flex">
            {/* Left side */}
            <Sidebar />

            {/* Right side */}
            <form className="block">
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
                        <input value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} className="w-[700px] h-[49px] border border-gray-300 mt-[20px] px-[10px]" placeholder="Enter a title here" />
                    </div>
                </div>



                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Author</p>
                    </div>

                    <div className="">
                        {/* Input field */}
                        <input value={updatedAuthor} onChange={(e) => setUpdatedAuthor(e.target.value)} className="w-[700px] h-[49px] border border-gray-300 mt-[20px] px-[10px]" placeholder="Enter an author here" />
                    </div>
                </div>

                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Cover Image URL (temporary maybe use firebase to generate link)</p>
                    </div>

                    <div className="">
                        {/* Input field */}
                        <input value={updatedCoverImage} onChange={(e) => setUpdatedCoverImage(e.target.value)} className="w-[700px] h-[49px] border border-gray-300 mt-[20px] px-[10px]" placeholder="Enter a link here" />
                    </div>
                </div>



                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Description</p>
                    </div>

                    <div className="">
                        {/* Input field */}
                        <input value={updatedDescription && updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} className="w-[700px] h-[49px] border border-gray-300 mt-[20px] px-[10px]" placeholder="Enter a Description here" />
                    </div>
                </div>

                <div className="mt-[50px] ml-[45px] block">
                    <div className="flex space-x-[15px] items-center">
                        <MdOutlineTitle className="h-[20px] text-[#2E1F5E] " />
                        <p className="text-[#2E1F5E] text-[18px] font-[300]">Marked up description</p>
                    </div>


                    <CKEditor
                        editor={ClassicEditor}
                        data={updatedDescription}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setUpdatedDescription(data)
                            console.log({ event, editor, data });
                        }}
                    />



                </div>

                <button type="submit" onClick={() => updatePost()} className="flex space-x-[10px] items-center w-[199px] bg-[#007D7E] mt-[70px] ml-[45px] py-[16px] px-[12px] cursor-pointer rounded-[8px]">
                    <BsCalendar2Check className="text-[20px] text-white" />
                    <p className="text-white ">Publish</p>
                </button>

            </form>
        </div>
    )
}

export default EditPost