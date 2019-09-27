<template>
  <v-footer
    dark
    padless
    class="blue darken-3 ma-19"
    
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue darken-3 ">
        <strong class="subheading blue darken-3">Get connected with us on social networks!</strong>

        <div class="flex-grow-1"></div>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="blue darken-3 justify-center">
        {{ new Date().getFullYear() }} — <strong>Aremu</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>