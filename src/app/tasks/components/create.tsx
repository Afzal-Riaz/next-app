'use client';

import Image from "next/image";
import React, { useState } from 'react';
import TaskPage2 from "./createform";

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

  // 🔧 You were missing this 'return' block!
  return (
    <div className="">
      <div className="p-4 relative">
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
          <div className="">
            <div className="flex  z-[9999] absolute right-[80px]   w-[1000px] h-[700px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-100 overflow-y-scroll mt-4 p-4 border-[0.05] border-[#292929] rounded shadow-lg bg-[#191919]">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-[#191919] text-[#ffffffcf] px-4 py-2 mt-5 ml-5 rounded transition absolute left-0 top-0"
              >
                <Image 
                  src="/create-task/xmark-solid.svg"
                  alt=""
                  height={16}
                  width={16} />
              </button>

              <form onSubmit={handleSubmit}>
                <div>
                    <div>
                    <div>
                        <TaskPage2 />
                        

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
                    </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCreator;
