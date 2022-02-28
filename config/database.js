module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgresql-70496-0.cloudclusters.net'),
      port: env.int('DATABASE_PORT', 19372),
      database: env('DATABASE_NAME', 'strapi_database'),
      user: env('DATABASE_USERNAME', 'strapi_database'),
      password: env('DATABASE_PASSWORD', 'strapi_database'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
