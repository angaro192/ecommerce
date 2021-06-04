<template>
  <q-layout view="hhh lpR fff">

    <q-header class="bg-primary text-header">
      <q-toolbar>
        <q-toolbar-title>
          <a href="/"><img src="logo.png"></a>
        </q-toolbar-title>
        <q-input bottom-slots v-model="busca" label="Busca de produtos">
            <template v-slot:append>
              <q-icon name="search" @click="buscar(busca)" />
            </template>
          </q-input>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer id="footer">
      <q-toolbar>
        <div class="primeiro">
          <small>Copyright © 2021 Augusto Almeida</small>
        </div>
        <p class="segundo">Informações adcionais da empresa.</p>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      busca: null
    }
  },
  methods: {
    buscar (params) {
      const url = 'http://localhost:3000/produtos/' + params
      this.$axios.get(url).then((resposta) => {
        // Redirecionar para pagina de resultado de busca
      })
    }
  }
}
</script>
<style>
  body{
    background: #ededed;
  }
  .text-header {
    color: #333;
    font-family: 'Roboto';
  }
  #footer {
    background: #e6e6e6;
    color: #999;
  }
  .primeiro {
    vertical-align: top;
    position: absolute;
    height: 40px;
    margin: 10px 0 25px;
    overflow: hidden;
  }
  .segundo {
    font-size: 12px;
    display: block;
    margin: 10px 0 0;
  }
</style>
