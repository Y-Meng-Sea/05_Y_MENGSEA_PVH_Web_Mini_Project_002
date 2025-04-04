"use server";
import CardComponent from "@/components/card";
import { todoService } from "@/service/todoService";

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
          </div>
     );
};
export default WorkSpace;
