<template>
<div class="home" :style="{ marginLeft: isSidebarOpen ? '250px' : '0' }">
    <h1 class="main-title">Portifolio Katiany Echevarria</h1>
    <div>
      <Gallery/>
      <Photo/>
    </div>
</div>
</template>


<script>
  import Gallery from "@/components/Gallery";
  import Photo from "@/components/Photo";

  export default {
    name: 'HomeComponent',
    components: {
      Gallery,
      Photo
    },
    props: {
        isSidebarOpen: Boolean
    },
    
  };
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.home {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column; 
    text-align: center; 
}

.main-title {
    font-family: 'Roboto', sans-serif; 
    font-size: 4em; 
    color: #333; 
}
.content {
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    margin-top: 20px; 
}
  
.profile-image {
    border-radius: 50%;
    width: 500px;
    margin-left: 50px;
}
  
.text {
    text-align: left; 
    margin-left: 20px;
}
</style>
  