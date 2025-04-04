"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const WorkspaceForm = (props) => {
     const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-green-500",
          "bg-yellow-500",
          "bg-pink-500",
          "bg-purple-500",
          "bg-orange-500",
     ];
     const [randomColor, setRandomColor] = useState("bg-gray-500"); // Default color

     useEffect(() => {
          // This only runs on the client side
          setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
     }, []);

     return (
          <>
               <li>
                    <Link
                         href={`/workspace/${props.id}`}
                         className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                         <div className="flex items-center gap-2">
                              <span className={`w-2.5 h-2.5 rounded-full ${randomColor}`}></span>
                              <span className="text-xl"> {props.title}</span>
                         </div>
                         <span className="shrink-0 text-black">
                              <svg
                                   width="20"
                                   height="21"
                                   viewBox="0 0 20 21"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M4.16667 8.83331C3.25 8.83331 2.5 9.58331 2.5 10.5C2.5 11.4166 3.25 12.1666 4.16667 12.1666C5.08333 12.1666 5.83333 11.4166 5.83333 10.5C5.83333 9.58331 5.08333 8.83331 4.16667 8.83331Z"
                                        stroke="#1E293B"
                                        strokeWidth="1.5"
                                   />
                                   <path
                                        d="M15.8334 8.83331C14.9167 8.83331 14.1667 9.58331 14.1667 10.5C14.1667 11.4166 14.9167 12.1666 15.8334 12.1666C16.75 12.1666 17.5 11.4166 17.5 10.5C17.5 9.58331 16.75 8.83331 15.8334 8.83331Z"
                                        stroke="#1E293B"
                                        strokeWidth="1.5"
                                   />
                                   <path
                                        d="M8.33331 10.5C8.33331 11.4166 9.08331 12.1666 9.99998 12.1666C10.9166 12.1666 11.6666 11.4166 11.6666 10.5C11.6666 9.58331 10.9166 8.83331 9.99998 8.83331"
                                        stroke="#1E293B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                              </svg>
                         </span>
                    </Link>
               </li>
          </>
     );
};

export default WorkspaceForm;
