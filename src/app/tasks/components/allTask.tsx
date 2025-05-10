// components/TaskCreator.js


'use client'; // If you're using the App Router
import Image from "next/image";
import React, { useState } from 'react';
import Calendar from 'react-calendar';





const TaskCreator = () => {
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState('');
  const [value, setValue] = useState(new Date());
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => setShowDiv(prev => !prev);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Task Created:', task);
    setTask('');
    setShowForm(false);
  };
  

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
                        <div className="">
                        <div className="p-4 ">
                      <div className='flex justify-end mr-10'>
                      <button
                        onClick={handleButtonClick}
                        className="bg-[#2383e2] text-[#ffffffcf] text-sm font-medium rounded-tl-md rounded-bl-md px-4 flex items-center border-r-[0.1px] border-white justify-center py-2  hover:bg-[#1562ad] transition"
                      >
                        New
                      </button>
                
                      <button
                        onClick={handleButtonClick}
                        className="bg-[#2383e2] text-[#ffffffcf] text-sm font-medium rounded-tr-md rounded-br-md px-1.5 flex items-center justify-center  hover:bg-[#1562ad] transition"
                      >
                        <Image 
                        src="/create-task/angle-down-solid.svg"
                        alt=""
                        height={16}
                        width={16}/>
                      </button>
                      </div>
                
                      {showForm && (
                        <div className="relative">
                        <div className="flex items-center z-[9999] absolute right-96  justify-center w-[1500px] mt-4 p-4 border border-gray-300 rounded shadow-lg  bg-white max-w-md">
                                    <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="bg-white text-[#ffffffcf] px-4 py-2 rounded transition absolute left-0 top-0"
                                     >
                                    <Image 
                                        src="/create-task/xmark-solid.svg"
                                        alt=""
                                        height={16}
                                        width={16} />
                                    </button>
                          <form onSubmit={handleSubmit}>
                                  <div>
                                  <label className="block mb-2 font-medium text-gray-700">
                                  Task:
                                  <input
                                    type="text"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                    required
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </label>
                                <div className="mt-4 flex space-x-2">
                                  <button
                                    type="submit"
                                    className="bg-green-600 text-[#ffffffcf] px-4 py-2 rounded hover:bg-green-700 transition"
                                  >
                                    Save Task
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="bg-gray-400 text-[#ffffffcf] px-4 py-2 rounded hover:bg-gray-500 transition"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                          </form>
                        </div>
                        </div>
                      )}
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="px-24  relative">
                <div>
                    <table className="w-full flex-nowrap overflow-scroll">
                        <thead className="overflow-scroll flex-nowrap">
                            <tr>
                                <th className=" border-t-[0.05px] border-r-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse text-[#ffffff71] text-left py-1.5 px-2  w-[21%] ">Aa Task Name</th>
                                <th className=" border-[0.05px] border-[#ffffff33] border-collapse text-left py-1.5 px-2 w-[9%] ">
                                    <div className="flex text-sm text-[#ffffff71]">
                                        <div className="grid justify-center items-center  mr-1.5">
                                        <Image 
                                        src="/create-task/sun-solid.svg"
                                        alt="sun"
                                        height={16}
                                        width={16} />
                                        </div>
                                        <div className="overflow-hidden whitespace-nowrap">Status</div>
                                    </div>
                                </th>
                                <th className=" border-[0.05px] border-[#ffffff33] border-collapse text-left py-1.5 px-2 w-[10%]">
                                <div className="flex text-sm text-[#ffffff71]">
                                        <div className="grid justify-center items-center  mr-1.5">
                                        <Image 
                                        src="/create-task/user-group-solid.svg"
                                        alt="user-group"
                                        height={16}
                                        width={16} />
                                        </div>
                                        <div className="overflow-hidden whitespace-nowrap mr-1.5">Assignee</div>
                                        <div className="inline-flex items-center">
                                        <Image 
                                        src="/create-task/circle-info-solid.svg"
                                        alt="circle-info"
                                        height={16}
                                        width={16} />
                                        </div>
                                    </div>
                                </th>
                                <th className=" border-[0.05px] border-[#ffffff33] border-collapse text-left py-1.5 px-2  w-[8%] ">
                                <div className="flex text-sm text-[#ffffff71]">
                                        <div className="grid justify-center items-center  mr-1.5">
                                        <Image 
                                        src="/create-task/calendar-days-solid.svg"
                                        alt="calendar"
                                        height={16}
                                        width={16} />
                                        </div>
                                        <div className="overflow-hidden whitespace-nowrap">Due date</div>
                                    </div>
                                </th>
                                <th className="border-[0.05px] border-[#ffffff33] border-collapse text-left py-1.5 px-2 w-[6%] ">
                                <div className="flex text-sm text-[#ffffff71]">
                                        <div className="grid justify-center items-center  mr-1.5">
                                        <Image 
                                        src="/create-task/circle-play-regula.png"
                                        alt="circle-play"
                                        height={16}
                                        width={16} />
                                        </div>
                                        <div className="overflow-hidden whitespace-nowrap">Priority</div>
                                    </div>
                                </th>
                                <th className="border-[0.05px] border-[#ffffff33] border-collapse text-left py-1.5 px-2  w-[12%] ">
                                <div className="flex text-sm text-[#ffffff71]">
                                        <div className="grid justify-center items-center  mr-1.5">
                                        <Image 
                                        src="/create-task/shapes-solid.svg"
                                        alt="shapes"
                                        height={16}
                                        width={16} />
                                        </div>
                                        <div className="overflow-hidden whitespace-nowrap">Task type</div>
                                    </div>
                                </th>
                                <th className=" border-[0.05px] border-[#ffffff33] border-collapse text-left py-1.5 px-2 w-[16%] ">
                                <div className="flex text-sm text-[#ffffff71]">
                                        <div className="grid justify-center items-center  mr-1.5">
                                        <Image 
                                        src="/create-task/four-line.png"
                                        alt="shapes"
                                        height={16}
                                        width={16} />
                                        </div>
                                        <div className="overflow-hidden whitespace-nowrap">Description</div>
                                    </div>
                                </th>
                                <th className=" border-[0.05px] border-[#ffffff33] border-collapse text-left py-1.5 px-2 w-[12%] ">
                                <div className="flex text-sm text-[#ffffff71]">
                                        <div className="grid justify-center items-center  mr-1.5">
                                        <Image 
                                        src="/create-task/hourglass-start-solid.svg"
                                        alt="hourglass-start"
                                        height={16}
                                        width={16} />
                                        </div>
                                        <div className="overflow-hidden whitespace-nowrap mr-1.5">Effort level</div>
                                        <div className="inline-flex items-center">
                                        <Image 
                                        src="/create-task/circle-info-solid.svg"
                                        alt="circle-info"
                                        height={16}
                                        width={16} />
                                        </div>
                                    </div>
                                </th>
                                <th className="  border-t-[0.05px] border-l-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse text-[#ffffff71] w-[6%]">
                                <div className="flex text-sm text-[#ffffff71]">
                                        <div className="grid justify-center items-center p-2 ">
                                        <Image 
                                        src="/create-task/plus-solid.svg"
                                        alt="plus"
                                        height={16}
                                        width={16} />
                                        </div>
                                        <div className="grid justify-center items-center p-2 ">
                                        <Image 
                                        src="/create-task/ellipsis-solid.svg"
                                        alt="plus"
                                        height={16}
                                        width={16} /></div>                                                                                                
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="overflow-scroll">
                            <tr>
                                <td className=" border-t-[0.05px] border-r-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[21%]  py-1.5 px-2">Improve website copy</td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[9%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[10%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[8%] py-1.5 px-2">
                                    <div className="relative">
                                        <button onClick={toggleDiv} className="text-sm">
                                        {value.toDateString()}
                                        </button>
                                        {showDiv && (
                                        <div className=" absolute">
                                        <div className="p-4 bg-[#191919] rounded shadow max-w-sm mx-auto">
                                              <Calendar
                                                //  
                                                value={value}
                                                className="REACT-CALENDAR h-96 w-60 text-[#ffffff71]"
                                              />
                                              <p className="mt-4 text-center text-[#ffffff71]">
                                                Selected date: {value.toDateString()}
                                              </p>
                                            </div>
                                        </div>
                                         )}
                                    </div>
                                </td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[6%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[12%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[16%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[12%] py-1.5 px-2"></td>
                                <td className=" border-t-[0.05px] border-l-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[6%]  py-1.5 px-2"></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className=" border-t-[0.05px] border-r-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[21%]  py-1.5 px-2">Update help center & FAQ</td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[9%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[10%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[8%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[6%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[12%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[16%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[12%] py-1.5 px-2"></td>
                                <td className=" border-t-[0.05px] border-l-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[6%]  py-1.5 px-2"></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className=" border-t-[0.05px] border-r-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[21%]  py-1.5 px-2">Publish release notes</td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[9%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[10%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[8%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[6%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[12%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[16%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[12%] py-1.5 px-2"></td>
                                <td className=" border-t-[0.05px] border-l-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[6%]  py-1.5 px-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

  );
};

export default TaskCreator;
