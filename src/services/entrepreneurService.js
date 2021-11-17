import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        return response.data;
    }
    async setMailFormData(payload){
        const resposne = await this.apiClient.post('/entrepreneur-mail', payload)
        console.log(resposne);
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;