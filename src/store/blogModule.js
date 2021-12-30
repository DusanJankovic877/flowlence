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
        post:{},
        postToEdit:{},
        post_title: '',
        sectionTitles:{},
        imagesE:[],
        textareas:[],
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
            // console.log('mutation set post', payload);
            state.post = payload
            state.post.section_titles.forEach(section_title => {
                section_title.images.forEach(image => {
                    state.imagesE.push(image)
                });
                section_title.textareas.forEach(textarea => {
                    state.textareas.push(textarea)
                });
            });

            // state.post_title = payload.post_title.post_title
            // state.sectionTitles = payload.section_titles
        },
        EMPTY_POST(state){
            state.post = {}
            state.post_title = ''
            state.sectionTitles = {}
            state.imagesE = []

        },
        EMPTY_POSTS(state){
            state.posts = {}
        }


    },
    actions:{
        addNewTextArea(state, payload){
            state.commit('setNewTextArea', payload)
        },
        async setCreatePost(_, payload){
            await blogService.createPost(payload)
        },
        async setCreatePostImage({dispatch}, payload){
            
            const response = await blogService.setCreatePostImage(payload.data);
            let rImageNames = [];
            if(response){
                //slice date time stamp from image name
                response.data.images.forEach(rImage => {
                    const rImageName = rImage.slice(11);
                    rImageNames.push(rImageName);
                });
                let foundCheck = null;
                //check sliced image name with image name in blog object
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
        },
        async setEditPostImage(_,payload){
            console.log('setEditPostImage', payload.imagesToEdit.length === 0);
            if(payload.imagesToEdit.length === 0){
                const postResponse = await blogService.saveEditPost({post: payload.post, images_to_edit: payload.imagesToEdit})
                console.log(postResponse);
            }else{

                const imageResponse = await blogService.setEditPostImage(payload.data);
                let sameNames = false;
                imageResponse.images.forEach(savedImage => {
                    const imageName = savedImage.slice(11);
                    console.log('payload.imagesToEdit', payload.imagesToEdit);
                    payload.imagesToEdit.forEach(imageToEdit => {
                        console.log(imageName === imageToEdit.imageName, imageName+' '+imageToEdit.imageName);
                            if(imageName === imageToEdit.imageName){
                                imageToEdit.imageName = savedImage
                                // console.log(imageToEdit);
                                sameNames = true
                            } else{
                                sameNames = false
                            }
                    });
                });
                if(sameNames){
                    console.log('imagesToEdit', payload.imagesToEdit);
                    const postResponse = await blogService.saveEditPost({post: payload.post, images_to_edit: payload.imagesToEdit})
                    console.log(postResponse);
                }
            }

            // if(response){

            // }
            // console.log('EDIT IMAGES LOG', response);
        }
    },
    getters:{
        textareasToDelete: (state) => state.textareasToDelete,
        blog: (state) => state.blog,
        postImages: (state) => state.postImages,
        savedImages: (state) => state.savedImages,
        posts: (state) => state.posts,
        post: (state) => state.post,
        imagesE: (state) => state.imagesE,
        post_title: (state) => state.post_title,
        sectionTitles: (state) => state.sectionTitles,
        textareas: (state) => state.textareas
    }

}
export default blogModule;