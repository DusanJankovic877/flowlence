import { RequestHandler } from "./RequestHandler";
class BlogServices extends RequestHandler{
    async createPost(payload){
        const response = await this.apiClient.post('/create-post', payload)
        console.log('blog service', response);
    }
}
const blogServices = new BlogServices();
export default blogServices;