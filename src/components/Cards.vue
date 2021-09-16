<template>
  <div class="card__container">
      <h3 class="card__header">Hallo!</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style>
.card__container {
  width: 100%;
  height: 100%;
  background: rgb(0, 102, 204, 1);
  font: small;
  border: outset 3px white;
}



.card__header {
  margin: 0.1rem;
  color: white;
  text-shadow: 1px 1px 4px black;
  background: rgb(0, 21, 59);
  border-radius: 30px;
}
</style>
