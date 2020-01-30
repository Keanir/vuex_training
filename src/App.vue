<template>
  <div id="app">
    <h1>Vuex training</h1>
    <PostForm />
    <h2>{{ postsCount }}</h2>
    <div class="post" v-for="post in validation" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "./components/PostForm";

export default {
  name: "app",
  components: {
    PostForm
  },
  computed: mapGetters(["validation", "postsCount"]),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    // this.$store.dispatch("fetchPosts");
    // с помощью mapActions можно сократить код и вместо dispatch обращаться к названию экшена
    // параметр, который передаем это limit
    this.fetchPosts(2);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}
</style>
