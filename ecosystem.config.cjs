module.exports = {
  apps: [
    {
      name: 'talavera-brandbook',
      script: 'npx',
      args: 'next dev -p 3000',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
