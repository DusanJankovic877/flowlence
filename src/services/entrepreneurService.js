import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
   async getEntrepreneurFormData(payload){
       const reponse = await this.apiClient.post("/entrepreneur-mail", payload);
    }
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        return response.data;
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;