<template>
  <ion-card style="">
    <ion-card-content>
      <ion-list id="form">
        <ion-item fill="outline" id="input">
          <ion-label position="floating">E-mail</ion-label>
          <ion-icon slot="end" :icon="mail"></ion-icon>
          <ion-input
            v-model="form.email"
            type="email"
            placeholder="Ex.: email@email.com"
          ></ion-input>
        </ion-item>
        <ion-item fill="outline" id="input">
          <ion-label position="floating">Nome</ion-label>
          <ion-icon slot="end" :icon="person"></ion-icon>
          <ion-input
            v-model="form.nome"
            type="text"
            placeholder="João Sauro"
          ></ion-input>
        </ion-item>
        <ion-item fill="outline" id="input">
          <ion-label position="floating">Carteira</ion-label>
          <ion-icon slot="end" :icon="card"></ion-icon>
          <ion-input
            v-model="form.carteira"
            type="text"
            placeholder="Sua carteira da Unimed"
          ></ion-input>
        </ion-item>
        <ion-item fill="outline" id="input">
          <ion-label position="floating">Senha</ion-label>
          <ion-icon slot="end" :icon="fingerPrint"></ion-icon>
          <ion-input
            v-model="form.senha"
            type="password"
            placeholder="Sua senha"
          ></ion-input>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import { person, mail, card, fingerPrint } from "ionicons/icons";

export default defineComponent({
  name: "FormCadastro",
  components: {
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonInput,
    IonLabel,
    IonIcon,
  },
  data() {
    return {
      form: {
        email: "",
        nome: "",
        carteira: "",
        senha: "",
      },
    };
  },
  watch: {
    form: {
      handler(data) {
        this.$emit("getFormCadastro", data);
      },
      deep: true,
    },
  },
  setup() {
    return {
      person,
      mail,
      card,
      fingerPrint,
    };
  },
});
</script>

<style scoped>
#form ion-label,
#form ion-input {
  font-family: "Poppins", sans-serif;
}
#input {
  margin-bottom: 20px;
}
</style>
