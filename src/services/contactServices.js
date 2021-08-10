import { RequestHandler } from "./RequestHandler";
class ContactServices extends RequestHandler{
    async getContactFormData(payload){
       const reponse = await this.apiClient.post("/mail", payload);
       console.log('response', reponse);
    }
}
const contactServices = new ContactServices();
export default contactServices;