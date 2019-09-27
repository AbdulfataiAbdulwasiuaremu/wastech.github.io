<template>
<v-content >
 <v-navigation-drawer app v-model="sideNav" temporary  height="auto">
 <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Abdulfatai</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in menuItems" :key="item.title" router :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  
  </v-navigation-drawer>
  <v-toolbar dark class="primary" app>
   <v-app-bar-nav-icon
   @click="sideNav = !sideNav"
  class="hidden-sm-and-up" > </v-app-bar-nav-icon>
  <v-toolbar-title>
   <router-link to="/" tag="span" style="cursor: pointer">Logo</router-link>
   </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-xs-only">
  <v-btn text v-for="item in menuItems" :key="item.title" class="primary" router :to="item.link">
  <v-icon left  >{{ item.icon }} </v-icon>
  {{item.title}}
  </v-btn>
  </v-toolbar-items>
  </v-toolbar>
  </v-content>
</template>
<script>
export default{
  name: 'Header',
    data (){
         return{
     sideNav: false,
     menuItems: [
      { icon: 'home', title: 'Home', link: '/'},
      { icon: 'folder', title: 'Portfolio', link: '/portfolio'},
      { icon: 'person', title: 'Aboutus', link: '/about'},
      { icon: 'email', title: 'Contactus', link: '/contact'},
      { icon: 'speaker', title: 'Blog', link: '/blog'},

     ]
   }

    }
}
</script>