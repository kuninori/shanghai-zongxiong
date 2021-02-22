<template>
    <iframe
    id="player"
    width="560" height="315" :src="`${src}?rel=0&enablejsapi=1`"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen/>
</template>

<script>
export default {
    props: {
        "onEnded": Function,
        "src": String,
    },
    mounted(){
        const player = new YT.Player(this.$el, {
        height:"360",
        width:"640",
        videoId: this.videoSrc,
        events: {
          onReady: ()=>{
            console.log("youtube ready!")
          },
          onStateChange: (e)=>{
              if(e.data === YT.PlayerState.ENDED){
                  this.onEnded();
              }
          }
        }
      });
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';
</style>