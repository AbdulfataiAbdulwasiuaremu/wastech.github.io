<template>
  <v-container class="grey lighten-5">
    <v-layout row wrap>
      <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>



 <v-flex xs4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    class="mx-auto"
    max-width="400"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src1="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title1}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text1}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>

         <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src2="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title2}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text2}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>
      
    </v-layout>

  <v-layout row wrap>
      <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>



 <v-flex xs4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    class="mx-auto"
    max-width="400"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src1="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title1}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text1}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>

         <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src2="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title2}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text2}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>
      
    </v-layout>

  <v-layout row wrap>
      <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>



 <v-flex xs4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    class="mx-auto"
    max-width="400"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src1="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title1}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text1}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>

         <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src2="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title2}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text2}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>
      
    </v-layout>




      <v-layout row wrap>
      <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>



 <v-flex xs4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    class="mx-auto"
    max-width="400"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src1="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title1}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text1}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>

         <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src2="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title2}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text2}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>
      
    </v-layout>




      <v-layout row wrap>
      <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>



 <v-flex xs4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    class="mx-auto"
    max-width="400"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src1="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title1}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text1}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>

         <v-flex x4 md4>
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <template>
  <v-card
    
    max-width="440"
    height="200"
  >
    <v-img
      class="white--text"
      height="100px"
       v-for="(item,i) in items"
      :key="i"
       :src2="item.src"
     
    >
      <v-card-title class="align-end fill-height"  v-for="(item,i) in items"
      :key="i"
     >{{item.title2}}</v-card-title>
    </v-img>

    <v-card-text>
      
      <span class="text--primary"  v-for="(item,i) in items"
      :key="i"
     >
    {{item.text2}}</span><br>
        
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
        </v-card>
      
      </v-flex>
      
    </v-layout>




  </v-container>
</template>
<script>
export default{
  name: 'Header',
    data (){
         return{
     
     items: [
      {  title: 'Home', text: 'hh',  src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"},
       {  title1: 'Home', text1: 'hh',  src1:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"},
       {  title2: 'Home', text2: 'hh',  src2:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"},
     
     ]
   }

    }
}
</script>