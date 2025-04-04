"use server";
import { addWorkSpaceService } from "@/service/addWorkSpaceService";

export async function addWorkSpaceAction(formData) {
     const workspaceName = formData.get("newWorkspace");
     if (!workspaceName) {
          return { error: "Workspace name is required" };
     }
     const res = await addWorkSpaceService({ newWorkspace: workspaceName });
}
