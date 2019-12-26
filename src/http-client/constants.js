const PROD_BASE_URL = "";
const DEV_BASE_URL = "https://localhost:44345/api/";

const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
