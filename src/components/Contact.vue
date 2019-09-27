<template>
<v-responsive>
 <div
    v-ripple
    class="text-center elevation-20 pa-2 headline ma-5 align-self-sm-center
" 
  >
    ContactUs

  </div>
 <v-flex xs10 sm12 offset-sm3>
 <v-row no-gutters >
      <v-col
        cols="12"
        sm="4"
        class="ma-5"
      >
        <v-card
          class="pa-2 text-center"
          outlined
          tile
        >
         <v-img
      src="https://images.pexels.com/photos/357426/pexels-photo-357426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      
      aspect-ratio="1"
      conver
      class="grey lighten-2"
      max-width="500"
      max-height="300"
    ></v-img>

  
        </v-card>
      </v-col>

       <v-col
        cols="12"
        sm="4"
        class="ml-5 ma-5 "
      >
        <v-card
          class="pa-5 "
          outlined
          tile
        >
        
          <v-text-field
            
            label="name"
             :error-messages="nameErrors"
             v-model="name"
             
              required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
            filled
            shaped
          ></v-text-field>

           <v-text-field
            v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
            filled
            shaped
          ></v-text-field>
          <div class="input-group-addon" v-text="(max - text.length)"></div>
    
           <v-textarea
      background-color="grey lighten-2"
      shaped
      filled
      label="text"
      v-model="text"
        clearable
      clear-icon="cancel"
       counter
       
       :maxlength="max"
       
        required
    ></v-textarea>
    
        <div class="text-center">
    <v-btn  @click="submit">submit</v-btn>
    </div>
    
        </v-card>
      </v-col>
      
    </v-row>
 </v-flex>
</v-responsive>
</template>
<script>
import { required, minLength,email } from 'vuelidate/lib/validators'
export default{
  data(){
  return {
    name:'',
    email:'',
    text: '',
    max: 350
   
  }

  },
  validations: {
    name: { required, minLength: minLength(5)},
    email: { required,email },
    text: { required }
  },
  computed:{
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
     !this.$v.name.minLength && errors.push('Name must be more than 5 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors;
    },
    emailErrors () {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail')
     !this.$v.email.required && errors.push('E-mail is required')
      return errors;
    }
  },
  
      methods: {
    submit () {
      this.$v.$touch()
    },
  
      }

}
</script>