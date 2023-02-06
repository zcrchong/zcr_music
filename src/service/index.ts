import { BASE_URL, TIME_OUT } from "./config";
import ZCRRequest from "./request";

const zcrRequest = new ZCRRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
  },
});

export default zcrRequest;
