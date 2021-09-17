<template>
  <div class="card__container">
    <h5 class="card__header">{{ movieTitle }}</h5>
  </div>
</template>

<script>
export default {
  props: [
      'movieTitle'
  ],
  data() {
    return {
      
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
  border-radius: 7px;
}

.card__header {
  color: white;
  text-shadow: 1px 1px 4px black;
  background: rgb(0, 21, 59);
  margin: 0.01rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  min-height: 15%;
  padding-top: 2%;
}
</style>
