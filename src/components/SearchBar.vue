<template>
  <div class="search__box">
    <input
      class="search__bar"
      type="text"
      placeholder="Search Title"
      v-model="searchedMovie"
      @keyup="passSearched(), findMovie(foundMovies), showSearchList = true"
      @click="displaySearchList"
    />
    <div v-show="displayBox" class="search__list">
      <ul>
        <li
          class="search__list__items"
          v-for="movie in foundMovies"
          :key="movie"
          @click="
            displayPreview(movie),
              displaySearchList(),
              (searchedMovie = '')
          "
        >
          {{ movie["Title"] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["findMovie", "foundMovies", "displayPreview"],
  data() {
    return {
      searchedMovie: "",
      showSearchList: true,
      chosenMovie: "",
    };
  },
  methods: {
    passSearched() {
      this.$emit("pass-searched", this.searchedMovie);
    },
    displaySearchList() {
        this.showSearchList = !this.showSearchList
    }
  },
  computed: {
    displayBox() {
      if (this.foundMovies[0] !== undefined && this.showSearchList === true)
        return true;
      else false;
    },
  },
};
</script>

<style>
.search__box {
  display: block;
  float: right;
  margin-top: -4rem;
  margin-right: 1rem;
  border: outset white 2px;
  padding: 4px 10px 10px 10px;
}

.search__bar {
  min-width: 20vw;
  width: 150px;
}

.search__list {
  margin-left: 1px;
  width: 20.34vw;
  min-width: 106px;
  min-height: 5vh;
  background: white;
  z-index: 2;
  position: absolute;
  font-family: "Lato", sans-serif;
}

.search__list > ul {
  padding-inline-start: 0px;
  list-style: none;
  color: black;
  font-size: small;
  text-align: start;
  overflow: auto;
  overflow-y: scroll;
}

.search__list > ul > li {
  padding: 0.9rem;
}

.search__list > ul > li:hover {
  background: rgb(0, 102, 204, 1);
  color: white;
  cursor: pointer;
}

.search__button {
  background: rgb(18, 78, 189);
  color: white;
  border: outset 2px white;
  text-shadow: -1px -1px 1px black;
}

.search__button:hover {
  background: rgb(10, 44, 105);
  cursor: pointer;
}

.search__button:active {
  border: inset 2px white;
}
</style>
