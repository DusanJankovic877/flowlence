import { RequestHandler } from "./RequestHandler";
class DooService extends RequestHandler{
   async getDooFormData(payload){
       const response = await this.apiClient.post("/doo-mail", payload);
       console.log(response);
    }
}
const dooService = new DooService();
export default dooService;