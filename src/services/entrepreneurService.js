import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
   async getEntrepreneurFormData(payload){
       console.log(payload);
       const reponse = await this.apiClient.post("/entrepreneur-mail", payload);
       console.log('response', reponse);
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;