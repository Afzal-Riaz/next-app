// components/TaskCreator.js


'use client'; // If you're using the App Router
import Image from "next/image";
import React, { useState } from 'react';
import Table from "./table";
import TaskCreator from "./create";





const AllTask = () => {
  

  return (
    <div>
        <div className="pr-24 mb-2">
            <div className='pl-24'>
                <div className="flex">
                    <div className="mt-1 mr-2 ml-1">
                    <Image
                        src="https://www.notion.so/icons/checkmark_green.svg?mode=dark"
                        alt="1"
                        width={36}
                        height={36}
                    />
                    </div>
                    <div>
                        <div>
                            <div className="font-bold text-[32px] text-[#ffffffcf]">
                                <h1>
                                    Tasks Tracker
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="text-sm pl-1.5 pb-1 pt-1 text-[#ffffffcf]">
                            Stay organized with tasks, your way.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="min-h-10 px-24 z-[86]">
            <div className="flex items-center justify-between h-10">
                <div>
                    <div className="flex items-center overflow-hidden">
                        <div className="inline-flex ">
                            <div className="flex  flex-row">
                                <div className="flex items-center text-[#ffffff71] hover:text-[#ffffffcf] h-8 px-2 rounded-b-sm text-sm leading-[1.2] font-medium max-w-3xs">
                                    <div className=" h-4 w-4 mr-1.5" >
                                        <Image 
                                        src="/create-task/star-solid.svg"
                                        alt=""
                                        height={16}
                                        width={16}/>
                                    </div>
                                    <span className="mt-0.5 ">All Task</span>
                                </div>
                            </div>
                            <div className="flex  flex-row">
                                <div className="flex items-center">
                                    <div className="flex items-center px-2 text-sm rounded-sm leading-[1.2] text-[#ffffff71] hover:text-[#ffffffcf] font-normal h-8 ">
                                        <div className="h-4 w-4 mr-1.5">
                                        <Image 
                                        src="/create-task/circle-right-regular.svg"
                                        alt=""
                                        height={16}
                                        width={16}/>
                                        </div>
                                        <span className="overflow-hidden mt-0.5">By Status</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div>
                                    <div className="flex items-center  h-8 px-2 text-sm rounded-sm leading-[1.2] text-[#ffffff71] hover:text-[#ffffffcf] font-medium">
                                        <div className="h-4 w-4 mr-1.5">
                                        <Image 
                                        src="/create-task/user-solid.svg"
                                        alt=""
                                        height={16}
                                        width={16}/>
                                        </div>
                                        <span className="overflow-hidden mt-0.5">My Tasks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex opacity-10">
                            <div>
                                <div className="inline-flex items-center justify-center rounded-sm w-6 h-6 ">
                                    <div className="w-4 h-4 block text-lg ">
                                    <Image 
                                        src="/create-task/plus-solid.svg"
                                        alt=""
                                        height={16}
                                        width={16}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <div className="mt-5">
                            <div className="relative">
                                <div className="flex items-center justify-center rounded-sm h-7 w-7 p-1.5 text-sm font-normal">
                                    <button className="">
                                    <Image 
                                        src="/create-task/arrow-down-wide-short-solid.svg"
                                        alt=""
                                        height={14}
                                        width={14}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                        <div className="relative">
                                <div className="flex items-center justify-center rounded-sm h-7 w-7 p-1.5 text-sm font-normal">
                                    <button className="">
                                    <Image 
                                        src="/create-task/arrow-down-up-across-line-solid.svg"
                                        alt=""
                                        height={14}
                                        width={14}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                        <div className="relative">
                                <div className="flex items-center justify-center rounded-sm h-7 w-7 p-1.5 text-sm font-normal">
                                    <button className="">
                                    <Image 
                                        src="/create-task/bolt-solid.svg"
                                        alt=""
                                        height={14}
                                        width={14}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                        <div className="relative">
                                <div className="flex items-center justify-center rounded-sm h-7 w-7 p-1.5 text-sm font-normal">
                                    <button className="">
                                    <Image 
                                        src="/create-task/magnifying-glass-solid.svg"
                                        alt=""
                                        height={14}
                                        width={14}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div  className="mt-5">
                        <div className="relative">
                                <div className="flex items-center justify-center rounded-sm h-7 w-7 p-1.5 text-sm font-normal">
                                    <button className="">
                                    <Image 
                                        src="/create-task/ellipsis-solid.svg"
                                        alt=""
                                        height={14}
                                        width={14}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                        <TaskCreator />
                    </div>
                </div>
            </div>
        </div>
        <Table />
    </div>

  );
};

export default AllTask;
