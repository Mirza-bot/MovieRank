<template>
  <div class="search__box">
    <input class="search__bar" type="text" v-model="searchedMovie"/>
    <button class="search__button" @click="findMovie">
      <i class="fas fa-search"></i>
    </button>
    <div class="search__list">
      <ul>
        <li class="search__list__items"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["find-movie"],
  data() {
    return {
        searchedMovie: ""
    };
  },
  methods: {
      passSearched() {
          
      }
  },
};
</script>

<style>
.search__box {
  float: right;
  margin: -5px 20px 10px 0px;
  border: outset white 2px;
  padding: 1px 10px 10px 10px;
}

.search__bar {
  width: 15vw;
  min-width: 100px;
}

.search__list {
  margin-left: 1px;
  width: 15.5vw;
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
}

.search__list > ul > li {
  padding: 6px;
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
