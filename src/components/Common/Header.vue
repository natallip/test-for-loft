<template lang="pug">
  header.header
    .container
      .header__wrap
        .header__logo.logo
          img(src="../../assets/img/logo.png").logo__img
        .header__search
          .input__container
            input.input.input--search
            svg(version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 20 20" class="input__icon")
              path(d="M12.9 14.32c-1.34 1.049-3.050 1.682-4.908 1.682-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8 0 1.858-0.633 3.567-1.695 4.925l0.013-0.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6v0c-3.314 0-6 2.686-6 6s2.686 6 6 6v0z")
          .btn Поиск
      .header__nav
        nav.ul.nav
          router-link.nav__item(v-for="item, i) in nav", :key="i", tag="li", :to="item.link")
            span.nav__name {{ item.name }}
            .nav__arrow
              svg(version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="link__icon")
                path(d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 4.242-4.243-4.242-1.414 1.414z")
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .header__wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 40px 0;
  }
  .header__logo {
    width: 235px;
    height: 60px;
  }
  .logo__img {
    width: 100%;
    height: auto;
  }
  .input__container {
    position: relative;
  }
  .input {
    border: 1px solid rgb(213, 213, 213);
    border-radius: 4px;
    box-shadow: inset 0 0 5px 0 rgba(9, 12, 18, 0.16);
    width: 310px;
    height: 26px;
    padding-left: 30px;
    margin-right: 10px;
  }
  .input__icon {
    position: absolute;
    top: 5px;
    left: 12px;
    fill: $grey-dark;
    width: 14px;
    height: 14px;
    &:hover {
      fill: $accent-light;
    }
  }
  .header__search {
    display: flex;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    border-radius: 3px 3px 0 0;
    background-color: #94c9e2;
    overflow: hidden;
  }
  .nav__item {
    font-family: 'BeauSansPro', sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    color: $grey-dark;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #94c9e2;
    flex-grow: 1;
    flex-shrink: 1;
    text-transform: uppercase;
    background: -moz-linear-gradient( 90deg, rgb(146,200,225) 0%, rgb(178,218,237) 100%);
    background: -webkit-linear-gradient( 90deg, rgb(146,200,225) 0%, rgb(178,218,237) 100%);
    background: -ms-linear-gradient( 90deg, rgb(146,200,225) 0%, rgb(178,218,237) 100%);
    background: linear-gradient(90deg, rgb(146,200,225) 0%, rgb(178,218,237) 100%);
    border-radius: 0 4px 0 0;
    &:first-child {
      border-radius: 4px 4px 0 0;
    }
  }
  .nav__item:hover {
    background: #fff;
    border: 1px solid rgb(213, 213, 213);
    border-bottom: none;
    cursor: pointer;
  }
  .link__icon {
    fill: rgba(#000, .5);
  }
</style>
<script>
export default {
  data () {
    return {
      activeNavItem: 0,
      nav: [
        {name: 'Каталог продукции', link: '/'},
        {name: 'Все бренды', link: '/'},
        {name: 'Подарки на 14 февраля', link: '/'},
        {name: 'Подарки на 23 февраля', link: '/'},
        {name: 'Подарки на 8 марта', link: '/'}
      ]
    }
  }
}
</script>
