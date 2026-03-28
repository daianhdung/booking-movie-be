export default () => ({
  app: {
    port: Number(process.env.PORT ?? 8081),
    nodeEnv: process.env.NODE_ENV ?? 'development',
  },
});
