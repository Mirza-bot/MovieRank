<template>
  <div class="card__container">
    <div class="card__header">
      <h2>{{ movieTitle }}</h2>
    </div>
    <div class="card__poster__container">
      <div class="delete__alert" v-show="deleteAlert">
        <h2>Are you sure that you want to delete this card?</h2>
        <div
          class="delete__alert__yes"
          @click="(deleteAlert = false), deleteMovie(movieData)"
        >
          YES
        </div>
        <div class="delete__alert__cancle" @click="deleteAlert = false">
          CANCLE
        </div>
      </div>
      <img class="card__poster__image" :src="moviePoster" alt="Movie Poster" />
    </div>
    <div class="vote__counter">
      <span>Votes: {{ voteCounter }}</span>
    </div>
    <div class="card__elements">
      <div class="vote__down" @click="defineCounter(-1)">
        <i class="far fa-thumbs-down"></i>
      </div>
      <div class="trash__button" @click="deleteAlert = true">
        <i class="fas fa-trash-alt"></i>
      </div>
      <div class="vote__up" @click="defineCounter(1)">
        <i class="far fa-thumbs-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie-title", "movie-poster", "delete-movie", "movie-data"],
  data() {
    return {
      voteCounter: 0,
      deleteAlert: false,
    };
  },
  methods: {
    defineCounter(value) {
      this.voteCounter = this.voteCounter + value;
      if (this.voteCounter < 0) this.voteCounter = 0;
    },
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
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: solid 2px white;
  min-height: 60px;
  padding-top: 2%;
}

.card__header > h2 {
  margin: -3px;
}

.card__poster__image {
  width: 100%;
}

div .card__poster__container {
  margin: 1rem 0 1rem 0;
  width: 40%;
  display: inline-block;
}

.card__elements {
  font-size: 4vh;
}

.vote__up {
  color: white;
  display: inline-block;
}

.vote__up :hover {
  cursor: pointer;
  color: greenyellow;
}

.vote__down {
  color: white;
  display: inline-block;
  margin: 2px;
}

.vote__down :hover {
  cursor: pointer;
  color: gold;
}

.trash__button {
  margin: 2rem 4rem 2rem 4rem;
  color: white;
  display: inline-block;
}

.trash__button:hover {
  cursor: pointer;
  color: red;
}

.vote__counter {
  background: linear-gradient(to right, grey 0.5%, white 5%, white 95%, grey 99.5%);
  margin: 0 -4px 0 -4px;
  font-size: x-large;
}

.delete__alert {
  background: white;
  padding: 1px;
  z-index: 1;
  position: absolute;
  max-width: 20vw;
  margin-left: -4rem;
  border-radius: 8px;
}

.delete__alert > div {
  margin: 3px;
  border-radius: 8px;
}

.delete__alert__cancle {
  background: rgb(0, 102, 204, 1);
  border: 3px outset rgb(0, 102, 204, 1);
}

.delete__alert__cancle:hover {
  cursor: pointer;
}

.delete__alert__yes {
  background: red;
  border: 3px outset red;
}

.delete__alert__yes:hover {
  cursor: pointer;
}
</style>
