<template>
  <ion-page>
    <ion-header>
      <HeaderCadastro
        :email="email"
        :nome="nome"
        :carteira="carteira"
        :senha="senha"
      />
    </ion-header>
    <ion-content id="corpo">
      <FormCadastro @getFormCadastro="getFormCadastro" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormCadastro from "./FormCadastro.vue";
import HeaderCadastro from "./HeaderCadastro.vue";

import { IonPage, IonHeader, IonContent } from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonContent,
    HeaderCadastro,
    FormCadastro,
  },
  data() {
    return {
      email: "",
      nome: "",
      carteira: "",
      senha: "",
    };
  },
  methods: {
    getFormCadastro(data: {
      email: string;
      nome: string;
      carteira: string;
      senha: string;
    }) {
      this.email = data.email;
      this.nome = data.nome;
      this.carteira = data.carteira;
      this.senha = data.senha;
    },
  },
  setup() {
    //
  },
});
</script>

<style scoped>
#corpo {
  --background: rgb(238, 238, 238);
}
</style>
