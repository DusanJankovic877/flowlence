import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        return response.data;
    }
    async setMailFormData(payload){
        const response = await this.apiClient.post('/entrepreneur-mail', payload)
        return response.data;
    }
    async getStuff(){
        const response = await this.apiClient.get('/user')
        console.log(response.data);
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;