import app from "../../app";

async function start() {
  try {
    const port = 3000;
    const host = "192.168.1.102";

    app.listen(port, host, () => {
      console.log("Server rodando");
    });
  } catch (err) {
    //
  }
}



start();