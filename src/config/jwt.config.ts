export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET ?? 'change_me_super_secret',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
  },
});
