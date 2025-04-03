import { auth } from "../../auth";

export async function todoService(workspaceId) {
     console.log("workspace id is ", workspaceId);
     const session = await auth();
     console.log("seesion : ", session.token);
     const res = await fetch(
          `http://96.9.81.187:8080/api/v1/tasks/workspace/${workspaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
          {
               method: "GET",
               headers: {
                    "Content-Type": "accept: */*",
                    Authorization: `Bearer ${session?.payload.token}`,
               },
          }
     );
     const todo = await res.json();
     console.log("todo : ", todo);
     return todo.payload;
}
