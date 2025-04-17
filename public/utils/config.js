const CONFIG = {
    development: {
      SOCKET_URL: "https://localhost:3000",
      //WEB_URL: "http://localhost:4000",
    },
    production: {
      SOCKET_URL: "https://hitcore.app",
      //SOCKET_URL: "https://18.222.205.229:3000",
      //WEB_URL: "https://your-server-ip:4000",
    },
  };
  //Important Learning!!:
//This allows us to have different ip addresses for dev and production builds
// Had to install "cross-env" module in the dev to allow the command to work in windows
//You set this variable in the package.json run scripts

  export default CONFIG[process.env.NODE_ENV || "development"];