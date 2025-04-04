"use server";
import { addWorkSpaceService } from "@/service/addWorkSpaceService";

export async function addWorkSpaceAction(formData) {
     const workspaceName = formData.get("newWorkspace");
     console.log("Creating workspace:", workspaceName);
     const res = await addWorkSpaceService(workspaceName);
     console.log("Response from service:", res);
}
