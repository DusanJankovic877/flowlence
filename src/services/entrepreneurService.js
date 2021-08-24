import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
   async getEntrepreneurFormData(payload){
       console.log(payload);
       const reponse = await this.apiClient.post("/entrepreneur-mail", payload);
       console.log('response', reponse);
    }
    async setEntrepreneurFormData(){
        const response = await  this.apiClient.get('/get-form-data');
        console.log('response', response);

        return response.data;
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;