module.exports = {
  apps: [
    {
      name: process.env.APP_NAME,
      script: './scripts/www',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'development',
      },
    },
  ],
}
