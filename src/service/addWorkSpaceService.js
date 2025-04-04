import { auth } from "../../auth";

export async function addWorkSpaceService({ newWorkspace }) {
     const session = await auth();
     if (!session) {
          console.log("No session found");
          return { success: false, error: "No session found" };
     }
     const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace`, {
          method: "POST",
          headers: {
               Accept: "*/*",
               "Content-Type": "application/json",
               Authorization: `Bearer ${session?.payload.token}`,
          },
          body: JSON.stringify({
               workspaceName: newWorkspace,
          }),
     });
     const data = await res.json();
}
