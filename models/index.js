const User = require('./User');
const Post = require('./Post');

// Create associations
// User to multiple posts relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Post to user relationship
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };