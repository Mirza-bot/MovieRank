<template>
  <div class="navbar">
    <nav>
      <ul class="navbar__links">
        <li>
          <a class="nav__button" href="#"><h1>MovieVote</h1></a>
          <search-bar
            :find-movie="findMovie"
            :found-movies="foundMovies"
            @pass-searched="recieveSearched"
            :display-preview="displayPreview"
          ></search-bar>
        </li>
      </ul>
    </nav>
  </div>
  <div class="preview__container" v-show="preview">
    <h2>{{ previewedMovie["Title"] }}</h2>
    <div class="poster__container">
      <img
        :src="previewedMovie['Poster']"
        class="movie__poster"
        alt="Movieposter"
      />
    </div>
    <div class="title__info">
      <h3>Year:</h3>
      <h2>{{ previewedMovie["Year"] }}</h2>
      <h3>Type:</h3>
      <h2>{{ previewedMovie["Type"] }}</h2>
      <div class="preview_add_button" @click="addToCard(previewedMovie)">
        Add to Votes
      </div>
      <div class="preview_cancle_button" @click="preview = false">Cancle</div>
    </div>
  </div>
  <div class="grid-container">
    <card-section
      v-for="movie in selectedMovies"
      :key="movie"
      :movie-title="movie['Title']"
      :movie-poster="movie['Poster']"
    ></card-section>
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
      previewedMovie: "",
      foundMovies: "",
      searchedMovie: "",
      selectedMovies: [],
    };
  },
  computed: {},
  methods: {
    displayPreview(target) {
      this.preview = true;
      this.previewedMovie = target;
    },

    addToCard(movie) {
      console.log(movie)
      this.selectedMovies.push(movie);
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
  grid-auto-rows: minmax(50vh, auto);
  grid-auto-columns: minmax(270px, auto);
  grid-gap: 20px;
  margin-top: 30vh;
}

@media only screen and (max-width: 770px) {
  .grid-container {
    grid-template-columns: 80vw;
    grid-template-rows: 70vh;
    font-size: x-large;
  }
  div .preview__container {
    transform: translate(5vw, 15vh);
    min-height: 60vh;
    min-width: 90vw;
  }
  div .poster__container {
    width: 50%;
  }

  div.poster__container {
    width: 40%;
    margin: 1rem;
  }

  .search__list {
    width: 35%;
    overflow: auto;
    overflow-y: scroll;
  }
}

.navbar {
  background: linear-gradient(to left, rgb(0, 21, 59), rgb(0, 102, 204));
  color: white;
  text-shadow: 1px 1px 4px black;
  top: 0;
  position: fixed;
  width: 100%;
  height: 10vh;
  font-size: large;
  font-style: bold;
  border-bottom: 3px solid white;
  z-index: 1;
}

.navbar > ul > li {
  height: 100%;
}
.nav__button {
  text-decoration: none;
}
ul.navbar__links {
  list-style-type: none;
  padding-left: 1rem;
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
  transform: translate(30vw, 20vh);
  max-width: 40vw;
  min-height: 50vh;
  background: white;
  border: inset white 2px;
  border-bottom: outset 2px silver;
  border-radius: 10px;
}

.preview__container > h2 {
  margin-left: 1rem;
}

.preview__container > h3 {
  margin-left: 1rem;
}

.movie__poster {
  width: 100%;
  max-width: 250px;
}

.poster__container {
  width: 40%;
  margin: 2rem;
}

.title__info {
  position: absolute;
  top: 4rem;
  right: 3rem;
  display: inline-block;
  font-family: "Lato", sans-serif;
  width: 30%;
}

.preview_add_button {
  position: absolute;
  margin-top: 1rem;
  font-style: bold;
  color: white;
  background: linear-gradient(35deg, rgb(0, 21, 59), rgb(0, 102, 204));
  border: outset 6px rgb(0, 102, 204);
  border-radius: 30px;
  text-align: center;
  width: 100%;
}

.preview_add_button:hover {
  cursor: pointer;
  background: linear-gradient(35deg, rgb(5, 40, 105), rgb(16, 123, 230));
}

.preview_cancle_button {
  position: absolute;
  margin-top: 3rem;
  font-style: bold;
  color: white;
  background: linear-gradient(35deg, rgb(0, 21, 59), rgb(0, 102, 204));
  border: outset 6px rgb(0, 102, 204);
  border-radius: 30px;
  text-align: center;
  width: 100%;
}
</style>
