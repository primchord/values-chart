<template>
  <div class="mb-5">
    <div class="flex justify-center">
      <span class="text-xs text-gray-400 mb-1">- SNS SHARE -</span>
    </div>
    <div class="flex justify-center">
      <a :href="twitterURL" target="_blank" rel="noopener noreferrer"
        ><button class="mr-4 md:mr-5 font-bold text-blue-500">
          TWITTER
        </button></a
      >
      <a :href="facebookURL" target="_blank" rel="noopener noreferrer"
        ><button class="mr-4 md:mx-5 font-bold text-blue-800">
          FACEBOOK
        </button></a
      >

      <a :href="lineURL" target="_blank" rel="noopener noreferrer"
        ><button class="mr-4 md:mx-5 font-bold text-green-600">LINE</button></a
      >
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    url: 'https://value.chord4me.info/',
    title: '価値観マップ-ValuesChart-',
    tags: '価値観,自己理解,可視化',
  }),
  computed: {
    fixedContent() {
      return encodeURIComponent(`${this.title} ${this.url}`)
    },
    twitterURL() {
      return `https://twitter.com/intent/tweet?url=${this.url}&text=${this.title}&hashtags=${this.tags}`
    },
    facebookURL() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.url}`
    },
    lineURL() {
      return `http://line.me/R/msg/text/?${this.fixedContent}`
    },
  },
}
</script>
<style scoped></style>
