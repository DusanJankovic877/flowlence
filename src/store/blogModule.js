import blogService from '../services/blogService'
const blogModule = {
    namespaced: true,
    state:{
        counter: 1,
        blog: null,
        textareasToCreate: [],
        textareasToDelete: [],
        postImages: [],
        postToCreate:{}
    },
    mutations:{
        setNewTextArea(state, payload){
            var counter = state.blog.textareas.length;
            state.blog.textareas.push({id: counter++})
            state.textareasToCreate.push({id: payload})
        },
        SET_POST_IMAGE(state,payload){
            state.postImages = payload;
        },
        SET_POST_TO_CREATE(state, payload){
            state.postToCreate = payload
        }
    },
    actions:{
        addNewTextArea(state, payload){
            console.log('blog module',payload);
            state.commit('setNewTextArea', payload)
        },
        deleteTextArea(){

        },
        async setCreatePost(_, payload){
            await blogService.createPost(payload)
            // state.commit('SET_POST_TO_CREATE', payload)
        },
        async setCreatePostImage({dispatch}, payload){
            const response = await blogService.setCreatePostImage(payload.data);
            let rImageNames = [];
            if(response){
                response.data.images.forEach(rImage => {
                    const rImageName = rImage.slice(11);
                    rImageNames.push(rImageName);
                });
                let foundCheck = null;
                rImageNames.forEach(rImageNamee => {
                    const found = payload.blog.images.find(x => x.name === rImageNamee);
                    if(found){
                        foundCheck = true; 
                    }else{
                        foundCheck = false;
                    }
                });
                if(foundCheck === true){
                    console.log('Blog service module call');
                    dispatch('setCreatePost', {blog: payload.blog})
                }else {
                    return;
                }

            }else{
                dispatch('setCreatePost', {blog: payload.blog})
                return
            }
        }
    },
    getters:{
        textareasToDelete: (state) => state.textareasToDelete,
        blog: (state) => state.blog,
        postImages: (state) => state.postImages

    }

}
export default blogModule;