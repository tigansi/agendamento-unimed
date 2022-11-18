<template>
  <ion-toolbar id="cab">
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button @click="enviaDados">
        <ion-icon slot="end" :icon="send"></ion-icon>
        Enviar
      </ion-button>
    </ion-buttons>
    <ion-title>Cadastro</ion-title>
  </ion-toolbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
  IonButton,
  IonBackButton,
  toastController,
} from "@ionic/vue";

import { send, thumbsUp, alert } from "ionicons/icons";

export default defineComponent({
  name: "HeaderCadastro",
  components: {
    IonToolbar,
    IonTitle,
    IonButtons,
    IonIcon,
    IonButton,
    IonBackButton,
  },
  props: {
    email: String,
    nome: String,
    carteira: String,
    senha: String,
  },
  data() {
    return {};
  },
  methods: {
    async enviaDados() {
      if (this.email == "") {
        this.toastAlert("Campo e-mail está em branco", "warning");
      } else if (this.nome == "") {
        this.toastAlert("Campo nome está em branco", "warning");
      } else if (this.carteira == "") {
        this.toastAlert("Campo carteira está em branco", "warning");
      } else if (this.senha == "") {
        this.toastAlert("Campo senha está em branco", "warning");
      } else {
        const dados = {
          email: this.email,
          nome: this.nome,
          carteira: this.carteira,
          senha: this.senha,
        };

        console.log(dados);
      }
    },
    async toastAlert(message: string, tipo: string) {
      if (tipo == "warning") {
        const toast = await toastController.create({
          message: message,
          color: tipo,
          duration: 4000,
          position: "top",
          icon: alert,
        });

        return toast.present();
      } else if (tipo == "success") {
        const toast = await toastController.create({
          message: message,
          color: tipo,
          duration: 4000,
          position: "top",
          icon: thumbsUp,
        });

        return toast.present();
      }
    },
  },
  setup() {
    return {
      send,
      alert,
      thumbsUp,
    };
  },
});
</script>

<style scoped>
#cab {
  --background: #00995d;
  --color: white;
}
</style>
