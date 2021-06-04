<template>
  <q-page>
    <section id="login">
      <div class="q-pa-md doc-container">
        <div class="row q-pa-lg justify-center">
          <div class="row col-md-6 offset-md-2 col-lg-10 offset-lg-2">
            <div class="container">
              <q-card class="my-card">
                <q-card-section>
                  <h4 class="titulo">Olá! Digite o seu e-mail e senha</h4>
                </q-card-section>
                <q-card-section>
                  <q-input color="teal" outlined v-model="email" label="E-Mail" class="input-login" />
                  <q-input color="teal" outlined v-model="senha" label="Senha" class="input-login" />
                  <q-btn color="secondary" label="Continuar" class="btn-login" />
                  <q-btn color="secondary" label="Criar conta" class="btn-login" outline />
                </q-card-section>
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
      email: null,
      senha: null
    }
  }
}
</script>
<style>
  .my-card {
    padding: 20px;
    width: 100%;
    max-width: 400px;
  }
  .titulo {
    font-size: 1.5rem;
    font-weight: 500;
    color: rgba(0,0,0,.8);
    line-height: 1.25;
  }
  .btn-login {
    margin: 15px 0 0;
    height: 50px;
    width: 100%;
  }
  .input-login {
    margin: 8px 0 0;
  }
</style>
