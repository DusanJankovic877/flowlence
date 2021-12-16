import { RequestHandler } from "./RequestHandler";

class AdminServices extends RequestHandler{
    async login(payload){
        const response =  await this.apiClient.post("/auth/login", payload);
        if(response){
            return response.data;
        }
    }
    async getLogout(){
        return await this.apiClient.post("/auth/logout");
    }
    async me(){
        const response = await this.apiClient.get('/auth/me');
        return response.data;
    }
}
const adminServices = new AdminServices();
export default adminServices;