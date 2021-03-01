<template>
  <div>
    <Header />
    <div class="card">
      <p>新規登録</p>
      <div class="form">
        <input placeholder="ユーザーネーム" type="text" />
        <input placeholder="メールアドレス" type="email" />
        <input placeholder="パスワード" type="password" />
        <button @click="auth">新規登録</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";
export default {
  data(){
    return{
      name:"",
      email:"",
      password:""
    };
  },
  components: {
    Header,Footer
  },
  methods:{
    auth(){
      axios
       .post("serene-ocean-32710/api/register",{
         name: this.name,
         email: this.email,
         password: this.password
       })
       .then(response =>{
         console.log(response);
         this.$router.replace("/");
       })
       .catch(error =>{
         alert(error);
       });
    }
  }
};
</script>

<style scoped>
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color:cadetblue;
  border-radius: 25px;
  cursor: pointer;
}
.card {
  margin: 100px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}
.card p {
  color: black;
  font-weight: bold;
  text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
}
.form {
  text-align: center;
}
.form button {
  margin-top: 15px;
}
</style>