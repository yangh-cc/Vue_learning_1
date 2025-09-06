import head from "@/views/head.vue";
import body from "@/views/body.vue";
import footer from "@/views/footer.vue";


export const routes = {
  routes: [
    { path: "/head", component: head },
    { path: "/body", component: body },
    { path: "/footer", component: footer },
  ],
};
