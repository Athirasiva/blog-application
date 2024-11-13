import { base_URL } from "./base_URL"
import { commonAPI } from "./commonAPI"

export const  addBlog = async (blog) =>{
    return await commonAPI("POST", `${base_URL}/blogs`,blog)
}
 export const getBlog = async()=>{
    return await commonAPI("GET", `${base_URL}/blogs`,"")
 }
export const deleteBlog = async(id) => {
    return await commonAPI("DELETE", `${base_URL}/blogs/${id}`,{})
}

export const editBlog = async(id, blog) =>{
    return await commonAPI("PUT",`${base_URL}/blogs/${id}`, blog)
}