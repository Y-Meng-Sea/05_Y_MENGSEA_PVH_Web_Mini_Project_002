import "../globals.css";
import Logo from "@/components/logo";
import profileimage from "@/assets/profile.png";
import Image from "next/image";
import WorkspaceRender from "./_components/workspace-render";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";
import { addWorkSpaceAction } from "@/action/addWorkSpaceAction";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogFooter,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
export const metadata = {
     title: {
          template: "%s | Monster",
          default: "Todo List | Monster",
     },
     description: "Homework 006 - Next.js",
};

export default function WorkSpace({ children }) {
     return (
          <html lang="en">
               <body className="text-charcoal">
                    <div className=" mx-auto  grid grid-cols-12">
                         <div className="col-span-3 flex flex-col items-center self-start">
                              <div className="my-12">
                                   <Logo />
                              </div>
                              <div className="w-[90%] mx-auto">
                                   <div className="text-2xl text-gray-500 flex justify-between gap-2 my-4">
                                        <h1>Workspace</h1>

                                        <Dialog>
                                             <DialogTrigger asChild>
                                                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                                                       <SquarePlus size={26} />
                                                  </Button>
                                             </DialogTrigger>
                                             <DialogContent className="sm:max-w-[425px] bg-white">
                                                  <DialogHeader>
                                                       <DialogTitle>Create New Workspace</DialogTitle>
                                                  </DialogHeader>
                                                  <form action={addWorkSpaceAction} className="grid gap-4 py-4">
                                                       <div className="space-y-2">
                                                            <Input
                                                                 id="newWorkspace"
                                                                 name="newWorkspace"
                                                                 placeholder="Type your workspace name"
                                                                 className="w-full"
                                                            />
                                                       </div>

                                                       <DialogFooter>
                                                            <Button
                                                                 type="submit"
                                                                 className={`text-blue-400 px-7 py-3 border rounded-xl`}>
                                                                 Create
                                                            </Button>
                                                       </DialogFooter>
                                                  </form>
                                             </DialogContent>
                                        </Dialog>
                                   </div>
                                   {/* render workspace list */}
                                   <WorkspaceRender />
                              </div>
                              <div className="w-[90%] mx-auto">
                                   <div className="text-2xl text-gray-500 flex justify-between gap-2 my-4">
                                        <h1>Favorite</h1>
                                        <button>
                                             <svg
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                  <path
                                                       d="M20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.21 1.60001 12.77 1.60001 13.73 3.51001L15.49 7.03001C15.59 7.24001 15.77 7.45001 15.98 7.62001"
                                                       stroke="#94A3B8"
                                                       strokeWidth="2"
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                  />
                                             </svg>
                                        </button>
                                   </div>
                                   <ul className="space-y-1 w-full">
                                        <li>
                                             <a
                                                  href="#"
                                                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                                  <div className="flex items-center gap-2">
                                                       <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                                                       <span className="text-xl"> Teams </span>
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
                                             </a>
                                        </li>

                                        <li>
                                             <a
                                                  href="#"
                                                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                                  <div className="flex items-center gap-2">
                                                       <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                                                       <span className="text-xl"> Teams </span>
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
                                             </a>
                                        </li>

                                        <li>
                                             <a
                                                  href="#"
                                                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                                  <div className="flex items-center gap-2">
                                                       <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                                                       <span className="text-xl"> Teams </span>
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
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="col-span-9 my-5">
                              <div className="w-full py-3 border-b mb-5 border-gray-300 ">
                                   <div className="w-[90%] mx-auto flex justify-between">
                                        <nav>
                                             <ul className="list-none flex gap-5">
                                                  <li>Workspace</li>
                                                  <li className="flex gap-5">
                                                       <svg
                                                            width="25"
                                                            height="24"
                                                            viewBox="0 0 25 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                 d="M9.41 19.92L15.93 13.4C16.7 12.63 16.7 11.37 15.93 10.6L9.41 4.07999"
                                                                 stroke="#292D32"
                                                                 strokeWidth="1.5"
                                                                 strokeMiterlimit="10"
                                                                 strokeLinecap="round"
                                                                 strokeLinejoin="round"
                                                            />
                                                       </svg>
                                                       <span className=" text-blue-500 underline underline-offset-8 ">
                                                            Workspace
                                                       </span>
                                                  </li>
                                             </ul>
                                        </nav>
                                        <div className="flex items-center gap-5">
                                             <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                  <path
                                                       d="M14 7.51334V11.3983"
                                                       stroke="#1E293B"
                                                       strokeWidth="1.5"
                                                       strokeMiterlimit="10"
                                                       strokeLinecap="round"
                                                  />
                                                  <path
                                                       d="M24.0217 17.6983C24.8733 19.1217 24.1967 20.965 22.6217 21.49C17.045 23.345 11.0133 23.345 5.43668 21.49C3.75668 20.93 3.11501 19.2267 4.03668 17.6983L5.51835 15.225C5.92668 14.5483 6.25335 13.3467 6.25335 12.565V10.115C6.25335 5.81001 9.73001 2.33334 14.0233 2.33334C18.2933 2.33334 21.7933 5.83334 21.7933 10.1033V12.5533C21.7933 12.7633 21.8167 12.9967 21.8517 13.2417"
                                                       stroke="#1E293B"
                                                       strokeWidth="1.5"
                                                       strokeMiterlimit="10"
                                                       strokeLinecap="round"
                                                  />
                                                  <path
                                                       d="M17.885 21.9567C17.885 24.0917 16.135 25.8417 14 25.8417C12.9383 25.8417 11.9583 25.3983 11.2583 24.6983C10.5583 23.9983 10.115 23.0183 10.115 21.9567"
                                                       stroke="#1E293B"
                                                       strokeWidth="1.5"
                                                       strokeMiterlimit="10"
                                                  />
                                             </svg>
                                             <Image src={profileimage} alt="" />
                                             <div>
                                                  <h2>Y Meng Sea</h2>
                                                  <p className="text-sky-500">ymengsea@gmail.com</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="w-full">
                                   <div className="w-[90%] mx-auto">{children}</div>
                              </div>
                         </div>
                    </div>
               </body>
          </html>
     );
}
