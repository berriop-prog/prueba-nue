<template>
  <div style="background-color: #2A2D30; width: 100%; heigth: 332px">
    <v-row class="mb-6" no-gutters>
      <v-col sm="5" md="6">
        <v-card class="pa-2" outlined tile style="background-color: #2A2D30; color: white; border:none">
          <p style="font-size: 12px; margin: 60px 0 0 150px; border-top: 2px solid #3A899A; padding-top: 50px">NEUMOMED</p>
          <h2 style="font-size: 50px; margin: 25px 0 0 150px">Neumomed IPS</h2>
          <p style="font-size: 19px; margin: 60px 0 0 150px">
            ofrece una atención integral a pacientes con enfermedades
            respiratorias y trastornos del sueño.
          </p>
        </v-card>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <v-card class="pa-2" outlined tile style="background-color: #2A2D30; border:none">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/_MG_5091.JPG?alt=media&token=119c1a90-cb68-41ae-abd9-efec0d64c15f"
            style="height: 312px; width: 453px; border-radius: 220px 30px 200px 30px; margin: 50px"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SectionA',
  parts: {
    subtitle: 'NEUMOMED',
    title: 'Neumomed IPS',
    text:
      'ofrece una atención integral a pacientes con enfermedades respiratorias y trastornos del sueño.',
  },
};
</script>
