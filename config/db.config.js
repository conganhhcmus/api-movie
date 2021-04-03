const db = {
    localhost_mysql: {
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
    aws_mysql: {
        client: "mysql2",
        connection: {
            host: "aws-mysql.czx6heilghpe.us-east-2.rds.amazonaws.com",
            user: "conganhhcmus",
            password: "conganhhcmus",
            database: "sakila",
            port: 3306,
        },
        pool: { min: 0, max: 50 },
    },
};

module.exports = db;
