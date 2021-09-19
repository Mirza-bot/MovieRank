<template>
  <div class="navbar">
    <nav>
      <ul class="navbar__links">
        <li>
          <a class="nav__button" href="#">MovieVote</a>
          <search-bar
            :find-movie="findMovie"
            :found-movies="foundMovies"
            @pass-searched="recieveSearched"
          ></search-bar>
        </li>
      </ul>
    </nav>
  </div>
  <div class="preview__container" v-show="preview"></div>
  <div class="grid-container">
    <card-section v-for="movie in selectedMovies" :key="movie"></card-section>
  </div>
</template>

<script>
import Cards from "./components/Cards.vue";
import SearchBar from "./components/SearchBar.vue";
export default {
  components: { Cards, SearchBar },
  data() {
    return {
      preview: false,
      foundMovies: "",
      searchedMovie: "",
      selectedMovies: [],
    };
  },
  computed: {},
  methods: {
    displayPreview() {
      this.preview = !this.preview;
    },

    fetchTitle(value, target) {
      this.$axios
        .get("http://www.omdbapi.com/?s=" + value + "&apikey=99947005")
        .then(function (response) {
          if (response.data["Response"] === "True") {
            response.data["Search"].forEach((element) => {
              target.push(element);
            });
          }
        });
    },
    recieveSearched(recievedMovie) {
      this.searchedMovie = recievedMovie;
    },

    findMovie() {
      this.foundMovies = [];
      this.fetchTitle(this.searchedMovie, this.foundMovies);
      console.log(this.foundMovies);
    },
  },
};
</script>

<style>
.grid-container {
  display: grid;
  position: relative;
  text-align: center;
  justify-content: center;
  grid-template-columns: 30vw 30vw 30vw;
  grid-auto-rows: minmax(40vh, auto);
  grid-auto-columns: minmax(270px, auto);
  grid-gap: 20px;
  margin-top: 10rem;
}

@media only screen and (max-width: 550px) {
  .grid-container {
    grid-template-columns: 80vw;
    grid-template-rows: 70vh;
    font-size: x-large;
  }
}

.navbar {
  background: linear-gradient(to left, rgb(0, 21, 59), rgb(0, 102, 204, 1));
  color: white;
  text-shadow: 1px 1px 4px black;
  top: 0;
  position: fixed;
  width: 100%;
  font-size: large;
  font-style: bold;
  border-bottom: 3px solid white;
  z-index: 1;
}
.nav__button {
  text-decoration: none;
  margin-bottom: 20px;
}
.navbar__links {
  list-style-type: none;
}
a:visited {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
  color: gold;
}
a:focus {
  text-decoration: none;
  color: gold;
}
a:hover,
a:active {
  text-decoration: none;
  color: gold;
}

.preview__container {
  transform: translate(20vw, 20vh);
  max-width: 60vw;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  border: inset white 2px;
  border-bottom: outset 2px silver;
  border-radius: 10px;
}
</style>
