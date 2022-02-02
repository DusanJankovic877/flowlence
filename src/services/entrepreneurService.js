import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        return response.data;
    }
    async setMailFormData(payload){
        const response = await this.apiClient.post('/entrepreneur-mail', payload)
 
        if(response){
            return response.data.message;
        }
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;