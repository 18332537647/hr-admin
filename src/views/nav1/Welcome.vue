<template>
	<div class="welcome">
	</div>
</template>
<script>
export default {
  data(){
  	return{
  		welcomeMsg:""
  	}
  },
  mounted() {

  }
}
</script>

<style scoped>
.welcome{
	width:100%;
	height: 600px;
	background-image: url(../../assets/home-welcome.png);
	background-repeat: no-repeat;
	background-position: 40% 40%;
}
</style>