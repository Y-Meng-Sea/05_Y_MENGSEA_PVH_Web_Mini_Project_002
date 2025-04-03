import { getWorkSpace } from "@/service/work-space-service";
import React from "react";
import WorkspaceForm from "./workspace-form";

const WorkspaceRender = async () => {
     const jsondata = await getWorkSpace();
     return (
          <>
               <ul className="space-y-1 w-full">
                    {jsondata.map((data) => {
                         return (
                              <WorkspaceForm key={data.workspaceId} title={data.workspaceName} id={data.workspaceId} />
                         );
                    })}
               </ul>
          </>
     );
};

export default WorkspaceRender;
