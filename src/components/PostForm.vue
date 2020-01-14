<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title" />
    <input type="text" placeholder="text" v-model="body" />
    <button type="submit">Create Post</button>
    <hr />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    //spread для того, чтобы воспользоваться mapMutations и замены целиком объекта
    ...mapMutations(["createPost"]),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      });
      // обнуляем инпуты после ввода
      this.title = this.body = "";
    }
  }
};
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>
