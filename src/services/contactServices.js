import { RequestHandler } from "./RequestHandler";
class ContactServices extends RequestHandler{
    async getContactFormData(payload){
        const response = await this.apiClient.post("/mail", payload);
        return response.data.message;
    }
}
const contactServices = new ContactServices();
export default contactServices;