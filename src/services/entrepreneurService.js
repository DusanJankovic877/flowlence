import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        return response.data;
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;