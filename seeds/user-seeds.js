const { User } = require("../models");

const userData = [
    {
        username: "acritoph0",
        email: "cmoyles0@buzzfeed.com",
        password: "password1234",
    },
    {
        username: "jkornousek1",
        email: "rcoale1@hatena.ne.jp",
        password: "password1234",
    },
    {
        username: "rlavell2",
        email: "ldemendoza2@utexas.edu",
        password: "password1234",
    },
    {
        username: "lcaselli3",
        email: "clanham3@ucla.edu",
        password: "password1234",
    },
    {
        username: "kmattheus4",
        email: "dskitterel4@ifeng.com",
        password: "password1234",
    },
    {
        username: "ecollyns5",
        email: "atruse5@newyorker.com",
        password: "password1234",
    },
    {
        username: "drosell6",
        email: "dprusernamedle6@wp.com",
        password: "password1234",
    },
    {
        username: "mschuricht7",
        email: "pwoodworth7@wikispaces.com",
        password: "password1234",
    },
    {
        username: "gtarte8",
        email: "bflude8@foxnews.com",
        password: "password1234",
    },
    {
        username: "vdomenichini9",
        email: "lreeman9@meetup.com",
        password: "password1234",
    },
    {
        username: "bsotherona",
        email: "kaubrya@lulu.com",
        password: "password1234",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
