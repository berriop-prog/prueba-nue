<template>
  <v-carousel hide-delimiters cycle style="widht: 1200; height: 500px">
    <v-carousel-item style="height: 100%"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%201.jpg?alt=media&token=84413e81-b774-498f-b95b-06557ec789ad',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%202.jpg?alt=media&token=95b1ce3d-540d-45c5-b728-29062be5aed8',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%203.jpg?alt=media&token=46c2ae3e-2031-4935-bf29-0ee82bff1a34',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%204.jpg?alt=media&token=c1258eaa-f2d9-4720-a784-325ebf12f995',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%205.jpg?alt=media&token=ff493747-1c04-4e42-ac12-c9624330289e',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%206.jpg?alt=media&token=bcb9277d-f952-4b03-b491-2eeb409ac6d7',
        },
      ],
    };
  },
};
</script>
