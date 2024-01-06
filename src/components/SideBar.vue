
<template>
  <div>
    <button v-if="!sidebarWidth" class="open-btn" @click="openNav"> 
        <span class="menu-icon">&#9776;</span>
    </button>
    <div class="sidenav" :style="{ width: isSidebarOpen ? sidebarWidth + 'px' : '0' }">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <a href="/">Home</a>
        <div class="dropdown">
            <a href="#">Projetos <span class="dropdown-icon">&#9660;</span></a>
            <div class="dropdown-content">
                <a href="#">Projeto 1</a>
                <a href="#">Projeto 2</a>
                <a href="#">Projeto 3</a>
            </div>
        </div>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarComponent',
  props: {
    isSidebarOpen: Boolean,
  },
  data() {
    return {
      sidebarWidth: 250,
    };
  },
  methods: {
    openNav() {
      this.sidebarWidth = 250;
      this.$emit('toggleSidebar', true); 
    },
    closeNav() {
      if (this.isSidebarOpen) {
        this.sidebarWidth = 0;
        this.$emit('toggleSidebar', false); 
      }
    },
  },
};
</script>

<style>
.sidenav {
    height: 100%; 
    position: fixed;
    z-index: 1; 
    top: 0; 
    left: 0;
    background-color: #111; 
    overflow-x: hidden; 
    padding-top: 20px;
}
  
.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
}
  
.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

.open-btn {
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: #333;
    border: none;
    border-radius: 30%;
    padding: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
  
.menu-icon {
    font-size: 35px;
    color: #fff;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #111;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #818181;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>
