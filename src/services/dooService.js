import { RequestHandler } from "./RequestHandler";
class DooService extends RequestHandler{
   async getDooFormData(payload){
       const reponse = await this.apiClient.post("/doo-mail", payload);
    }
}
const dooService = new DooService();
export default dooService;