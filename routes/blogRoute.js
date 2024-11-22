const { Router } = require("express");
const validator = require("../middlewares/auth");
const {
  createBlog,
  allBlogs,
  singleBlog,
  sortBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const blogRouter = Router();

blogRouter.get("/", allBlogs);
blogRouter.get("/blog/sort", validator, sortBlog);
blogRouter.get("/blog/:id", validator, singleBlog);
blogRouter.post("/blog/create", validator, createBlog);
blogRouter.patch("/blog/update/:id", validator, updateBlog);
blogRouter.delete("/blog/delete/:id", validator, deleteBlog);
module.exports = blogRouter;
