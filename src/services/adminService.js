import { RequestHandler } from "./RequestHandler";

class AdminServices extends RequestHandler{
    async login(payload){
        const response =  await this.apiClient.post("/auth/login", payload);
        
        if(response){
            return response.data;
        }

    }
    async getLogout(payload){
        // const patload = JSON.stringify(payload)
        await this.apiClient.post("/auth/logout", payload)
    
    }
    async me(token){
        
        const response = await this.apiClient.get('/auth/me', {
            headers:{
                'Authorization': 'Bearer ' + token
            }
        });
        return response.data;
      
    }
}
const adminServices = new AdminServices();
export default adminServices;