<template>
  <q-page>
    <section id="header">
      <header>
        <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          arrows
          control-type="outline"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="promo1.jpg" />
          <q-carousel-slide :name="2" img-src="promo2.jpg" />
          <q-carousel-slide :name="3" img-src="promo3.jpg" />
          <q-carousel-slide :name="4" img-src="promo4.jpg" />
        </q-carousel>
      </header>
    </section>
    <section id="produtos">
      <div class="q-pa-md doc-container">
        <div class="row q-pa-lg justify-center">
          <div class="row col-md-12 col-lg-10 offset-lg-2">
            <q-card class="my-card-index cursor-pointer q-hoverable" v-for="produto in produtos" :key="produto.id" @click="visitar(produto.id)">
              <q-card-section>
                <q-img :src="produto.foto" :ratio="4/3"/>
              </q-card-section>
              <q-card-section>
                <div class="text-h6">R$ {{ produto.preco }}</div>
              </q-card-section>
              <q-card-section class="q-pt-none" style="color:#666;">
                {{ produto.titulo }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      autoplay: true,
      produtos: [{
        id: 1,
        titulo: '...',
        preco: '...',
        foto: '...'
      }
      ]
    }
  },
  methods: {
    visitar (param) {
      this.$router.push('/produto/' + param)
    },
    carregarProdutos () {
      const url = 'http://localhost:3000/produtos'
      this.$axios.get(url).then((resposta) => {
        this.produtos = resposta.data.produtos
      })
    }
  },
  beforeMount () {
    this.carregarProdutos()
  }
}
</script>
<style>
  .my-card-index {
    width: 100%;
    max-width: 224px;
    margin: 0 0 10px 10px;
  }
  .my-card-index img {
    width: 224px;
    height: 224px;
  }
</style>
