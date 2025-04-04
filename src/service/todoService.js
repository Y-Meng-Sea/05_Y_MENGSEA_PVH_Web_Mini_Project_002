import { auth } from "../../auth";

export async function todoService(workspaceId) {
     const session = await auth();
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
     return todo.payload;
}
