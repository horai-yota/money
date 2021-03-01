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
            <p class="name" @click="fav(index)">{{value.name}}</p>
            <p class="number" @click="del(index)" v-if="path">{{value.like.length}}</p>
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
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      shares: [],
      path: true,
    };
  },
  methods:{
    fav(index){
      const result = this.shares[index].like.some((value) =>{
        return value.user_id == this.$store.state.user.id;
      });
      if(result){
        this.shares[index].like.forEach((element) =>{
          if(element.user_id == this.$store.state.user.id){
            axios({
              method: "delete",
              url: "serene-ocean-32710/api/like",
              data:{
                share_id: this.shares[index].item.id,
                user_id: this.$store.state.user.id,
              },
            }).then((response) =>{
              console.log(response);
              this.$router.go({
                path: this.$router.currentRoute.path,
                force: true,
              });
            });
          }
        });
      }else{
        axios
        .post("serene-ocean-32710/api/like",{
          share_id: this.shares[index].item.id,
          user_id: this.$store.state.user.id,
        })
        .then((response) =>{
          console.log(response);
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
      }
    },
    del(index){
      axios
      .delete(
        "serene-ocean-32710/api/shares/" +
        this.shares[index].item.id
      )
      .then((response) =>{
        console.log(response);
        this.$router.go({
          path: this.$router.currentRoute.path,
          force: true,
        });
      });
    },
  },
  created(){
    if(this.$route.name === "home"){
      this.path =  false;
    }
    this.getShares();
  },
  components:{
    HeaderAuth,
    Menu
  }
};
</script>

<style scoped>

</style>