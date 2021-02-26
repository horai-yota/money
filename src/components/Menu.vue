<template>
  <div class="menu">
      <p @click="$router.push('/home')">マイぺージ</p>
      <p @click="$router.push('/setting')">設定</p>
      <p @click="$router.push('/friend')">友達</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.menu{
  background-color:black;
  color:white;
  display:flex;
  justify-content: space-around;
  height: 40px;
  align-items: center;
  cursor: pointer;
};

</style>