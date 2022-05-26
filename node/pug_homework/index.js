const expess = require("express");
const app = expess();
app.use(expess.json());

const pug = require("pug"); // View engine
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index.pug");
});
app.get("/about", (req, res) => {
  res.render("about.pug");
});
app.get("/user", (req, res) => {
  res.render("user.pug");
});

try {
  const port = process.env.port || 3000;
  app.listen(port, () => {
    console.log(`server working on port ${port}...`);
  });
} catch (error) {
  console.log(error);
}
