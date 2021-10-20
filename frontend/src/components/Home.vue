<template  >
    <div >
        <h3 v-if="user"> hello, you are in your page </h3>
        <h3 v-if="!user"> you are not login </h3>

         
    </div>
</template>
<script>


export default {
    name: 'home',
    props: ['user'],
  
}
</script>
<style>
    
</style>