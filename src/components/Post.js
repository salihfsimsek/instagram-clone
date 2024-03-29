import React from "react";

import "../styles/Post.css";

import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";

import Comment from "./Comment";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post_top">
        <div className="post_top_left">
          <Avatar src="https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45272559_1988360334585183_7363615059831947264_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=L85Jz2IApt8AX-45JLO&tp=1&oh=037376beb01001f4e7d0629d2d0eb449&oe=60572FD9" />
          <h5>{post.user}</h5>
        </div>
        <div className="post_top_right">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="post_center">
        <div className="post_center_image">
          <img src={post.photo} alt="" />
        </div>
      </div>
      <div className="post_bottom">
        <div className="post_bottomTop">
          <div className="post_bottomTop_left">
            <FavoriteBorderOutlinedIcon />
            <ModeCommentOutlinedIcon />
            <SendOutlinedIcon />
          </div>
          <div className="post_bottomTop_right">
            <TurnedInNotOutlinedIcon />
          </div>
        </div>
        <div className="post_bottomCenter">
          <div className="post_bottomCenter_likes">
            <h4>122 likes</h4>
          </div>
          <Comment username={post.user} comment={post.description} />
          <div className="post_bottomCenter_description">
            {
              post.comments.map(comment=>(
                <Comment key={comment.id} username={comment.name} comment={comment.text} heart/>
              ))
            }
            <div>
              <h5 className="description_time">6 hours ago</h5>
            </div>
          </div>
        </div>
        <div className="post_bottomBottom">
          <form className="comment_form">
            <SentimentSatisfiedOutlinedIcon />
            <input type="text" placeholder="Add a comment" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
