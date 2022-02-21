<template>
  <div class="md:mt-10 max-w-screen-md mx-8 md:mx-auto px-5 mt-7">
    <section>
      <h2 class="text-2xl">価値観の言語化、できていますか？</h2>
      <p class="mb-5">
        価値観マップ【Values
        Chart】に興味をお持ちいただき、ありがとうございます。
      </p>
      <p>
        ”マップ”
        と銘打ってはいるものの、「人生の目的地を決めるための地図」的なツールではございません。
      </p>
      <p class="mb-5">
        <span class="mark">
          あなたの中に眠る価値観をはっきりと言語化し、5段階にグループ分けするための可視化ツールです。</span
        >
      </p>

      <p class="mb-5">
        「価値観」はあなたの生き方の重要な指標。人生において多く訪れる選択肢を、一般常識や他人の価値観に振り回されること無く、自分で選び抜くための自分軸です。当ツールは、あなたが「何に価値を感じるか」を可視化し、価値観の重み付けをサポートします。
      </p>

      <p>
        生きていく上であなたが感じる価値の１つ１つをキーワードとして切り出し、この価値観マップに入力していただくことで、
        <span class="font-bold">あなただけの価値観マップ</span
        >が出来上がります。
      </p>
    </section>
    <section>
      <h2 class="mt-16 text-2xl">開発の経緯</h2>
      <p class="mb-5">このアプリは元々、私自身のために作りました。</p>

      <p class="mb-4">
        私は、「何者かにならなくては・・・」というプレッシャーと長年戦ってきました。
      </p>
      <ul class="my-10">
        <li>年収を上げなくては</li>
        <li>影響力を持たなくては</li>
        <li>社会に溶け込まなくては</li>
        <li>家族を持たなくては</li>
      </ul>

      <p class="mb-5">
        つまり「世間的な完璧さ」という価値観を追い求めて生きてきたのです。
      </p>

      <p class="mb-5">
        しかし、それらのプレッシャーの根本にある完璧さは「他人の価値観」でした。他人の価値観で生きてきたことに気づくまで数十年かかりましたが、気づけば解決、というほど簡単なものではありませんでした。
      </p>
      <p class="mb-5">
        例えば、働いていれば「お金」という価値観は満足ではないにせよある程度満たされます。しかしまだどうにも生きづらい…自分の中にある「余白」や「応援」「成長」といった他の価値観が悲鳴を上げていることに気づいたのです。
      </p>
      <p class="mb-5">
        <span class="mark font-bold">
          「価値観には序列があり、下位の価値観だけ満たしていても幸せになれない」</span
        >
      </p>
      <p class="mb-5">というという気づきでした。</p>
      <p>
        そこで、価値のグループを5段階に分け、可視化するWebツールの制作に取りかかりました。
      </p>
      <p class="mb-5">
        価値観の大きさを視覚化することで、人生の選択において、また日々の生活においてより大切な価値観を選択し、価値観同士で補完し合うことができると考えたからです。
      </p>
      <p class="mb-5">
        自身のために開発したアプリでしたが、生き方に悩める多くの方々のお役に立てるかもしれないと考え、Webサービスとして公開することにいたしました。どうぞご利用ください。
      </p>
      <p class="mb-5">
        <i>
          あなたがご自身の価値観に基づいて、"あなたらしい生き方"
          を見つけられますように。</i
        >
      </p>
    </section>
    <section>
      <h2 class="mt-16 text-2xl">リリースノート</h2>
      <time-line></time-line>
    </section>
    <section>
      <h2 class="mt-16 text-2xl">お問い合わせ</h2>
      <p>
        アプリに関するお問い合わせや、価値観言語化のサポートが必要な方は、こちらからご連絡ください。
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
ul {
  margin-left: 1.2rem;
}
li {
  list-style-type: square;
  list-style-position: inside;
}
</style>
