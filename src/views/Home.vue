<template>
  <div>
    <HeaderAuth />
    <Menu />
    <div class="contains">
    <div class="mypage-img">
      <p><img src="../assets/noimage.png" width="300px" height="400px"></p>
    </div>
    <div class="target">
      <p>残り００円</p>
      <p>残り００日</p>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


export default {
  name: 'Home',
  components: {
    HeaderAuth,
    Menu,
    Footer
  },
}
</script>


<style scoped>
.contains{
  background-image:URL('../assets/backimage.jpeg');
 display:flex;
 align-items: center;
 justify-content: space-around;
 padding:30px;
}


.target{
  font-size:30px;
}
</style>