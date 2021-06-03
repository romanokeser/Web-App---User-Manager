const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
title: { type: String, required: true },
content: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema);

function getClasses(req, res, next) {
    Post.findOne({title: req.post.title}, (err, post) => {
       if (err || !post) {
           res.status('400').json({status: 'post-missing'});
       }
       req.postDocument = post;
       next();
    });
  }

module.exports = mongoose.model("Post", postSchema,getClasses);