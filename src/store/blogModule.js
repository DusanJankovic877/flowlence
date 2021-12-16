import blogService from '../services/blogService'
const blogModule = {
    namespaced: true,
    state:{
        counter: 1,
        blog: null,
        textareasToCreate: [],
        textareasToDelete: [],
        // image: ''
    },
    mutations:{
        setNewTextArea(state, payload){
            var counter = state.blog.textareas.length;
            state.blog.textareas.push({id: counter++})
            state.textareasToCreate.push({id: payload})
        },
        setImage(state,payload){
            state.image = payload;
        }
    },
    actions:{
        addNewTextArea(state, payload){
            console.log('blog module',payload);
            state.commit('setNewTextArea', payload)
        },
        deleteTextArea(){

        },
        async setCreatePost(state, payload){
            await blogService.createPost(payload)
        },
        async setCreatePostImage(state, payload){
            await blogService.setCreatePostImage(payload)
        }
    },
    getters:{
        textareasToDelete: (state) => state.textareasToDelete,
        blog: (state) => state.blog

    }

}
export default blogModule;