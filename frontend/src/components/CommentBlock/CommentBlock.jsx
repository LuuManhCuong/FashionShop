import CommentItem from "../CommentItem/CommentItem";
import "./commentBlock.scss";
import { fetchGetComment } from "../../api/api";
import { useEffect, useState } from "react";

// import io from "socket.io-client";

function CommentBlock({ id }) {
  // const socket = io.connect(`http://localhost:5000`);

  const [listComment, setListComment] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchGetComment(id).then((res) => setListComment(res.data));
  }, []);

  function postComment() {
    // socket.emit("send_comment", "minh duy gui");
  }

  // function postComment() {
  //   fetch("http://localhost:5000/comment", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     method: "post",
  //     body: JSON.stringify({
  //       // id user wait from redux
  //       idFeedback: id,
  //       comment,
  //       idUser: "3",
  //     }),
  //   });
  // }
  return (
    <div className="comment-block">
      <h3 className="title">Đánh giá sản phẩm</h3>
      <div className="input-text">
        <textarea
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
          className="input"
          type="text"
          placeholder="Bình luận..."
        />
        <button
          onClick={() => {
            postComment();
            // setComment("");
          }}
          className="submit-btn"
          type="submit"
        >
          Gửi
        </button>
      </div>

      {listComment.map((value, index) => {
        console.log("comment", value);
        return <CommentItem key={index} item={value}></CommentItem>;
      })}
    </div>
  );
}

export default CommentBlock;
