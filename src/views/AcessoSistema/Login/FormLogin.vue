<template>
  <ion-grid>
    <ion-row>
      <ion-col></ion-col>
      <ion-col size="12" size-sm="">
        <div id="login">
          <ion-card style="margin: 0px">
            <ion-card-header>
              <center>
                <ion-img
                  id="img-logo"
                  :src="require('../../../../public/logo/logo-unimed.png')"
                ></ion-img>
              </center>

              <p id="texto_info">
                <strong>Bem vindo(a)</strong> Bem vindo(a) ao aplicativo de
                agendamento de consultas da
                <strong>Unimed Pelotas.</strong>
              </p>
            </ion-card-header>
            <ion-card-content>
              <ion-list id="form">
                <ion-item fill="outline" id="input">
                  <ion-label position="floating">E-mail</ion-label>
                  <ion-icon slot="end" :icon="mail"></ion-icon>
                  <ion-input
                    v-model="email"
                    type="email"
                    placeholder="Ex.: email@email.com"
                  ></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Senha</ion-label>
                  <ion-icon slot="end" :icon="fingerPrint"></ion-icon>
                  <ion-input
                    v-model="senha"
                    type="password"
                    placeholder="Sua senha"
                  ></ion-input>
                </ion-item>
              </ion-list>

              <ion-button id="btn-entrar" @click="loginSistema" expand="block">
                Acessar
              </ion-button>
              <br />
              <div id="texto_info">
                <p style="display: inline">Ainda não possui conta ?</p>
                <a style="cursor: pointer" @click="$router.push('/cadastro')"
                  >Clique aqui</a
                >
              </div>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-col>
      <ion-col></ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonImg,
  IonIcon,
  toastController,
  loadingController,
} from "@ionic/vue";

import { alert, thumbsUp, mail, fingerPrint } from "ionicons/icons";

import Provider from "@/services/provider";

export default defineComponent({
  name: "FormLogin",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonImg,
    IonIcon,
  },
  data() {
    return {
      email: "tigansi@unimedpelotas.com.br",
      senha: "teste",
    };
  },
  methods: {
    async loginSistema() {
      if (this.email == "") {
        this.toastAlert("O campo e-mail está vazio", "warning");
      } else if (this.senha == "") {
        this.toastAlert("O campo senha está vazio", "warning");
      } else {
        const loading = await loadingController.create({
          message: "Verificando...",
          spinner: "bubbles",
        });

        loading.present();

        const dados = {
          email: this.email,
          senha: this.senha,
        };

        Provider.Provider("post", "/usuarios/verificaUsuario/", dados, "")
          ?.then((res: any) => {
            if (res.data.sucesso) {
              loading.dismiss();
              this.toastAlert("Bem vindo", "success");
              this.$router.push(
                "/homePainelAdm/homeTabCadastroAdm/tabCadastroEspecialidadesPage"
              );
            } else {
              loading.dismiss();
              this.toastAlert(res.data.message, "warning");
            }
          })
          .catch((err) => {
            loading.dismiss();
            this.toastAlert(err, "warning");
          });
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
      alert,
      thumbsUp,
      mail,
      fingerPrint,
    };
  },
});
</script>

<style scoped>
#input {
  margin-bottom: 15px;
}

#login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#texto_info {
  text-align: center;
}

#form ion-label,
#form ion-input {
  font-family: "Poppins", sans-serif;
}

#img-logo {
  width: 210px;
}

#btn-entrar {
  --background: #b1d34b;
  --background-activated: #00995d;
  --background-hover: #00995d;
}
</style>
