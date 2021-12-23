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
        posts:{},
        post:{}
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
            state.posts =  payload
        },
        SET_POST(state, payload){
            state.post = payload
        },
        EMPTY_POST(state){
            state.post = {}
        },
        EMPTY_POSTS(state){
            state.posts = {}
        }
    },
    actions:{
        addNewTextArea(state, payload){
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
                    payload.blog.images.forEach(blogImage => {
                        response.data.images.forEach(savedImage => {
                            const imageName = savedImage.slice(11);
                            if(imageName === blogImage.name){
                                blogImage.name = savedImage
                            }
                        });
                    });
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
            if(response.data){
                commit('SET_POSTS', response.data)
            }
        },
        emptyPosts({commit}){
            commit('EMPTY_POSTS')
        },
        async getPost({commit},payload){
            const response = await blogService.getPost(payload);
            if(response.data){
                commit('SET_POST', response.data)
            }
        },
        emptyPost({commit}){
            commit('EMPTY_POST')
        }
    },
    getters:{
        textareasToDelete: (state) => state.textareasToDelete,
        blog: (state) => state.blog,
        postImages: (state) => state.postImages,
        savedImages: (state) => state.savedImages,
        posts: (state) => state.posts,
        post: (state) => state.post

    }

}
export default blogModule;