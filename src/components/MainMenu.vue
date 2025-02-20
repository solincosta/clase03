<template>
  <div>
    <menu class="menu">
        <h1>LOGO</h1>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>BUY</li>
        <li>SERVICES</li>
    </menu>
  </div>
</template>

<script>
export default {
    name: 'MainMenu'
}
</script>

<style scoped>
menu{
    display: flex;
    justify-content: space-between;
    height: 75px;
    background-color: green;
    color: #FFF;
}
</style>