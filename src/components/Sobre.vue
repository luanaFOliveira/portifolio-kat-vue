<template>
    <div class="about" :style="{ marginLeft: isSidebarOpen ? '250px' : '0' }">
        <h1 class="main-title">Sobre</h1>
        <div class="content">
            <img :src="image" class="profile-image" />
            <div class="text">
                <h1>info kaka</h1>
           </div>  
        </div>
    </div>
</template>
    
    
<script>
    import profileImage from "@/assets/images/profile.jpg";
  
    export default {
    name: 'SobreComponent',
    props: {
        isSidebarOpen: Boolean
    },
    data() {
      return {
        image: profileImage
        
      };
    }
  }; 
</script>
      
<style>
.about {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column; 
    text-align: center; 
    padding: 2rem;
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
      