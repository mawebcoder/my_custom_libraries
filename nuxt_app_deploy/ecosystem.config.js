module.exports = {
  apps: [
    {
      name: 'kharazm',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      // script: "npm run start",
      env: { "HOST": "127.0.0.1", "PORT": 3001, "NODE_ENV": "production", }
    }
  ]
}

