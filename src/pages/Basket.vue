<template lang="pug">
  div
    section.basket
      .container
        .section__menu
          Menu
        .basket__table.table
          .table__thead
            .table__mark-wrap
              .table__mark Выделено
              .table__mark-count {{ checkedTotal }}
            .table__del(@click="deleteItem(i)")
              .table__del-icon
                svg.icon-del(viewBox="0 0 24 24")
                  path(d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zM15.707 14.293c0.391 0.391 0.391 1.023 0 1.414-0.195 0.195-0.451 0.293-0.707 0.293s-0.512-0.098-0.707-0.293l-2.293-2.293-2.293 2.293c-0.195 0.195-0.451 0.293-0.707 0.293s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-0.391-0.391-0.391-1.023 0-1.414s1.023-0.391 1.414 0l2.293 2.293 2.293-2.293c0.391-0.391 1.023-0.391 1.414 0s0.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z")
              .table__del-text(@click="deleteItems") Удалить отмеченные

          .table__body
            .table__tr(v-for="(item, i) in basket", :key="i")
              .table__td.td1.td--border
                .table__item-checkbox(@click="check($event, i)", ref="checkBox")
                .table__item-i {{ i+1 }}
              .table__td.td2.td--border
                img.table__img(:src="item.img")
              .table__td.td3.td--border
                .table__item {{ item.type }} {{ item.producer }} {{ item.name }} {{ item.descr }}
              .table__td.td2
                .table__cost {{ item.price }} P
              .table__td.td2
                .table__count(@click="showModal(i)") {{ item.count }}
                Modal.hidden(:price="+item.price", :c="+item.count", :i="+i", ref="modal", @close="closeModal(i)")
              .table__td.td2
                .table__cost {{ item.price * item.count }} P

          .table__total
            .table__total-val Промежуточный итог по корзине:
            .table__total-val {{ totalNoTax }}  P
          .table__total
            .table__total-val В том числе НДС:
            .table__total-val {{ tax }}  P
          .table__total.table__total--border
            .table__total-val.table__total-val--accent Итого:
            .table__total-val.table__total-val--accent.table__total-val--bold {{ total }}  P

</template>
<style lang="scss">
  @import '../assets/sass/vars';
  @import '../assets/sass/mixins';
  .section__menu {
    margin-bottom: 22px;
  }
  .table {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .table__thead {
    background-color: $accent-super-light;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'BeauSansPro', sans-serif;
    font-size: 14px;
    height: 42px;
    padding: 0 16px;
  }
  .table__body {
    border-bottom: 1px solid $grey;
    padding-bottom: 10px;
    margin-bottom: 28px;
  }
  .table__mark-wrap {
    display: flex;
  }
  .table__mark {
    margin-right: 10px;
  }
  .table__tr:nth-child(2n) {
    background-color: $grey;
  }
  .table__del {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .icon-del {
    width: 25px;
    height: 25px;
    fill: $text;
    &:hover {
      fill: $grey-dark;
    }
  }
  .table__del-icon {
    margin-right: 10px;
  }
  .table__del-text {
    text-decoration: underline;
  }
  .table__item-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid rgb(215, 215, 215);
    border-radius: 3px;
    box-shadow: inset 0 0 5px 0 rgba(9, 12, 18, 0.12);
    margin-right: 20px;
  }
  .check {
    background: transparent url('../assets/img/check.png') no-repeat center center;
  }
  .table__img {
    width: 50px;
    height: 55px;
    @include tablets {
      align-self: center;
    }
  }
  .table__td {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @include tablets {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .td1 {
    flex-basis: 7%;
  }
  .td2 {
    flex-basis: 10%;
  }
  .td3 {
    flex-basis: 57%;
    padding: 10px 20px;
  }
  .td--border {
    border-right: 1px dashed rgba(#000, .3);
    justify-content: center
  }
  .table__tr {
    display: flex;
    @include tablets {
      flex-direction: column;
    }
  }
  .table__item {
    font-size: 14px;
    font-family: Arial, sans-serif;
    text-align: left;
    width: 100%;
  }
  .table__count {
    border: 1px solid rgb(215, 215, 215);
    border-radius: 3px;
    box-shadow: inset 0 0 5px 0 rgba(9, 12, 18, 0.12);
    width: 50px;
    text-align: center;
    cursor: pointer;
  }
  .table__total {
    text-align: right;
    font-family: Arial, sans-serif;
    margin-bottom: 22px;
  }
  .table__total-val {
    min-width: 150px;
    display: inline-block;
  }
  .hidden {
    display: none;
  }
  .table__total--border {
    padding-top: 20px;
    border-top: 1px dashed rgba(#000, .3);
  }
  .table__total-val--accent {
    color: $accent;
    text-transform: uppercase;
  }
  .table__total-val--bold {
    font-size: 24px;
  }
  .table__del-text {
    cursor: pointer;
  }
</style>
<script>
import Menu from '../Components/Common/Menu.vue'
import Modal from '../Components/Common/Modal.vue'
export default {
  data () {
    return {
      menu: [
        {name: 'Главная', link: '/'},
        {name: 'Корзина', link: '/basket'}
      ],
      show: false,
      checkedId: [],
      checkedTotal: 0
    }
  },
  components: {
    Menu,
    Modal
  },
  computed: {
    basket () {
      return this.$store.state.basket
    },
    totalNoTax () {
      let totalAmount = 0
      this.basket.forEach(item => {
        totalAmount = +totalAmount + item.price * item.count
      })
      return Math.round(totalAmount / 118 * 100)
    },
    tax () {
      let taxTotal = this.totalNoTax / 100 * 18
      return Math.round(taxTotal)
    },
    total () {
      let totalAmount = this.totalNoTax + this.tax
      return totalAmount
    }
  },
  mounted () {
    this.$store.dispatch('loadBasket')
  },
  methods: {
    showModal (i) {
      let modals = this.$refs.modal
      modals.forEach(item => {
        item.$el.classList.add('hidden')
      })
      this.$refs.modal[i].$el.classList.remove('hidden')
    },
    closeModal (i) {
      this.$refs.modal[i].$el.classList.add('hidden')
    },
    check (e, i) {
      let target = e.target
      target.classList.toggle('check')
      let count = target.closest('.table__tr').querySelector('.table__count').innerHTML
      let id = this.basket[i].id

      function contains (arr, item) {
        return arr.findIndex(it => it === item)
      }
      let existIndex = contains(this.checkedId, id)
      if (existIndex === -1) {
        this.checkedId.push(id)
        this.checkedTotal += +count
      } else {
        this.checkedId.splice(i, 1)
        this.checkedTotal = this.checkedTotal - +count
      }
    },
    deleteItems () {
      this.$store.commit('deleteItems', this.checkedId)
      this.checkedTotal = 0
      let checkboxs = document.querySelectorAll('.check')
      checkboxs.forEach(item => {
        item.classList.remove('check')
      })
    }
  }
}
</script>
