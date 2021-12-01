import { RequestHandler } from "./RequestHandler";
class ContactServices extends RequestHandler{
    async getContactFormData(payload){
        const response = await this.apiClient.post("/mail", payload);
        if(response){
            return response.data.message;
        }
        // console.log('service', response.data.message);
    }
}
const contactServices = new ContactServices();
export default contactServices;