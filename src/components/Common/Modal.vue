<template lang="pug">
  .modal-wrap(@click="close($event)")
    .modal
      .modal__title Изменить количество
      .modal__box
        .modal__price {{ price }} X
        .modal__change-wrap(@click="changeCount($event)")
          .modal__change.modal__change--reduce -
          input.modal__change-box(v-model="count")
          .modal__change.modal__change--add +
        .modal__price {{ total }} P
      .modal__btns
        .modal__btn.modal__btn--save(@click="save") Сохранить
        .modal__btn.modal__btn--cancel(@click="chancel") Отменить
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .modal {
    position: absolute;
    left: 75%;
    top: 35%;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.25);
    z-index: 2;
    padding: 15px 30px;
    min-width: 320px;
  }
  .modal-wrap:after {
    content: '';
    display: block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  .modal__title {
    color: $accent;
    font-size: 15px;
    margin-bottom: 16px;
  }
  .modal__change {
    width: 10px;
    height: 10px;
    background-color: $accent-light;
    color: #fff;
  }
  .modal__change-box {
    max-width: 50px;
    height: 30px;
    padding: 5px 10px;
    border: 1px solid rgb(215, 215, 215);
    border-radius: 3px;
    box-shadow: inset 0 0 5px 0 rgba(9, 12, 18, 0.12);
    outline: none;
  }
  .modal__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .modal__change-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .modal__change {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 20px;
    width: 20px;
    margin: 0 10px;
  }
  .modal__price {
    display: flex;
    flex-shrink: 0;
  }
  .modal__btns {
    display: flex;
    justify-content: flex-start;
  }
  .modal__btn {
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 20px;
    cursor: pointer;
  }
  .modal__btn--save {
    color: $accent;
    border-bottom: 1px solid $accent;
  }
  .modal__btn--cancel {
    border-bottom: 1px solid;
  }
</style>
<script>
export default {
  data () {
    return {
      count: this.c
    }
  },
  props: {
    price: Number,
    c: Number,
    show: Boolean,
    i: Number
  },
  computed: {
    total () {
      return this.price * this.count
    }
  },
  methods: {
    changeCount (e) {
      let target = e.target
      if (target.closest('.modal__change--add')) {
        this.count = +this.count + 1
      }
      if (target.closest('.modal__change--reduce')) {
        this.count = +this.count - 1
        if (this.count < 1) {
          this.count = 1
        }
      }
    },
    save () {
      this.$store.commit('changeCount', {
        count: this.count,
        i: this.i
      })
      this.$emit('close')
    },
    chancel () {
      this.$emit('close')
    },
    close (e) {
      let target = e.target
      if (target.closest('.modal')) return
      this.$emit('close')
    }
  }
}
</script>
