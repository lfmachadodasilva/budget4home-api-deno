// import { opine } from "https://deno.land/x/opine@1.1.0/mod.ts";

// const app = opine();

// app.get("/", function(req, res) {
//   res.send("Hello World");
// });

// await app.listen(3000, () => {
//     console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
//     console.log('  Press CTRL-C to stop\n');
// });

import { Application } from "https://deno.land/x/oak/mod.ts";

const port = +(Deno.env.get("PORT") || 5000);
const app = new Application();

app.use((ctx: any) => {
  ctx.response.body = "Hello World!";
});

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
