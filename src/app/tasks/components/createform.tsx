import React, { useState } from "react";
import Image from "next/image";
import Calendar from 'react-calendar';

export default function TaskPage2() {

  // const [showForm, setShowForm] = useState(false);
  //     const [task, setTask] = useState('');
  //     const [value, setValue] = useState(new Date());
  //     const [showDiv, setShowDiv] = useState(false);
    
  //     const toggleDivNew = () => setShowDiv(prev => !prev);
    
  //     const handleButtonClick = () => {
  //       setShowForm(true);
  //     };
    
  //     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //       e.preventDefault();
  //       console.log('Task Created:', task);
  //       setTask('');
  //       setShowForm(false);
  //     };






  return (
    <main className="bg-[#191919] text-[#ffffffcf]  p-6 w-full">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <div className="mt-5">
              <div className="pb-3 mb-3 ">
                  <div>
                      <div>
                          <div className="flex justify-center items-center relative z-[1] mt-1 mr-2 ml-1 h-9 w-9 ">
                              <div className="w-full h-full ">
                                  <Image
                                      src="https://www.notion.so/icons/checkmark_green.svg?mode=dark"
                                      alt="1"
                                      width={36}
                                      height={36}
                                  />
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className=" font-bold text-[32px] flex items-center">
                              <h1 className="pt-1 px-0.5 text-[1em] w-full" >
                                  <input type="text" placeholder="New Task" className="text-[#ffffffcf] w-[900px] border-none " style={{ WebkitTextFillColor: '#373737' }} />
                              </h1>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full text-sm">
              <div className="flex flex-row gap-8">
                <div className="mt-2.5 flex gap-y-2 gap-x-1 max-w-full  ">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div>
                      <div className="flex items-center h-6 max-w-full min-w-0">
                        <div>
                          <div className="cursor-pointer flex items-center w-full h-full rounded-sm px-1.5 max-w-full">
                            <div className="flex items-center leading-[18px] text-[13px] font-medium">
                              <div className="grid justify-center items-center  mr-1 ">
                                <Image 
                                src="/create-task/user-group-solid.svg"
                                alt="user-group"
                                height={14}
                                width={14} />
                                </div>
                                <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">Assignee</div>
                                <div className="inline-flex items-center">
                                <Image 
                                src="/create-task/circle-info-solid.svg"
                                alt="circle-info"
                                height={14}
                                width={14} 
                                className="w-3.5 h-full block ml-1 mt-[1px] shrink-0"/>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="cursor-pointer relative text-sm flex items-center rounded-sm min-h-8 py-[5px] px-1.5">
                        <div className="leading-5 break-words overflow-hidden text-[#ffffff48]">
                          Empty
                        </div>                                  
                      </div> 
                    </div>
                  </div>                               
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row ">
                    <div>
                      <div className="flex items-center text-[#ffffff71] h-6 ">
                        <div>
                          <div className="flex items-center h-full w-full rounded-sm px-2.5 max-w-full ">
                            <div className="flex items-center leading-[18px] text-[13px] font-medium ">
                              <div className="grid justify-center mr-0.5">
                                <div>
                                <Image 
                                src="/create-task/sun-solid.svg"
                                alt="circle-info"
                                height={14}
                                width={14} 
                                className="w-3.5 h-full block mr-1 shrink-0"/>
                                </div>
                              </div>
                              <div className="whitespace-nowrap overflow-hidden ">status</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="relative text-sm flex items-center rounded-sm w-full min-h-[30px] py-1 px-1.5 user-">
                      <div className="flex flex-nowrap overflow-hidden items-center gap-x-1 gap-1.5 max-w-[fit-content] ">
                        <div className="contents ">
                          <div className="flex items-center shrink-0 min-w-0 max-w-full h-5 rounded-[10px] pl-2 pr-2.5 leading-[120%]  text-sm bg-[#2d996480] text-[#ffffffde] whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <div className="whitespace-nowrap overflow-hidden overflow-ellipsis inline-flex  items-center h-5 leading-5">
                              <div className="flex items-center ">
                                <div className="mr-[5px] rounded-full h-2 w-2 bg-[#2ca76ae8]"></div>
                              </div>
                              <span className="whitespace-nowrap  overflow-hidden overflow-ellipsis">Done</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col relative ">
                  <div>
                    <div className="flex flex-row ">
                      <div>
                        <div className="flex items-center text-[#ffffff71] h-6 w-[min-content] w-max-full min-w-0">
                          <div>
                            <div className="flex items-center w-full h-full  rounded-sm px-1.5 max-w-full ">
                              <div className="flex items-center leading-[18px] min-w-0 font-medium text-[13px] ">
                                <div className="flex items-center justify-center w-[18px] h-6  ">
                                <Image 
                                src="/create-task/calendar-days-solid.svg"
                                alt="circle-info"
                                height={14}
                                width={14} 
                                className="w-3.5 h-3.5 block mr-0.5 shrink-0 "/>
                                </div>
                                <div className="whitespace-nowrap  overflow-hidden overflow-ellipsis">Due date</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative text-sm items-center rounded-sm min-h-[30px] w-full overflow-hidden py-1 px-1.5">
                        <div className="leading-[1.2] whitespace-nowrap  overflow-hidden overflow-ellipsis inline">
                          05/02/2025
                        {/* <div className="relative">
                          <button onClick={toggleDivNew} className="text-sm">
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
                      </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="flex items-end shrink-0 visible">
                  <div>
                    <div className="">
                      <div>
                        <div className="inline-flex items-center rounded-md h-[30px] w-[30px]">
                          <Image 
                            src="/create-task/ellipsis-solid (1).svg"
                            alt="ellipsis"
                            height={14}
                            width={14} 
                            className="w-3.5 h-3.5 block mr-0.5 shrink-0 fill-[#ffffff71]"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="mb-3 ">
          <div className="flex flex-col gap-2">
            <div className="py-[3px] text-[13px] leading-[18px] text-[#ffffff71] flex flex-row items-center font-medium gap-0.5 ">
              <div>Comments</div>
            </div>
            <div>
              <div className="w-full mr-auto mx-auto">
                <div className="pt-2 pb-3 pr-1">
                  <div>
                    <div className="flex flex-col w-full cursor-pointer">
                      <div className="flex items-center grow-[1]">
                        <div className="shrink-0 grow-0 mr-2 self-start">
                          <div className="bg-[#191919] rounded-[100%] outline-[#ffffff0e] outline-[1px] outline-offset-[-1] shadow-none">
                            <div className="rounded-[100%] w-6 h-6 flex items-center justify-center opacity-[1]">
                              <div>
                              <Image 
                                src="/create-task/unnamed.png"
                                alt="unnamed"
                                height={18}
                                width={18} 
                                className="w-full h-full block object-cover rounded-[100%]   shrink-0 fill-[#ffffff71]"/>                        
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Description */}
        <div>
          <h2 className="text-xl font-bold">Task description</h2>
          <textarea name="" id="" className="w-[800px]  h-52 m-3">Provide an overview of the task and related details.</textarea>
        </div>

        {/* Sub-tasks */}
        <div>
          <h2 className="text-xl font-bold">Sub-tasks</h2>
          <ul className="space-y-2 mt-2">
            {["To-do", "To-do", "To-do"].map((item, i) => (
              <li key={i} className="flex  items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Supporting files */}
        <div>
          <h2 className="text-xl font-bold mb-3">Supporting files</h2>
          <div className="space-y-2">
            <div className="bg-[#302f2f] p-3 rounded-md">📄 Embed a PDF</div>
            <div className="bg-[#302f2f] p-3 rounded-md flex items-center justify-between">
              <span>🔗 Connect Google Drive to Notion to embed a file</span>
              <span>⋯</span>
            </div>
            <div className="bg-[#302f2f] p-3 rounded-md">🎨 Embed Figma</div>
          </div>
        </div>
      </div>
    </main>
  );
}
