module.exports = {
  type: "postgres",
  database: "retrievo_dev",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  logging: true,
  synchronize: true, // projection에선 제외해야함,
  entities: ["src/entities/**/*{.ts,.js}"],
  seeds: ["src/seeder/index.seed.ts"],
  factories: ["src/seeder/index.factory.ts"],
};
