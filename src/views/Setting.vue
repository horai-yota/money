<template>
  <div class="userinput">
    <Header />
    <Menu />
    <div class="contains">
    <div class="pic">
      <img  src="../assets/noimage.png"
       alt="picture">
    </div>
    <div class="target">
      <textarea v-model="date" placeholder="欲しいもの"></textarea>
      <textarea v-model="when" placeholder="いつまでに？"></textarea>      
      ¥<input v-model="money" class="howmuch" placeholder="いくらくらい？" type="number" step="100">
      <br>
      <div @click="send">
      <button>登録</button>
      </div>
    </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import axios from "axios";
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
export default {
  data(){
    return{
      date:"",
      when:"",
      money:"",
    };
  },
  methods:{
    send(){
      if(this.money === ""){
        alert("内容を入力してください");
      }else{
        axios
        .post("https://enigmatic-caverns-39430.herokuapp.com/api/money",{
          date: this.$store.state.date,
          when: this.$store.state.when,
          money: this.$store.state.money
        })
        .then((response) =>{
          console.log(response);
          alert("登録しました");
          this.date ="";
          this.when ="";
          this.money ="";
          this.$router.go({
            path: this.$router.currentRoute.path,
            force:true,
          });
        });
      }
    },
  },
  components:{
    Header,
    Menu,
    Footer
  }
}
</script>

<style scoped>

.contains{
  background-image:URL('../assets/backimage.jpeg');
 display:flex;
 align-items: center;
 justify-content: space-around;
 padding: 30px;
 
}



button{
  display       : inline-block;
  border-radius : 15%;          /* 角丸       */
  font-size     : 18pt;        /* 文字サイズ */
  text-align    : center;      /* 文字位置   */
  cursor        : pointer;     /* カーソル   */
  padding       : 12px 12px;   /* 余白       */
  background    : cadetblue;     /* 背景色     */
  color         : #ffffff;     /* 文字色     */
  line-height   : 1em;         /* 1行の高さ  */
  transition    : .3s;         /* なめらか変化 */
  box-shadow    : 6px 6px 3px #666666;  /* 影の設定 */
  border        : 2px solid #000066;    /* 枠の指定 */
}

.button:hover {
  box-shadow    : none;        /* カーソル時の影消去 */
  color         : cadetblue;     /* 背景色     */
  background    : #ffffff;     /* 文字色     */
}


.target textarea{
  border:1px solid;
  display: block;
  margin: 10px;
  background-color:white;
}

.howmuch{
  border:1px solid;
  margin: 10px;
  background-color:white;
}

.pic img{
  width: 300px;
  height: 400px;
}

</style>