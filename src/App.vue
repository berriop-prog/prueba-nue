<template>
  <div id="app">
    <v-app>
      <Navbar />
      <Banner />
      <SectionA />
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SectionA from './components/SectionA';

export default {
  name: 'App',
  components: {
    Navbar,
    HelloWorld,
    Banner,
    SectionA,
  },

  data: () => ({
    //
  }),
};
</script>
