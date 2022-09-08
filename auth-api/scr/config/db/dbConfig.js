import Sequelize from "sequelize";

const sequelize = new Sequelize("auth-db", "jndadev", "358614", {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        synOnAssociation: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true,
        FreezeTableName: true,
    },

});

sequelize.authenticate().then(() => {
    console.info("Connection has been stablished!");
})
.catch((err) => {
    console.error("Unable to connect to database!");
    console.error(err.message);
});

export default sequelize;