import blogService from '../services/blogService'
const blogModule = {
    namespaced: true,
    state: {
        counter: 1,
        blog: null,
        textareasToCreate: [],
        textareasToDelete: [],
        postImages: [],
        postToCreate: {},
        posts: {},
        post: {},
        postToEdit: {},
        deletetPost: ''
    },
    mutations: {
        SET_POST_IMAGE(state, payload) {
            state.postImages = payload;
        },
        SET_POST_TO_CREATE(state, payload) {
            state.postToCreate = payload
        },
        SET_IMAGES_NAMES(state, payload) {
            state.savedImages = payload
        },
        SET_POSTS(state, payload) {
            state.posts = payload
        },
        SET_POST(state, payload) {
            state.post = payload
        },
        SET_POST_TO_EDIT(state, payload) {
            state.postToEdit = payload;
            state.post_title = payload.post_title.post_title
        },
        EMPTY_POST(state) {
            state.post = {}
            state.post_title = ''
            state.sectionTitles = {}
            state.textareas = []

        },
        EMPTY_POSTS(state) {
            state.posts = {}
        },
        EMPTY_POST_TO_EDIT(state) {
            state.postToEdit = {}
        },
        SET_DELETED_POST(state, payload) {
            state.deletetPost = payload;
        }


    },
    actions: {
        async setCreatePost(_, payload) {
            await blogService.createPost(payload)
        },
        async setCreatePostImage({ dispatch, commit }, payload) {

            const response = await blogService.setCreatePostImage(payload.data);
            let rImageNames = [];
            if (response.data.images) {
                //slice date time stamp from image name
                response.data.images.forEach(rImage => {
                    const rImageName = rImage.slice(11);
                    rImageNames.push(rImageName);
                });
                let foundCheck = null;
                //check sliced image name with image name in blog object
                rImageNames.forEach(rImageNamee => {
                    const found = payload.blog.images.find(x => x.name === rImageNamee);
                    if (found) {
                        foundCheck = true;
                        commit('SET_IMAGES_NAMES', response.data.images)
                    } else {
                        foundCheck = false;
                    }
                });
                if (foundCheck === true) {
                    payload.blog.images.forEach(blogImage => {
                        response.data.images.forEach(savedImage => {
                            const imageName = savedImage.slice(11);
                            if (imageName === blogImage.name) {
                                blogImage.name = savedImage
                            }
                        });
                    });
                    dispatch('setCreatePost', { blog: payload.blog })
                } else {
                    return;
                }

            } else {
                // dispatch('setCreatePost', { blog: payload.blog })
                return
            }
        },
        async getPosts({ commit }) {
            const response = await blogService.getPosts();
            if (response.data) {
                commit('SET_POSTS', response.data)
            }
        },
        emptyPosts({ commit }) {
            commit('EMPTY_POSTS')
        },
        emptyPost({ commit }) {
            commit('EMPTY_POST')
        },
        emptyPostToEdit({ commit }) {
            commit('EMPTY_POST_TO_EDIT')
        },
        async getPost({ commit }, payload) {
            const response = await blogService.getPost(payload);
            if (response.data) {
                commit('SET_POST', response.data)
            }
        },
        //POST TO EDIT
        async getPostToEdit({ commit }, payload) {
            const response = await blogService.getPostToEdit(payload);
            if (response.data) {
                commit('SET_POST_TO_EDIT', response.data)
            }
        },
        async setEditPostImage({ dispatch }, payload) {

            if (payload.answer === false) {
                return false;
            }
            if (payload.data === null) {
                dispatch('saveEditPost', payload)
            } else {

                const imageResponse = await blogService.setEditPostImage(payload.data);

                let sameNames = true;
                imageResponse.images.forEach(savedImage => {
                    const imageName = savedImage.slice(11);
                    payload.post.images.forEach(image => {
                        if (image.name === imageName) {
                            image.name = savedImage
                            sameNames = true
                        } else {
                            sameNames = false
                        }
                    });
                    if (sameNames) dispatch('saveEditPost', payload)

                });
            }
        },
        async saveEditPost({ commit }, payload) {
            const postResponse = await blogService.saveEditPost({ post: payload.post, images_to_edit: payload.images_to_edit })
            commit('SET_POST', postResponse.post)
        },
        async deletePost({ commit }, payload) {
            const response = await blogService.deletePost(payload);
            commit('SET_DELETED_POST', response.data)

        },
        async deleteImage(_, payload) {
            await blogService.deleteImage(payload)
        },
        async deleteSectionTitle(_, payload) {
            await blogService.deleteSectionTitle(payload)

        },
        async deleteTextarea(_, payload) {
            await blogService.deleteTextarea(payload)
        }

    },
    getters: {
        textareasToDelete: (state) => state.textareasToDelete,
        blog: (state) => state.blog,
        postImages: (state) => state.postImages,
        posts: (state) => state.posts,
        post: (state) => state.post,
        postToEdit: (state) => state.postToEdit,
        deletetPost: (state) => state.deletetPost
    }

}
export default blogModule;