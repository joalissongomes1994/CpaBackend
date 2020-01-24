module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'cpabackend',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};