import { createApp } from "vue";
import App from "./app.vue";
import PiesButton from "@pies-ui/components/button";

const app = createApp(App);
app.use(PiesButton);

app.mount("#play");
