<template>
  <div class="card__container">
    <h3 class="card__header">{{ movieTitle }}</h3>
    <div class="card__poster__container">
      <img class="card__poster__image" :src="moviePoster" alt="Movie Poster" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie-title", "movie-poster"],
  data() {
    return {};
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

.card__poster__image {
  width: 100%;
}

div .card__poster__container {
  margin-top: 1rem;
  width: 40%;
  display: inline-block;
}
</style>
