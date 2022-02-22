<template>
  <div class="md:mt-10 max-w-screen-md mx-8 md:mx-auto min-h-screen">
    <div align="center">
      <p class="my-10">
        ご質問・お問い合わせは、下記フォームよりお願いします。
      </p>
      <p class="text-xs text-gray">
        ※@value.chord4me.infoからのメールの受信設定をお願いします。<br />
        ※こちらからの返信が迷惑メールに振り分けられることがあります。
      </p>
      <div align="center" class="container mx-auto mt-10">
        <div class="mb-4">
          <div :class="{ delatearea: inputdata }">
            <input
              id="name"
              v-model="namearea"
              class="appearance-none block w-full md:w-1/2 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="お名前"
            />
          </div>
          <div :class="{ delatearea: makesure }">
            <p class="mb-7 text-red-600">
              以下の内容で送信します。よろしいですか？
            </p>
            ＜お名前＞
            <p>{{ namearea }}</p>
          </div>
          <div :class="{ delatearea: inputdata }">
            <input
              v-model="mailarea"
              class="appearance-none block w-full md:w-1/2 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="email"
              placeholder="メールアドレス"
            />
          </div>
          <div class="mt-6" :class="{ delatearea: makesure }">
            ＜メールアドレス＞
            <p>{{ mailarea }}</p>
          </div>
          <div :class="{ delatearea: inputdata }">
            <textarea
              v-model="textboxarea"
              class="appearance-none block w-full md:w-1/2 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="お問い合わせ内容"
            />
          </div>
          <div class="mt-6" :class="{ delatearea: makesure }">
            ＜お問合せ内容＞
            <p>{{ textboxarea }}</p>
          </div>
        </div>
        <div :class="{ delatearea: inputdata }">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="clickbtn"
          >
            確 認
          </button>
        </div>
        <div :class="{ delatearea: makesure }">
          <button
            class="mr-3 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="clickbtn_back"
          >
            戻 る
          </button>
          <button
            class="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="clickbtn_send"
          >
            送 信
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      namearea: '',
      mailarea: '',
      textboxarea: '',
      inputdata: false,
      makesure: true,
    }
  },
  methods: {
    clickbtn() {
      this.inputdata = true
      this.makesure = false
    },
    clickbtn_back() {
      this.inputdata = false
      this.makesure = true
    },
    clickbtn_send() {
      const params = new URLSearchParams()
      params.append('mailarea', this.mailarea)
      params.append('namearea', this.namearea)
      params.append('textboxarea', this.textboxarea)
      fetch('/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
        .then((response) => {
          alert(response.data)
          document.location = './'
        })
        .catch((error) => {
          alert(error, 'エラーが発生しました')
          document.location = './'
        })
    },
  },
}
</script>
<style scoped>
.delatearea {
  position: absolute;
  left: -9999px;
}
</style>
