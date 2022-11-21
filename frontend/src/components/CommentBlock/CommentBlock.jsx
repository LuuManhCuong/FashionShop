import CommentItem from "../CommentItem/CommentItem";
import "./commentBlock.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { Link } from "react-router-dom";

function CommentBlock() {
  const checkUser = useSelector(userSelector);
  const user = checkUser.login.currentUser;
  // console.log("user: ", user);

  const [comment, setComment] = useState("");

  // const [comments, setComments] = useState(() => {
  //   const stComments = JSON.parse(localStorage.getItem('comments'))
  //   return (stComments ?? [])
  // })

  // const handleSubmit = () => {
  //   setComments(prev => {
  //     const newComments = [...prev, comment]

  //     // save to local storage
  //     const jsonComments = JSON.stringify(newComments)
  //     localStorage.setItem('comments', jsonComments)

  //     return newComments
  //   })
  //   setComment('')
  //   console.log(comment)
  // }

  return (
    <div className="comment-block">
      <h3 className="title">Bình luận</h3>
      <div className="input-text">
        {user ? (
          <div className="cmt-input">
            <textarea
              className="input"
              type="text"
              placeholder="Bình luận..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="submit-btn"
              type="submit"
              // onClick={handleSubmit}
            >
              Gửi
            </button>
          </div>
        ) : (
          <Link to="/login">Đăng nhập để bình luận</Link>
        )}

        {/* <ul style={{ clear: "both" }}>
          {comments.map((comment, index) => (

            <li key={index}>
              <div className="comment">
                <div className="res-wrap">
                  <img
                    src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-hai-1.jpg"
                    alt="avatar"
                    className="avatar"
                  />
                  <div className="user-info">
                    <h3 className="username">
                      Mai Trinh
                      <span> 01/10/2022</span>
                    </h3>
                    <p className="text-comment">
                      {comment}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul> */}
        <CommentItem></CommentItem>
        <CommentItem></CommentItem>
        <CommentItem></CommentItem>
        <CommentItem></CommentItem>
        <CommentItem></CommentItem>
      </div>
    </div>
  );
}

export default CommentBlock;
