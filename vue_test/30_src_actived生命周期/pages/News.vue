<template>
  <div>
    <ul>
      <li>news1 <input type="text"></li>
      <li>news2 <input type="text"></li>
      <li>news3 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'News',
  activated() {
    console.log('News组件actived')
  },
  deactivated() {
    console.log('News组件deactivated')
  },
}
</script>

<style>

</style>