<template>
  <div>
    <Header></Header>
    <List :todos="todos"></List>
    <Footer></Footer>
  </div>
</template>

<script>
export interface Todo{
  id: string,
  name: string,
  isComplete: boolean
}
export default {
  setup() {
    const state = reactive<{todos:Todo[]}>({
      todos: [
        {id: 1, name: 'aaa', isComplete: true},
        {id: 2, name: 'bbb', isComplete: true}
      ]
    })
    return {
      ...toRefs(state)
    };
  },
};
</script>

<style lang="scss" scoped>
</style>