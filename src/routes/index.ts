import type { RouteDefinition } from "svelte-spa-router";
import Home from "./Home/Home.svelte";

const routes: RouteDefinition = {
  "/": Home,
};

export default routes;