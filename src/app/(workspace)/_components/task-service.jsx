import React from "react";

async function TaskService({ searchParams }) {
     const workspaceName = (await searchParams)?.workspaceId;
     console.log("workspace id is : ", workspaceName);
     return <div></div>;
}

export default TaskService;
