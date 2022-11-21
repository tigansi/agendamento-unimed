<template>
  <ion-page>
    <ion-content>
      <ion-split-pane contentId="main">
        <MenuAdm />
        <ion-router-outlet id="main"></ion-router-outlet>
      </ion-split-pane>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonSplitPane, IonRouterOutlet } from "@ionic/vue";

import MenuAdm from "./menu/MenuAdm.vue";

export default defineComponent({
  components: {
    IonPage,

    IonContent,
    IonSplitPane,
    IonRouterOutlet,

    MenuAdm,
  },
  setup() {
    //
  },
});
</script>
