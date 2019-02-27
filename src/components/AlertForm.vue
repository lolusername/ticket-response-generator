<template>
  <div >
   
      <form class="container">
        <div class="row">
          <div class="col form-group">
            <input type="text" class="form-control" placeholder="Email">
          </div>
          <div class="col form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Reply Type</label>
              </div>
              <select v-model="selected" class="custom-select" id="reply-type">
                <option v-for="(option,key) in options" :key="key" :value="option.value" >
                {{ option.optionTitle }}
              </option>
              </select>
           
            </div>
          </div>
          
        </div>
        <div class="row text-center">
          <button  @click="genAlert"  type="button" class="btn btn-info btn-lg mx-auto my-5">GENERATE REPLY</button>
        
        </div>
      </form>
      <div id="response-card-container" class="reply-wrapper d-flex align-items-center" :class="{'vh-100 py-5 mt-2':submitted}">
        <section class="container">
          <ResponseCard @regenerate="genAlert" :randomQuoteObject="randomQuoteObject" :isVisual="isVisual" :options="options" :selected.sync="selected" v-if="submitted" />
          
     
        </section>
       
      </div>
  </div>
</template>

<script>

import ResponseCard from "./ResponseCard.vue";



export default {
  name: "AlertForm",
  components: {
    ResponseCard
  },
  data() {
    return {
      randomQuoteObject:{},
      submitted:false,
      selected:"visual",
      isVisual:false,
      options: [
        {optionTitle:'Snarky/Humorous', value:"snarky"},
        {optionTitle:'Visual', value:"visual"},
        {optionTitle:'Quotable Quotes', value:"quotes"}
      ],
      quotes: {
          snarky:[
            "We love you for not tweeting this at us in all caps with terrible hashtags. Social media rage is never the answer. We will review your request and get back to you as soon as we can. In the meantime, you stay classy.",
            "I don’t know if anyone’s ever told you this but that monitor glow really brings out the color of your eyes. Have you ever thought about a career in modeling for stock photos? Might be a profitable side hustle. While we take a look at this issue, you should think it over.",
            "Your cat’s name is no longer a safe password after your 387th instagram post mentioning it. Perhaps it might be time for another? While we review your ticket, you may want to think about changing it. And while you’re at it, maybe rename that file called passwords that we noticed on your desktop.",
            "Submitting a Support ticket is the adult equivalent of raising your hand in class. But, don’t worry, we don’t give too much homework and we’re not into time-outs. In all seriousness, thanks for reaching out. Sorry you’re running into some difficulties. We’ll send you an update (and maybe even a gold star) as soon as we can.",
            "Ticket submitted. Congratulations on a job done. You should treat yourself to something from the office vending machine after that one. We’ll take a look and reply back with an update as soon we have one. In the meantime, you keep those productive vibes going. You’re on a roll!"
          ],
          visual: [
            {
              imgUrl:require('../assets/visual1.gif'),
              preImgText: "We saw the way you played that keyboard. Want to jam with our band next week?",
              postImgText: "But seriously, thanks for your request. And don’t you fret. You’ll be making music again with that keyboard in no time. We will get back to you with an update as soon as we can."
            },
            {
              imgUrl: require('../assets/thinker.gif'),
              preImgText: "Can’t learn what you don’t ask!",
              postImgText: "We’re here for you. No, really; we’ll take a look in this issue right away. In the meantime, *virtual high-five*. You rock. We’ll send you an update as soon as we can."
            }
          ]
        }
    }
  },
  methods: {
    genAlert() {
      if (this.selected) {
        this.submitted = true;
        var quote = "";
        var selectedCategory = this.selected;

        if (selectedCategory == "visual") {
          this.isVisual = true;
        } else this.isVisual = false;

        var quoteIndex =  Math.floor(this.quotes[selectedCategory].length * Math.random());
        quote = this.quotes[selectedCategory][quoteIndex];  
        this.randomQuoteObject = quote;
        
        this.$nextTick(function () {
          this.scrollTo()// => 'updated'
        });
          
    
        
      }
    },
    scrollTo() {
      var getElementY = function(query) {
          return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
         
        }

        var doScrolling= function(element, duration) {
          var startingY = window.pageYOffset
          var elementY = getElementY(element)
          // If element is close to page's bottom then window will scroll only to some position above the element.
          var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
          var diff = targetY - startingY
          // Easing function: easeInOutCubic
          // From: https://gist.github.com/gre/1650294
          var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
          var start

          if (!diff) return

          // Bootstrap our animation - it will get called right before next frame shall be rendered.
          window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp
            // Elapsed miliseconds since start of scrolling.
            var time = timestamp - start
            // Get percent of completion in range [0, 1].
            var percent = Math.min(time / duration, 1)
            // Apply the easing.
            // It can cause bad-looking slow frames in browser performance tool, so be careful.
            percent = easing(percent)

            window.scrollTo(0, startingY + diff * percent)

            // Proceed with animation as long as we wanted it to.
            if (time < duration) {
              window.requestAnimationFrame(step)
            }
          })
        }
        doScrolling('#response-card-container',500)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.vh-100 {
  height:100vh;
}
.reply-wrapper {
  background:#0064b7;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
