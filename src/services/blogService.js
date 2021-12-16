import { RequestHandler } from "./RequestHandler";
class BlogServices extends RequestHandler{
    async createPost(payload){
        // console.log('paylopad',payload);
        const response = await this.apiClient.post('/create-post', payload)
        console.log('larvel response', response);
    }
    async setCreatePostImage(payload){
      const response = await this.apiClient.post('/save-post-image', payload)  
      console.log('larvel image response', response);
    }
}
const blogServices = new BlogServices();
export default blogServices;