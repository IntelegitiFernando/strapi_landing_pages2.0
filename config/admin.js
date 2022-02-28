module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd6964a8463de93497cef43f1f489bf2d'),
  },
});
