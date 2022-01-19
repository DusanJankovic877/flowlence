import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        console.log('response form ', response.data);
        return response.data;
    }
    async setMailFormData(payload){
        const response = await this.apiClient.post('/entrepreneur-mail', payload)
 
        if(response){
            return response.data.message;
        }
    }
    async getStuff(){
        const response = await this.apiClient.get('/user')
        console.log(response.data);
    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;