<template>
    <div class="lightbox" @click.self="closeLightbox">
        <img :src="photoUrl(photo.titulo)">
        <div class="lightbox-info">
          
        </div>
    
      </div>
</template>
  
<script>
  
import photos from '@/assets/images/photos.json';

export default {
  name: 'PhotoComponent',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
    closeLightbox() {
        this.$router.push('/');
    },
  },
};
</script>

<style>
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
}

.lightbox img {
    margin: auto;
    width: 100%;
    grid-column-start: 2;
}

.lightbox-info {
    margin: auto 2rem auto 0;
}

.lightbox-info-inner {
    background-color: #FFFFFF;
    display: inline-block;
    padding: 2rem;
}
</style>
