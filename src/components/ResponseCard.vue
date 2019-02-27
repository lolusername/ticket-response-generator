<template>
  <div>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="reply">Reply:</span>
                    <RegenerateModule :options="options" :selected="selected" @change-category="changeCategory" @regenerate="$emit('regenerate')"/>   
                </div>
                <div class="card-body response d-flex pb-0b flex-wrap ">
                    <blockquote class="blockquote mb-0 d-flex row px-3">
                        <section class="" v-if="isVisual">
                            <p>{{randomQuoteObject.preImgText}}</p>
                            <img :src="randomQuoteObject.imgUrl" alt="" class="w-100 gif col-md-8 offset-md-2">
                            <p class="mt-3">{{randomQuoteObject.postImgText}}</p>
                        </section>
                        <section class="" v-else>
                            {{randomQuoteObject}}
                        </section>
                       
                       
            
               
                    </blockquote>
                     <section class="row align-self-stretch d-flex align-items-end flex-fill px-3">
                            <p class="flex-fill mb-0">
                                    <a class="btn btn-large btn-info flex-fill col"
                                        href="https://twitter.com/intent/tweet?text=Hello%20world">
                                        Tweet
                                    </a>
                                </p>
                            <p class="flex-fill mb-0">
                                <button v-clipboard:copy="selected" class="btn btn-primary col">copy</button>
                            </p>

                        </section>
                    
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
image.gif {
    object-fit: contain;
}
.card-header, .card{
    border-radius: 0;
}
.response {
    min-height:50vh
}
</style>