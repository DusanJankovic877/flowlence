import { RequestHandler } from "./RequestHandler";
class BlogServices extends RequestHandler{
    async createPost(payload){
        console.log('paylopad',payload.blog);
        const response = await this.apiClient.post('/create-post', payload.blog)
        console.log('larvel response', response);
        return response;
    }
    async setCreatePostImage(payload){
      const response = await this.apiClient.post('/save-post-image', payload)
      // console.log('payload', response.data);
      return response;
    }
    async getPosts(){
      console.log('asdasdasdasddas')
      const response = await this.apiClient.get('/get-posts')
      return response;
      
    }
}
const blogServices = new BlogServices();
export default blogServices;