<template>
<v-responsive>
<template>
  <div
    v-ripple
    class="text-center elevation-20 pa-2 headline ma-5"
  >
    SERVICE
  </div>
</template>
<div class="flex-container ma-5">
  <div> <v-col cols="12">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          height="350"
          max-width="300"
        >
          <v-card-text class="my-4 text-center title"><v-icon large>laptop</v-icon></v-card-text>
           <v-card-text class="my-4 text-center title">website designer</v-card-text>
           <v-card-text class="my-4 text-center paragraph">Renowned for being the best website
            development company in Nigeria, our web design and development service helps clients
             grow their businesses online.</v-card-text>
              </v-card>
      </v-hover>
    </v-col></div>

  <div> <v-col cols="12">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          height="350"
          max-width="300"
        >
          <v-card-text class="my-4 text-center title"><v-icon large>laptop</v-icon></v-card-text>
           <v-card-text class="my-4 text-center title">website designer</v-card-text>
           <v-card-text class="my-4 text-center paragraph">Renowned for being the best website
            development company in Nigeria, our web design and development service helps clients
             grow their businesses online.</v-card-text>
        </v-card>
      </v-hover>
    </v-col></div>

  <div> <v-col cols="12">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          height="350"
          max-width="300"
        >
          <v-card-text class="my-4 text-center title"><v-icon large>laptop</v-icon></v-card-text>
           <v-card-text class="my-4 text-center title">website designer</v-card-text>
           <v-card-text class="my-4 text-center paragraph">Renowned for being the best website
            development company in Nigeria, our web design and development service helps clients
             grow their businesses online.</v-card-text>
        </v-card>
      </v-hover>
    </v-col></div>  
</div>
  
  </v-responsive>
</template>
<script>
export default{

}
</script>
<style lang-scss scoped>
.flex-container {
  display: flex;
   flex-wrap: wrap;
  justify-content: center;
  background-color: DodgerBlue;
  justify-content: space-between;
  
}
.flex-container>div {
  background-color: #f1f1f1;
  width: 300px;
  margin: 5px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}


@media screen and (min-width: 480px) {
  #leftsidebar {width: 200px; float: left;}
  #main {margin-left: 216px;}
}
</style>