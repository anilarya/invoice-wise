<template>
  <v-app> 
    <v-main>
      <MainContainer/>
    </v-main>
  </v-app>
</template>

<script>
import MainContainer from './components/MainContainer';

export default {
  name: 'App',

  components: {
    MainContainer,
  },

  data: () => ({
    //
  }),
};
</script>
