module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e948a5a5e0a975352de8f9396cc683f8'),
  },
});
