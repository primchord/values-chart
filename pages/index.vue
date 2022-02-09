<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>価値観</th>
          <th>レベル</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>
            <input v-model="user.value" />
          </td>
          <td>
            <input v-model="user.level" />
          </td>
          <td>
            <button
              class="p-1 border-2 border-transparent focus:bg-gray-700"
              @click="del(index)"
            >
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="add">行を追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [{ value: '', level: '' }],
    }
  },
  methods: {
    add: function () {
      this.users.push({ value: '', level: '' })
    },
    del: function (index) {
      this.users.splice(index, 1)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
