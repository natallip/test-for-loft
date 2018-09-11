<template lang="pug">
  .page__menu
    ul.menu
      router-link.menu__item(v-for="(item, i) in menu", :key="i", tag="li", :to="item.link", :active-class="'menu__item--active'" exact) {{ item.name }}
    .menu__currentItem {{ currentPage }}
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .page__menu {
    margin-top: 55px;
  }
  .menu__item {
    font-family: Arial, sans-serif;
    font-size: 14px;
    padding-right: 15px;
    color: $grey-dark;
    position: relative;
    cursor: pointer;
    &::after {
      content: '/';
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      top: 0;
      right: 0;
    }
    &:last-child::after {
      display: none;
    }
  }
  .menu__item--active {
    text-decoration: underline;
  }
  .menu__currentItem {
    margin-top: 10px;
    font-size: 30px;
    font-family: 'BeauSansPro', sans-serif;;
    font-weight: 300;
    color: $accent;
  }
</style>
<script>
export default {
  data () {
    return {
      menu: [
        {name: 'Главная', link: '/'},
        {name: 'Корзина', link: '/basket'}
      ]
    }
  },
  computed: {
    currentPage () {
      return this.$route.name
    }
  }
}
</script>
