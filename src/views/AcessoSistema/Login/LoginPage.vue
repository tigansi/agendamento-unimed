<template>
  <ion-page>
    <ion-content id="corpo">
      <FormLogin />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import FormLogin from "./FormLogin.vue";
import { IonPage, IonContent } from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonContent,

    FormLogin,
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
