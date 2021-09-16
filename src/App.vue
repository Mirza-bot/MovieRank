<template>
  <div class="navbar">
    <nav>
      <ul class="navbar__links">
        <li>
          <a class="nav__button" href="#">MovieRank</a>
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
  position: absolute;
  justify-content: center;
  text-align: center;
  grid-template-columns: 200px 250px;
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 20px;
  margin-top: 100px;
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
</style>
