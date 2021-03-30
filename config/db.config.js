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
    pg: {
        client: "pg",
        connection: {
            host: "ec2-18-206-20-102.compute-1.amazonaws.com",
            user: "somrzhgcguapoz",
            password: "db532ff4dd3189b8a3b8cac9a47c77ee3ec94aaebd69ee1549c0723c2a2cd914",
            database: "deq0uj5ji8fa9b",
            port: 5432,
        },
        pool: { min: 0, max: 50 },
    },
};

module.exports = db;
