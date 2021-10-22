import { RequestHandler } from "./RequestHandler";
class EntrepreneurService extends RequestHandler{
   async getEntrepreneurFormData(payload){
       const response = await this.apiClient.post("/entrepreneur-mail", payload);
       console.log(response);
    }
    async getFormData(payload){
        const response = await  this.apiClient.post('/get-form-data', payload);
        return response.data;
    }
    async getSelectedDataOptions(payload){
        const response = await this.apiClient.post('/get-selected-data-options', payload)
        console.log('get selected data options', payload);
        return response;
    }
    async getExampleFormData(){
        const response = await  this.apiClient.get('/get-example-data');
        return response.data;
        //go to laravel and make route

    }
}
const entrepreneurService = new EntrepreneurService();
export default entrepreneurService;