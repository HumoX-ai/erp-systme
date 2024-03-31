const URL = import.meta.env.VITE_URL_DEV || "http://localhost:3000";      

const appConfig = {
  apiPrefix: URL,
  authenticatedEntryPath: import.meta.env.VITE_MAIN_PATH || "/dashboard",
  unAuthenticatedEntryPath: import.meta.env.VITE_AUTH_PATH || "/login",
};

export default appConfig;
