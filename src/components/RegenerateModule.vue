<template>
  <div class="text-right">
    <button
      @click="$emit('regenerate')"
      class="btn btn-regen ml-2"
      data-toggle="tooltip"
      title="Generate a new reply"
    >
      <i class="fas fa-undo"></i>
    </button>
    <select @change="changeCategory" v-model="localSelected" class>
      <option disabled value>Change Reply Type</option>
      <option
        v-for="(option, key) in options"
        :key="key"
        :value="option.value"
      >{{ option.optionTitle }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "RegenerateModule",
  data() {
    return {
      localSelected: ""
    };
  },
  props: ["options", "selected"],
  methods: {
    changeCategory() {
      this.$emit("change-category", this.localSelected);
    }
  }
};
</script>

<style lang="scss" scoped>

.btn-regen {
  i {
    color: #fff !important;
  }
  &:hover {
    background: #00965a;
  }
  border-radius: 0;
  background: #00be71;
  border-radius: 0;
  min-height: 42px;
  margin-bottom: 5px;
  border-radius: 100% !important;
}
select {
  border-radius: 0px;
  font-size: 11px;
  display: block;
  border-width: 0;
  color: #0064b7;
  font-weight: 700;
  border-bottom: 2px solid;
-webkit-appearance: none;
}
</style>
