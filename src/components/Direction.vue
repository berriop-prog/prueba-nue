<template>
  <div    
    style="height:330px; margin-bottom: 20px; width: 100%; background-color: #3A899A; color: white">
    <v-row no-gutters style="width:100%">
      <v-col md="3" style="padding-left: 29px; padding-top: 30px">
        <v-card class="pa-2 mt-5" outlined tile style="background-color: #3A899A; color: white; border: none">
          <h3 style="font-size: 25px; margin-bottom: 15px">Medellín</h3>
          <p style="font-size: 18px">Calle 19A # 44-25 Local 206 Edificio Salud y Servicios.</p>
        </v-card>
      </v-col>
      <v-col md="3" style="padding-top: 30px">
        <v-card class="pa-2 mt-5" outlined tile style="background-color: #3A899A; color: white; border:none">
           <h3 style="font-size: 25px; margin-bottom: 15px">Rionegro</h3>
          <p style="font-size: 18px">Carrera 55 A #35- 2027, piso 4 Cs 402-404  Torre 2, City Médica.</p>
        </v-card>
      </v-col>
      <v-col md="6" style="padding: 10px">
        <v-card outlined tile style="background-color: #3A899A; color: white; border:none">
         <iframe height="310px" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
         src="https://maps.google.com/maps?q=Neumomed&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" aria-label="Neumomed"></iframe>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>
