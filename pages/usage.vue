<template>
  <div class="md:mt-10 max-w-screen-md mx-8 md:mx-auto">
    <section>
      <h2 class="text-2xl">使い方は簡単です！</h2>
      <ol class="mb-5">
        <li>お名前を入力</li>
        <li>価値観を入力</li>
        <li>描画ボタン押下</li>
      </ol>
      <p>
        <span class="mark"
          >３スッテプであなたの価値観マップが出来上がります。</span
        >
      </p>
      <div class="imgBox1">
        <img class="w-1/2" src="~/assets/images/image01.png" alt="" />
      </div>
      <div class="imgBox2">
        <img class="w-1/2" src="~/assets/images/image03.png" alt="" />
      </div>
      <div class="imgBox3">
        <img class="w-1/2" src="~/assets/images/image04.png" alt="" />
        <p class="text-xs">
          ※マップ下部のボタンでグループの表示/非表示が切り替えられます
        </p>
      </div>
    </section>
    <section class="mt-14">
      <h2 class="text-2xl">オプション機能</h2>
      <p>マップ右上のメニューバーから、以下の機能をご利用いただけます。</p>
      <ol class="mt-5 mb-5">
        <li>フルスクリーン表示</li>
        <li>マップの印刷</li>
        <li>各種画像形式でダウンロード</li>
      </ol>
      <div class="imgBox4">
        <img class="w-1/2" src="~/assets/images/image05.png" alt="" />
      </div>
    </section>
    <section class="mt-14">
      <h2 class="text-2xl">シェアをお願いします</h2>
      <p>
        当アプリを楽しんでいただけたら、下記SNSリンクボタンよりシェアをお願いしますm(_
        _)m
      </p>
    </section>
  </div>
</template>
<style scoped>
section {
  margin-bottom: 2rem;
}

section h2 {
  margin-bottom: 1.6rem;
  padding: 0.4rem 1rem;
  border-left: 3px solid #000;
}
section p {
  line-height: 1.8;
  text-align: justify;
  /* margin-left: 0.5rem; */
}

.mark {
  background: linear-gradient(transparent 60%, #f6ff5f 60%);
}
ol {
  margin-left: 1.2rem;
}
li {
  margin-bottom: 0.5rem;
  list-style-type: number;
  list-style-position: inside;
}

.imgBox1 {
  margin-top: 3rem;
  position: relative;
  padding: 1rem 2rem;
  text-align: center;
  border: 1.5px solid #000;
  border-radius: 0 10px 10px 10px;
}

.imgBox1::before {
  /* font-size: 15px; */
  /* font-size: 1.5rem; */
  position: absolute;
  top: -24px;
  left: -3px;
  height: 24px;
  padding: 0 1em;
  content: 'お名前入力';
  color: #fff;
  border-radius: 10px 10px 0 0;
  background: #000;
}
.imgBox2 {
  margin-top: 3rem;
  position: relative;
  padding: 1rem 2rem;
  text-align: center;
  border: 1.5px solid #000;
  border-radius: 0 10px 10px 10px;
}

.imgBox2::before {
  /* font-size: 15px; */
  /* font-size: 1.5rem; */
  position: absolute;
  top: -24px;
  left: -3px;
  height: 24px;
  padding: 0 1em;
  content: '価値観入力/描画ボタン押下';
  color: #fff;
  border-radius: 10px 10px 0 0;
  background: #000;
}
.imgBox3 {
  margin-top: 3rem;
  position: relative;
  padding: 1rem 2rem;
  text-align: center;
  border: 1.5px solid #000;
  border-radius: 0 10px 10px 10px;
}

.imgBox3::before {
  /* font-size: 15px; */
  /* font-size: 1.5rem; */
  position: absolute;
  top: -24px;
  left: -3px;
  height: 24px;
  padding: 0 1em;
  content: '完成！';
  color: #fff;
  border-radius: 10px 10px 0 0;
  background: #000;
}
.imgBox4 {
  margin-top: 3rem;
  position: relative;
  padding: 1rem 2rem;
  text-align: center;
  border: 1.5px solid #000;
  border-radius: 0 10px 10px 10px;
}

.imgBox4::before {
  /* font-size: 15px; */
  /* font-size: 1.5rem; */
  position: absolute;
  top: -24px;
  left: -3px;
  height: 24px;
  padding: 0 1em;
  content: 'オプションメニュー';
  color: #fff;
  border-radius: 10px 10px 0 0;
  background: #000;
}
</style>
