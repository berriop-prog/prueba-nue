<template>
  <div id="app">
    <v-app>
      <Navbar />
      <Banner />
      <SectionA />
      <Card/>
      <Direction/>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SectionA from './components/SectionA';
import Card from './components/Card';
import Direction from './components/Direction';
import Footer  from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    HelloWorld,
    Banner,
    SectionA,
    Card,
    Direction,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
