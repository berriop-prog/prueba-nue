<template>
  <div
    style="background-color: #2A2D30; width: 100%; heigth: 332px; display: flex; flex-direction: row"
  >
    <div style="width:50%; margin: 15px 50px; color: white;">
      <div style="margin: 50px 80px; border-top: 2px solid #3A899A">
        <p style="font-size: 12px; margin-top:50px">NEUMOMED</p>
        <h2 style="font-size: 50px">Neumomed IPS</h2>
        <p style="font-size: 19px">
          ofrece una atención integral a pacientes con enfermedades
          respiratorias y trastornos del sueño.
        </p>
      </div>
    </div>
    <div style="width:50%">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/_MG_5091.JPG?alt=media&token=119c1a90-cb68-41ae-abd9-efec0d64c15f"
        style="height: 312px; width: 453px; border-radius: 220px 30px 200px 30px; margin: 50px"
      />
    </div>
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
