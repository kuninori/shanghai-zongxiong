<template></template>
<script>
  export default {
    props: ["target"],
    data() {
      return {
        active: false,
      }
    },
    mounted() {
      window.addEventListener("scroll", this.onScroll);
      setTimeout(()=>{
        this.updateInview();
      }, 200);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
      onScroll() {
        this.updateInview();
      },
      updateInview() {
        if (!this.target || this.active) return;
        const y = this.target.getBoundingClientRect().top;
        const wh = window.innerHeight;
        if (wh - wh / 4 > y) {
          this.active = true;
          this.$emit("inview");
        }
      }
    },
  }
</script>
