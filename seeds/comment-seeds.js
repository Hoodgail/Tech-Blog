const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "at diam",
        post_id: 4,
        user_id: 1,
    },
    {
        comment_text: "at turpis a",
        post_id: 9,
        user_id: 2,
    },
    {
        comment_text: "vestibulum",
        post_id: 7,
        user_id: 3,
    },
    {
        comment_text: "cubilia curae mauris viverra diam vitae",
        post_id: 15,
        user_id: 2,
    },
    {
        comment_text: "tristique fusce congue diam id ornare imperdiet sapien",
        post_id: 1,
        user_id: 2,
    },
    {
        comment_text: "sit amet nulla quisque arcu",
        post_id: 2,
        user_id: 4,
    },
    {
        comment_text: "mauris laoreet",
        post_id: 12,
        user_id: 6,
    },
    {
        comment_text: "pede venenatis non sodales sed",
        post_id: 15,
        user_id: 7,
    },
    {
        comment_text: "pellentesque eget nunc donec quis orci eget",
        post_id: 4,
        user_id: 10,
    },
    {
        comment_text: "nec sem duis aliquam convallis nunc proin",
        post_id: 10,
        user_id: 9,
    },
    {
        comment_text: "quis orci eget orci vehicula condimentum curabitur in",
        post_id: 15,
        user_id: 5,
    },
    {
        comment_text: "justo aliquam quis",
        post_id: 15,
        user_id: 4,
    },
    {
        comment_text: "eu nibh quisque",
        post_id: 1,
        user_id: 1,
    },
    {
        comment_text: "morbi",
        post_id: 13,
        user_id: 9,
    },
    {
        comment_text: "lacinia nisi",
        post_id: 4,
        user_id: 7,
    },
    {
        comment_text: "condimentum id luctus",
        post_id: 9,
        user_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
