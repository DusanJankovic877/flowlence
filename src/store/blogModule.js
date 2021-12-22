import blogService from '../services/blogService'
const blogModule = {
    namespaced: true,
    state:{
        counter: 1,
        blog: null,
        textareasToCreate: [],
        textareasToDelete: [],
        postImages: [],
        postToCreate:{},
        savedImages:{},
        posts:{}
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
        },
        SET_IMAGES_NAMES(state, payload){
            state.savedImages = payload
        },
        SET_POSTS(state, payload){
            console.log('post', payload)

            state.posts =  payload
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
                        dispatch('SET_IMAGES_NAMES', response.data.images) 
                    }else{
                        foundCheck = false;
                    }
                });
                if(foundCheck === true){
                    console.log('Blog service module call', response.data.images);
                    payload.blog.images.forEach(blogImage => {
                        response.data.images.forEach(savedImage => {
                            const imageName = savedImage.slice(11);
                            if(imageName === blogImage.name){
                                blogImage.name = savedImage
                            }
                        });
                    });
                    // console.log('sliced iamgenae', payload.blog)
                    dispatch('setCreatePost', {blog: payload.blog})
                }else {
                    return;
                }

            }else{
                dispatch('setCreatePost', {blog: payload.blog})
                return
            }
        },
        async getPosts({commit}){
            const response = await blogService.getPosts();
            // if(response.data){
                commit('SET_POSTS', response.data)
            // }
        }
    },
    getters:{
        textareasToDelete: (state) => state.textareasToDelete,
        blog: (state) => state.blog,
        postImages: (state) => state.postImages,
        savedImages: (state) => state.savedImages,
        posts: (state) => state.posts

    }

}
export default blogModule;