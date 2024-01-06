
<template>
    <nav id="vue" class="navbar bg-dark">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="menu-item"><router-link to="/">Home</router-link></li>
                <li class="menu-item"><router-link to="/hello">Hello</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
  
}
</script>

<style>
nav {
    width: 100%;
    background-color: #0d0d0e;
    display: flex;
    align-items: center;
    justify-content: center;
}
nav .menu-item {
    color: #FFF;
    padding: 25px 40px;
    position: relative;
    text-align: center;
    border-bottom: 5px solid transparent;
    display: flex;
    transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
    background-color: #0d0d0e;
    border-bottom-color: #bb3030;
}
nav .menu-item a {
    color: inherit;
    text-decoration: none;
}

</style>
