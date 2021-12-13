import { RequestHandler } from "./RequestHandler";
class BlogServices extends RequestHandler{
    async createPost(payload){
        // console.log('paylopad',payload);
        const response = await this.apiClient.post('/create-post', payload)
        console.log('larvel response', response);
    }
    async getImage(){
        const response =  await this.apiClient.get('/get-image/1639049836_elena-putina-WuSzNJpys_4-unsplash.jpg')
        return response.data;
    }
}
const blogServices = new BlogServices();
export default blogServices;