import { RequestHandler } from "./RequestHandler";
class AdminServices extends RequestHandler{
    async login(payload){
        const response =  await this.apiClient.post("/auth/login", payload);
        console.log(response.data);
        return response.data;

    }
    async getLogout(payload){
        // const patload = JSON.stringify(payload)
        await this.apiClient.post("/auth/logout", payload)
    
    }
}
const adminServices = new AdminServices();
export default adminServices;