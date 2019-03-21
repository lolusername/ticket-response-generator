<template>
  <div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <span class="reply">Reply:</span>
            <RegenerateModule
              :options="options"
              :selected="selected"
              @change-category="changeCategory"
              @regenerate="$emit('regenerate')"
            />
          </div>
          <div class="card-body response d-flex pb-0b flex-wrap ">
            <blockquote class="blockquote mb-0 d-flex px-3">
              <section class="" v-if="isVisual">
                <div class="row">
                  <p class="col-md-8 offset-md-2 text-center lead">
                    {{ randomQuoteObject.preImgText }}
                  </p>
                </div>
                <div class="row">
                  <img
                    :src="randomQuoteObject.imgUrl"
                    alt=""
                    class="img-fluid gif col-md-8 offset-md-2"
                  />
                </div>

                <p class="mt-3">{{ randomQuoteObject.postImgText }}</p>
              </section>
              <section class="" v-else v-html="randomQuoteObject">
             
              </section>
            </blockquote>
            <section
              class="row align-self-stretch d-flex align-items-end flex-fill px-3"
            >
              <p class="flex-fill mb-0">
                
                <button
                   class="btn btn-large btn-tweet flex-fill col"
                  
                >
           
                  <social-sharing url="http://italertgenerator.com"
                                title="IT ALERT GENERATOR"
                                description="Generate ticket responses you can forward (or not)"
                             
                                hashtags="PutInATicket"
                                twitter-user=""
                                inline-template>

                <span>
                   <network network="twitter">
                      <i class="fab fa-twitter-square"></i> Share
                    </network>
                </span>
                </social-sharing>
                </button>
              </p>
              <p class="flex-fill mb-0">
                <button v-clipboard:copy="selected" class="btn btn-copy col">
                  <i class="fas fa-copy"></i> Copy
                </button>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
import RegenerateModule from "./RegenerateModule.vue";

export default {
  name: "ResponseCard",
  props: ["isVisual", "randomQuoteObject", "options", "selected"],

  data() {
    return {
      localSelected: ""
    };
  },
  methods: {
    changeCategory(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  },
  components: {
    RegenerateModule
  }
};
</script>

<style lang="scss">
.card {
  .lead {
    font-size: 1.33rem;
    font-weight: 900;
    line-height: 1.125;
    font-family: "IBM Plex Mono", monospace;
  }
  font-family: "IBM Plex Sans", sans-serif;
}
.input-group > .input-group-prepend > .input-group-text,
.form-control {
  background: #efebe9;
  border-color: #efebe9;
}

.input-group > .custom-select:not(:first-child),
.input-group > .form-control:not(:first-child) {
  border-color: #efebe9;
}
.btn-tweet {
  background: #0064b7;
  color: #fff !important;
}
.btn-copy {
  background-color: #00be71;
  color: #fff;
}
button,
a {
  border-radius: 0 !important;
  display: block;
  flex-wrap: no-wrap;
}
.reply {
  font-size: 2rem;
}
image.gif {
  object-fit: contain;
}
.card-header,
.card {
  border-radius: 0;
}
.card-header {
  font-family: "IBM Plex Mono", monospace;
}
.response {
  min-height: 50vh;
}
</style>
