import { RequestHandler } from "./RequestHandler";
class ContactServices extends RequestHandler{
    async getContactFormData(payload){
        await this.apiClient.post("/mail", payload);
    }
}
const contactServices = new ContactServices();
export default contactServices;