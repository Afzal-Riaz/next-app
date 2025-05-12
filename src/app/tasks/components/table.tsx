import React, { useState } from 'react';
import Image from "next/image";
import DatePickerForm from '@/app/celandar/page';





const Table =()=> {

    return(
        <main className="">

<div>
            <div className="px-24  relative">
                <div>
                    <table className="w-full flex-nowrap overflow-scroll ">
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
                                <td className=" border-t-[0.05px] border-r-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[21%]  py-1.5 px-2">
                                    <input type="text" />
                                </td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[9%] py-1.5 px-2">
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
                                </td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[10%] py-1.5 px-2"></td>
                                <td className=" border-[0.05px] border-[#ffffff33] border-collapse  w-[8%] py-1.5 px-2" >
                                    <DatePickerForm />
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
                                <td className=" border-t-[0.05px] border-r-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[21%]  py-1.5 px-2">
                                <input type="text" />
                                </td>
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
                                <td className=" border-t-[0.05px] border-r-[0.05px] border-b-[0.05px] border-[#ffffff33] border-collapse  w-[21%]  py-1.5 px-2">
                                <input type="text" />
                                </td>
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

        </main>
    );
}

 export default Table;