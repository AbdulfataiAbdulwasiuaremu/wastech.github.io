<template>
<v-content>
 <div
    v-ripple
    class="text-center elevation-20 pa-2 headline ma-5"
  >
    About

  </div>
  <v-timeline>
    <v-timeline-item
     
      
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="/assets/aremu.svg">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>integrity</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">integrity</v-card-title>
        <v-card-text>We embrace the highest standards of ethical behaviour in every aspect of our business to yield a company that is trusted by its clients & stakeholders.</v-card-text>
      </v-card>
      
    </v-timeline-item>

    <v-timeline-item
     
      
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Excellence</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Excellence</v-card-title>
        <v-card-text>Our commitment to professional excellence ensures that our clients receive the highest quality service.</v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
     
      
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Tus eu perfecto</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Lorem ipsum</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>
    <v-timeline-item
     
      
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Communication</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Communication</v-card-title>
        <v-card-text>We ensure that we communicate openly, accurately and in a timely manner with our clients and stakeholders.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  <v-card class="elevation-15">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
  </v-content>
</template>