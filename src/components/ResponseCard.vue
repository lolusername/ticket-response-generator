<template>
  <div>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="reply">Reply:</span>
                    <RegenerateModule :options="options" :selected="selected" @change-category="changeCategory" @regenerate="$emit('regenerate')"/>   
                </div>
                <div class="card-body response ">
                    <blockquote class="blockquote mb-0 d-flex">
                        <section v-if="isVisual">
                            <p>{{randomQuoteObject.preImgText}}</p>
                            <img :src="randomQuoteObject.imgUrl" alt="" class="w-100 col-md-8 offset-md-2">
                            <p class="mt-3">{{randomQuoteObject.postImgText}}</p>
                        </section>
                        <section v-else>
                            {{randomQuoteObject}}
                        </section>
                        <div class=" align-self-baseline engage-btns d-flex justify-content-between">
                            <p>
                            <a class="btn btn-large btn-info col"
                            href="https://twitter.com/intent/tweet?text=Hello%20world">
                            Tweet</a>
                            </p>
                             <p>
                            <button v-clipboard:copy="selected" class="btn btn-primary">copy</button>
                        </p>

                        </div>
                       
                        <footer v-if="false" class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
               
                    </blockquote>
                    
                </div>
            </div>
        </div>
    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
    import RegenerateModule from "./RegenerateModule.vue";


    export default {
    name: "ResponseCard",
    props: ["isVisual","randomQuoteObject","options", "selected"],
  
    data() {
        return {
            localSelected:""
        }
    },
    methods: {
        changeCategory(newSelected) {
            this.$emit('update:selected',newSelected)
        }
    },
    components: {
      RegenerateModule
    }
    
    };
</script>

<style  lang="scss">
button,a {
    border-radius: 0 !important;
    display: block;
    flex-wrap: no-wrap;
}
.reply {
    font-size:2rem;
}

.card-header, .card{
    border-radius: 0;
}
.response {
    min-height:50vh
}
</style>