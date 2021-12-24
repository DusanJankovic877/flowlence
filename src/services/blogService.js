import { RequestHandler } from "./RequestHandler";
class BlogServices extends RequestHandler{
    async createPost(payload){
        const response = await this.apiClient.post('/create-post', payload.blog)
        return response;
    }
    async setCreatePostImage(payload){
      const response = await this.apiClient.post('/save-post-image', payload)
      return response;
    }
    async getPosts(){
      const response = await this.apiClient.get('/get-posts')
      return response;
      
    }
    async getPost(id){
      const response = await this.apiClient.get(`get-posts/${id}`);
      return response;
    }
    async getImage(name){
      const response = await this.apiClient.get(`/get-image/${name}`) ;
      return response;
    }
}
const blogServices = new BlogServices();
export default blogServices;