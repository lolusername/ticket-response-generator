<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid d-flex align-items-center">
      <div class="container  align-items-center">
        <div class="row ">
          <div class="col-md-6">
            <h1 class="display-4">SUPPORT TICKET RESPONSE GENERATOR</h1>
            <p class="lead">
              Use our tool to help you manage tickets and bugs and the people
              who report them!
            </p>
          </div>
          <div class="col-md-6"></div>
          <img class="w-100 computer" src="./assets/comp.png" alt="" />
        </div>
      </div>
    </div>

    <AlertForm />
  </div>
</template>

<script>
import AlertForm from "./components/AlertForm.vue";

export default {
  name: "app",
  components: {
    AlertForm
  }
};
</script>

<style lang="scss">
body {
  color: #263238;
}

.jumbotron {
  @media screen and (min-width: 576px) {
    font-family: "IBM Plex Mono", monospace;
    height: 50vh;
  }
  .display-4 {
    font-size: 3rem;
    font-weight: 900;
  }
  background: url(./assets/header-detail.png), #efebe9;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;

  background-size: 50%;
}
img.computer {
  position: absolute;
  width: 450px !important;
  right: 0;
  top: 10%;
  @media(max-width: 768px) {
    display:none;
  }
}
</style>
