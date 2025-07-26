module.exports = {
  apps: [
    {
      name: "teplosnami",
      exec_mode: "cluster",
      instances: 1,
      script: "./.output/server/index.mjs",
      args: "start",
      port: 8800,
    },
  ],
};
