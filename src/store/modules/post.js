export default {
  actions: {
    // получаем данные с сервера, заносим их в переменную, для вызова мутации используется контекст
    // limit для изменения параметра количества постов у ссылки
    async fetchPosts(context, limit = 3) {
      const res = await fetch(
        "http://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();
      // первый параметр - мутация, которую хотим вызвать, второй - payload в этой мутации
      context.commit("updatePosts", posts);
    }
  },
  mutations: {
    updatePosts(state, payload) {
      state.posts = payload;
    },
    createPost(state, payload) {
      state.posts.unshift(payload);
    }
  },
  // state меняется через mutations
  state: {
    posts: []
  },
  getters: {
    validation(state) {
      return state.posts.filter(post => {
        return post.title && post.body;
      });
    },
    allPosts(state) {
      return state.posts;
    },
    // с validation не будут создаваться посты, если форма не заполнена, но счетчик увеличивается все равно
    // передаем в счетчик геттеры, чтобы можно было использовать allPosts и использовать его длинну
    postsCount(state, getters) {
      return getters.validation.length;
    }
  }
};
