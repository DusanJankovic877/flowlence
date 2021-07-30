import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
    getEntrepreneurFormData(payload){
        console.log('service', payload);
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;