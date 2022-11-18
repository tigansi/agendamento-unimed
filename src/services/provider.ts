import config from "./config";

const provider = {
  async Provider(tipo: string, url: string, data: any, token: string) {
    try {
      switch (tipo) {
        case "post":
          return config.post(url, data, { timeout: 10000 });
      }
    } catch (err) {
      //
    }
  },
};

export default provider;
