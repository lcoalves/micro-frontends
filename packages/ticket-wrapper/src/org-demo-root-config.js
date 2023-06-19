import { registerApplication, start } from "single-spa";

fetch("https://run.mocky.io/v3/f95eb3c6-269b-4fa6-9fad-0542cf35badb")
  .then((resp) => resp.json())
  .then((data) => {
    data.applications.forEach((app) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen],
      });
    });
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });
