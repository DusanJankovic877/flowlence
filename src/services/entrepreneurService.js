import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
   async getEntrepreneurFormData(payload){
       console.log(payload);
       const reponse = await this.apiClient.post("/entrepreneur-mail", payload);
       console.log('response', reponse);
    }
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        console.log('service payload',response);
        return response.data;
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;