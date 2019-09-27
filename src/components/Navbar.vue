<template>
  <v-carousel hide-delimiters cycle height="350">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :text="item.text"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            src: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }
          
         
        ],
      }
    },
  }
</script>