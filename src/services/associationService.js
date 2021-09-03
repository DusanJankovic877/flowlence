import { RequestHandler } from "./RequestHandler";
class AssociationService extends RequestHandler{
    async getAssociationFormData(){
       const response = await this.apiClient.get("/association-form-data")
       return response.data;
    }
    async getAssociationMailData(payload){
        await this.apiClient.post('/association-mail', payload)

    }
}
const associationService = new AssociationService();
export default associationService;