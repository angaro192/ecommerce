<template>
  <q-page>
    <section id="produtos">
      <div class="q-pa-md doc-container">
        <div class="row q-pa-lg justify-center">
          <div class="row col-md-10 offset-md-1 col-lg-10 offset-lg-2">
            <div class="container">
              <q-card class="my-card-produto">
                <div class="row">
                  <div class="col-md-7 q-pa-xs">
                    <q-img :src="produto.foto" />
                  </div>
                  <div class="col-md-4">
                    <q-card class="card-opcoes">
                      <q-card-section>
                        <span>Quantidades restantes: {{ produto.qtd }}</span>
                        <h4 class="titulo">{{ produto.titulo }}</h4>
                        <span class="preco">R$ {{ produto.preco }}</span>
                      </q-card-section>
                      <q-card-section>
                        <q-btn color="secondary" label="Comprar Agora" class="btn-compra" />
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PageProduto',
  data () {
    return {
      produto: {
        id: 1,
        titulo: '...',
        preco: '...',
        foto: '...'
      }
    }
  },
  methods: {
    carregarProduto () {
      const url = 'http://localhost:3000/produtos/' + this.$route.params.id
      this.$axios.get(url).then((resposta) => {
        this.produto = resposta.data.resultado
      })
    }
  },
  beforeMount () {
    this.carregarProduto()
  }
}
</script>
<style>
  .my-card-produto {
    width: 900px;
  }
  .card-opcoes {
    width: 100%;
    max-width: 352px;
    float: right;
  }
  .titulo {
    font-size: 18px;
    flex: auto;
    padding: 0;
    line-height: 1.18;
  }
  .preco {
    font-size: 36px;
    font-weight: 300;
  }
  .btn-compra {
    width: 100%;
  }
</style>
