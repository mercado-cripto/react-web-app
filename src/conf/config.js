const config = {
  apiGateway: {
    REGION: process.env.REACT_APP_apiGateway_REGION,
    URL: process.env.REACT_APP_apiGateway_URL,
  },
};

console.log("Config:", config);

export default {
  ...config,
};
