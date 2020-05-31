<template>
  <div id="app">
    <v-app>
      <Navbar />
      <Banner />
      <SectionA />
      <Card />
      <Button />
      <Direction />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SectionA from './components/SectionA';
import Card from './components/Card';
import Button from './components/Button';
import Direction from './components/Direction';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    HelloWorld,
    Banner,
    SectionA,
    Card,
    Button,
    Direction,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
</style>
