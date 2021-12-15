import { RequestHandler } from "./RequestHandler";

class AdminServices extends RequestHandler{
    async login(payload){
        const response =  await this.apiClient.post("/auth/login", payload);
        
        if(response){
            return response.data;
        }

    }
    async getLogout(payload){
        
        await this.apiClient.post("/auth/logout", payload)   
    }
    async me(){
        console.log('me');
        const response = await this.apiClient.get('/auth/me');
        console.log('service me', response);
        return response.data;
      
    }
}
const adminServices = new AdminServices();
export default adminServices;