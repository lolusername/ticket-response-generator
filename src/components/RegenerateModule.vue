<template>
<div class="text-right">
    
     <select @change="changeCategory"  v-model="localSelected" class="">
             <option disabled value="">Change Reply Type</option>
          <option v-for="(option,key) in options" :key="key" :value="option.value" >
                {{ option.optionTitle }}
         </option>
      
        
    </select>
     <button @click="$emit('regenerate')" class="btn btn-regen ml-2" data-toggle="tooltip"  title="Generate a new reply"><i class="fas fa-undo"></i></button>
</div>
   
</template>
<script>
    export default {
        name: "RegenerateModule",
        data() {
            return {
                localSelected:""
            }
        },
        props: ["options", "selected"],
        methods: {
            changeCategory() {
                this.$emit("change-category", this.localSelected);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-regen {
        i {
            color: #fff !important;
        }

          border-radius:0;
          background: #00BE71;
    border-radius: 0;
    
    margin-bottom: 5px;
    border-radius:100%;
    }
    select {
        appearance: none;
        border-radius: 0px;
        font-size: 11px;
    
        border-width: 0;
        color: #0064b7;
        font-weight: 700;
    }
  
</style>


