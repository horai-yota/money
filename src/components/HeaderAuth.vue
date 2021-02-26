<template>
  <div class="header flex">
    <div class="left">
    <img  class="logo" src="../assets/logo.png" alt="logo">
    </div>
    <div class="right flex">
      
      <p @click="$router.push('/signup')">新規作成</p>
      <p @click="$router.push('/')">ログイン</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
 align-items: center;
}
.right p {
 margin-right: 20px;
 cursor: pointer;
}
.header {
 background-color:cadetblue;
}

.flex {
 display: flex;
 justify-content: space-between;
}

</style>
