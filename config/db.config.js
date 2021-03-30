const db = {
    mysql: {
        client: "mysql2",
        connection: {
            host: "127.0.0.1",
            user: "docker",
            password: "docker",
            database: "sakila",
            port: 3307,
        },
        pool: { min: 0, max: 50 },
    },
};

module.exports = db;
