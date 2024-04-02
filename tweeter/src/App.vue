<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

fetch('http://back:7410/tweets')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    return response.json();
  })
  .then(data => {
    // Traitement des données récupérées
    console.log(data);
  })
  .catch(error => {
    console.error('Erreur:', error);
  });

</script>

<template>
  <header>


    <div class="wrapper">
     

      <nav>
        <RouterLink to="/connexion">connexion</RouterLink>
        <RouterLink to="/inscription">inscription</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />


</template>

<style scoped>

</style>
