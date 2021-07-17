const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// Create associations
// User to multiple posts relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Post to user relationship
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// User to multiple votes relationship
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

// Votes to multiple users relationship
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };