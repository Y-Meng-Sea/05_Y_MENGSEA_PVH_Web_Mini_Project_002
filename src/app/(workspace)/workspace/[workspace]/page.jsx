"use server";
import CardComponent from "@/components/card";
import { todoService } from "@/service/todoService";
import { Button } from "@/components/ui/button";
import { SquareCheckBig } from "lucide-react";
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
const WorkSpace = async ({ params }) => {
     const id = params.workspace;
     const res = await todoService(id);
     const renderCard = (res) => {
          if (!res || res.length === 0) {
               return <p>There are no task available in the workspace</p>;
          } else {
               return res.map((d) => <CardComponent key={d.taskId} props={d} />);
          }
     };
     return (
          <div className="w-full">
               <h1 className="text-2xl">HRD Design</h1>
               <div className="grid grid-cols-3 mt-5 gap-8">
                    <div className="grid-col-1">
                         <h2 className="border-b gap-y-2 border-red-500 text-red-500 text-xl">Not Started</h2>
                         {/* <CardComponent /> */}
                         {/* <CardComponent /> */}
                         {renderCard(res)}
                    </div>
                    <div className="grid-col-1 ">
                         <h2 className="border-b gap-y-2 border-blue-500 text-blue-500 text-xl">In Progress</h2>
                         {/* <CardComponent /> */}
                    </div>
                    <div className="grid-col-1">
                         <h2 className="border-b gap-y-2 border-green-500 text-green-500 text-xl">Finshed</h2>
                         {/* <CardComponent /> */}
                    </div>
               </div>
               <div className="fixed bottom-5 right-5">
                    <Dialog>
                         <DialogTrigger asChild>
                              <Button variant="ghost" className="bg-blue-500 text-white p-4 rounded-full">
                                   <SquareCheckBig /> Add New Workspace
                              </Button>
                         </DialogTrigger>
                         <DialogContent className="sm:max-w-[425px] bg-white">
                              <DialogHeader>
                                   <DialogTitle>Create New Task</DialogTitle>
                              </DialogHeader>
                              <form className="grid gap-4 py-4">
                                   <div className="space-y-2">
                                        <Input
                                             id="Title"
                                             name="title"
                                             placeholder="Insert you gaol title"
                                             className="w-full"
                                        />
                                        <Input
                                             id="newWorkspace"
                                             name="tag"
                                             placeholder="Insert your note here"
                                             className="w-full"
                                        />
                                   </div>

                                   <DialogFooter>
                                        <Button type="submit" className={`text-blue-400 px-7 py-3 border rounded-xl`}>
                                             Create
                                        </Button>
                                   </DialogFooter>
                              </form>
                         </DialogContent>
                    </Dialog>
               </div>
          </div>
     );
};
export default WorkSpace;
