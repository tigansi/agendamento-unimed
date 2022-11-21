<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar :translucent="true" slot="bottom">
          <ion-tab-button
            tab="tabCadastroEspecialidadesPage"
            href="/homePainelAdm/homeTabCadastroAdm/tabCadastroEspecialidadesPage"
          >
            <ion-icon :icon="reader"></ion-icon>
            <ion-label>Especialidades</ion-label>
          </ion-tab-button>

          <ion-tab-button
            tab="tabCadastroMedicosPage"
            href="/homePainelAdm/homeTabCadastroAdm/tabCadastroMedicosPage"
          >
            <ion-icon :icon="medical"></ion-icon>
            <ion-label>Médicos</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonTabs,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonTabBar,
  IonRouterOutlet,
} from "@ionic/vue";

import { medical, reader } from "ionicons/icons";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonTabs,
    IonTabButton,
    IonLabel,
    IonIcon,
    IonTabBar,
    IonRouterOutlet,
  },
  setup() {
    return {
      medical,
      reader,
    };
  },
});
</script>
