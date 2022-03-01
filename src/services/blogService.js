import { RequestHandler } from "./RequestHandler";
class BlogServices extends RequestHandler {
    async createPost(payload) {
        const response = await this.apiClient.post('/create-post', payload.blog)
        return response;
    }
    async setCreatePostImage(payload) {
        const response = await this.apiClient.post('/save-post-image', payload)
        return response;
    }
    async getPosts() {
        const response = await this.apiClient.get('/get-posts')
        return response;

    }
    async getPost(id) {
        const response = await this.apiClient.get(`get-posts/${id}`);
        return response;
    }
    async getPostToEdit(id) {
        const response = await this.apiClient.get(`edit-posts/${id}`);
        return response;
    }
    async getImage(name) {
        const response = await this.apiClient.get(`/get-image/${name}`);
        return response;
    }
    async setEditPostImage(images) {
        const response = await this.apiClient.post('/save-edited-images', images)
        return response.data;
    }
    async saveEditPost(payload) {
        const response = await this.apiClient.post('/save-edited-post', payload)
        return response.data;
    }

    async deletePost(payload) {
        const response = await this.apiClient.get(`/delete-post/${payload}`);
        return response;
    }
    async deleteImage(imageId) {
        await this.apiClient.get(`delete-image/${imageId}`)
    }
    async deleteSectionTitle(sectionTitleId) {
        await this.apiClient.get(`delete-section-title/${sectionTitleId}`)

    }
    async deleteTextarea(textareaId) {
        await this.apiClient.get(`delete-textarea/${textareaId}`)
    }
}
const blogServices = new BlogServices();
export default blogServices;