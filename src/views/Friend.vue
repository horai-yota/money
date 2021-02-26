<template>
  <div class="flex">
    <div>
      <HeaderAuth />
      <Menu />
    </div>
    <div class="contains">
      <div class="title">
        <p>ホーム</p>
      </div>
      <div v-for="(value, index) in shares" :key="index">
        <div class="message">
          <div class="flex">
            <p class="name">{{value.name}}</p>
            <p class="number">{{value.like.length}}</p>
          </div>
          <p class="text">{{value.share}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth";
import Menu from "../components/Menu";
export default {
  data() {
    return {
      shares: [{ name: "太郎", like: [], share: "初めまして" }]
    };
  },
  components:{
    HeaderAuth,
    Menu
  }
};
</script>

<style scoped>

</style>