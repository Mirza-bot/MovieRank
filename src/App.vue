<template>
  <div class="navbar">
    <nav>
      <ul class="navbar__links">
        <li>
          <a class="nav__button" href="#">MovieVote</a>
          <div class="search__bar">
            <input type="text" />
            <button class="search__button">Search Movie</button>
          </div>
        </li>
      </ul>
    </nav>
  </div>
  <div class="grid-container">
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
    <card-section></card-section>
  </div>
</template>

<script>
import Cards from "./components/Cards.vue";
export default {
  components: { Cards },
  data() {
    return {};
  },
};
</script>

<style>
.grid-container {
  display: grid;
  position: relative;
  text-align: center;
  justify-content: center;
  grid-template-columns: 20vw 20vw 20vw;
  grid-auto-rows: minmax(30vh, auto);
  grid-gap: 20px;
  margin-top: 10rem;
}

.navbar {
  background: linear-gradient(to left, rgb(0, 21, 59), rgb(0, 102, 204, 1));
  color: white;
  text-shadow: 1px 1px 4px black;
  top: 0;
  position: fixed;
  width: 100%;
  font-size: large;
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

.search__bar {
  float: right;
  margin: -5px 20px 10px 0px;
  border: outset white 2px;
  padding: 1px 10px 10px 10px;
}

.search__button {
  background: rgb(18, 78, 189);
  color: white;
  border: outset 2px white;
  text-shadow: -1px -1px 1px black;
}

.search__button:hover {
  background: gold;
  color: rgba(0, 0, 40, 0.6);
  cursor: pointer;
}
</style>
