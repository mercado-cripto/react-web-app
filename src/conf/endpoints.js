import config from "./config";
const endpoints = [
  {
    name: "getData",
    endpoint: config.apiGateway.URL,
    region: config.apiGateway.REGION,
  },
];
export default endpoints;
