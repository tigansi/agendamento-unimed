<template>
  <ion-menu content-id="main" side="start" type="push" id="main-menu">
    <ion-header>
      <ion-toolbar>
        <ion-title>Agendamento</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-menu-toggle auto-hide="false">
          <ion-item
            @click="$router.push('/homeEstante/homeTabsEstante/tabEstante')"
            button
          >
            <ion-icon slot="start" :icon="fileTrayFull"></ion-icon>
            <ion-label>
              <span>Cadastros</span>
            </ion-label>
          </ion-item>
          <ion-item button>
            <ion-icon slot="start" :icon="exit"></ion-icon>
            <ion-label>
              <span>Sair</span>
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonLabel,
} from "@ionic/vue";

import { fileTrayFull, exit } from "ionicons/icons";

export default defineComponent({
  name: "MenuAdm",
  components: {
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuToggle,
    IonLabel,
  },
  setup() {
    return {
      fileTrayFull,
      exit,
    };
  },
});
</script>
