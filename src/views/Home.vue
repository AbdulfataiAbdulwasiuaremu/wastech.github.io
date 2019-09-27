<template>



   
   

    <v-content>
     
       <Navbar/>
       <About/>
      <Service/>
      <MyWork/>
      <Skill/>
      <Contact/>
      <Footer/>
     
    </v-content>
</template>

<script>
import Navbar from '../components/Navbar';
import About from '../views/About';
import Service from '../components/Service';

import MyWork from '../components/MyWork';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



export default {
  
  components: {
    Navbar,
     About,
   Service,
   
    MyWork,
    Skill,
     Contact,
    Footer
  
    
  }
 
}
</script>
