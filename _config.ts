import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import code_highlight from "lume/plugins/code_highlight.ts";

const site = lume({
  src: "./src",
  location: new URL("https://notes.mackieburgess.com"),
  server: {
    page404: "./index.html",
  }
});

site
  .use(code_highlight())
  .use(date())
  .copy("assets");

export default site;
