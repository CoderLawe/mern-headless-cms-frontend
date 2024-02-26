import React from 'react';
import { FaEarlybirds, FaSearch } from "react-icons/fa";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { AiFillFolder } from "react-icons/ai";
import { GrDocument, GrFolder } from "react-icons/gr";
import { HiDocument } from "react-icons/hi"
import { BsChevronCompactRight } from "react-icons/bs"
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <nav className=" w-[200px]  block pb-[15px] relative">
            <div className="block fixed bg-[#2E1F5E] w-[200px] pt-[15px] h-[100%]">
                <div className="flex justify-center">

                    <FaEarlybirds className="h-[80px] w-[80px] text-[#2E1F5E] bg-purple-300 p-2 rounded-full " />

                    <TbLayoutSidebarLeftCollapse className="absolute right-[10px] text-purple-500 h-[20px] w-[20px]" />
                </div>

                <div className="flex ">
                    <div className="mt-[45.13px] block space-y-[20px] w-full">
                        <div className="flex justify-between py-[14px] cursor-pointer">
                            <div className="flex items-center space-x-[10px]  ml-[20px]">
                                <FaSearch className="text-purple-100 text-[20px]" />
                                <p className="text-[14px] text-purple-100">Search</p>
                            </div>
                        </div>



                        <div className="flex justify-between group items-center w-[100%] hover:bg-[#261A4E] transition-all duration-500 ease-out cursor-pointer py-[14px] ">
                            <div className="flex items-center space-x-[10px]  ml-[20px]">
                                <AiFillFolder className="text-purple-100 text-[20px]" />
                                <p className="text-[14px] text-purple-100">Pages</p>
                            </div>

                            <BsChevronCompactRight className="opacity-0 group-hover:opacity-100  justify-end text-[10px] text-purple-100 mr-[15.5px]" />
                        </div>

                        <div className="flex justify-between group items-center w-[100%] hover:bg-[#261A4E] transition-all duration-500 ease-out cursor-pointer py-[14px] ">
                            <div className="flex items-center space-x-[10px]  ml-[20px]">
                                <AiFillFolder className="text-purple-100 text-[20px]" />
                                <p className="text-[14px] text-purple-100">Sites(with functionality per user)</p>
                            </div>

                            <BsChevronCompactRight className="opacity-0 group-hover:opacity-100  justify-end text-[10px] text-purple-100 mr-[15.5px]" />
                        </div>


                        <Link className="flex justify-between group items-center w-[100%] hover:bg-[#261A4E] transition-all duration-500 ease-out cursor-pointer py-[14px] " to="/posts">
                            <div className="flex items-center space-x-[10px]  ml-[20px]">
                                <HiDocument className="text-purple-100 text-[20px]" />
                                <p className="text-[14px] text-purple-100">Posts</p>
                            </div>

                            <BsChevronCompactRight className="opacity-0 group-hover:opacity-100  justify-end text-[10px] text-purple-100 mr-[15.5px]" />
                        </Link>


                        <div className="flex justify-between group items-center w-[100%] hover:bg-[#261A4E] transition-all duration-500 ease-out cursor-pointer py-[14px] ">
                            <div className="flex items-center space-x-[10px]  ml-[20px]">
                                <HiDocument className="text-purple-100 text-[20px]" />
                                <p className="text-[14px] text-purple-100">Messages</p>
                            </div>

                            <BsChevronCompactRight className="opacity-0 group-hover:opacity-100  justify-end text-[10px] text-purple-100 mr-[15.5px]" />
                        </div>

                        <div className="flex justify-between group items-center w-[100%] hover:bg-[#261A4E] transition-all duration-500 ease-out cursor-pointer py-[14px] ">
                            <div className="flex items-center space-x-[10px]  ml-[20px]">
                                <SiSimpleanalytics className="text-purple-100 text-[20px]" />
                                <p className="text-[14px] text-purple-100">Analytics</p>
                            </div>

                            <BsChevronCompactRight className="opacity-0 group-hover:opacity-100  justify-end text-[10px] text-purple-100 mr-[15.5px]" />
                        </div>



                    </div>
                </div>
            </div>


        </nav>
    )
}

export default Sidebar