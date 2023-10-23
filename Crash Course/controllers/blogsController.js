const blogsCreateGet = (req, res) => {
    res.render('create', {
        title: 'Create a blog'
      });
}

const blogsCreatePost = (req, res) => {
    console.log(req.body);
    res.redirect('/');
}

module.exports = {
    blogsCreateGet,
    blogsCreatePost
}