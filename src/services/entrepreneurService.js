import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
   async getEntrepreneurFormData(payload){
       const response = await this.apiClient.post("/entrepreneur-mail", payload);
       console.log(response);
    }
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        return response.data;
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;