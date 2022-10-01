const app = require("express")();
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));

app.get("/call", (req, res) => {
  console.log("Connectd Call!!");

  return res.json({
    data: "Backend에서 온 이브이 왜안줘???",
  });
});

app.listen(4000, () => {
  console.log("🍏http://localhost:4000 , NEXT.JS SERVER START🍏");
});
