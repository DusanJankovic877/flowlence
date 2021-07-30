import { RequestHandler } from "./RequestHandler";
class ContactServices extends RequestHandler{
    async getContactFormData(payload){
       await console.log('contact service', payload);
    }
}
const contactServices = new ContactServices();
export default contactServices;