import { RequestHandler } from "./RequestHandler";
class AssociationService extends RequestHandler{
    async getAssociationFormData(){
       const response = await this.apiClient.get("/association-form-data")
       return response.data;
    }
}
const associationService = new AssociationService();
export default associationService;