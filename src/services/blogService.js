import { RequestHandler } from "./RequestHandler";
class BlogServices extends RequestHandler{
    async createPost(payload){
        // console.log('paylopad',payload);
        const response = await this.apiClient.post('/create-post', payload)
        // console.log('larvel response', response.data);
        return response;
    }
    async setCreatePostImage(payload){
      console.log('payload', payload);
      const response = await this.apiClient.post('/save-post-image', payload)
      return response;
    }
}
const blogServices = new BlogServices();
export default blogServices;