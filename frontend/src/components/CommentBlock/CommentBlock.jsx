import CommentItem from "../CommentItem/CommentItem";
import "./commentBlock.scss";
function CommentBlock() {
  return (
    <div className="comment-block">
      <h3 className="title">Đánh giá sản phẩm</h3>
      <div className="input-text">
        <textarea className="input" type="text" placeholder="Bình luận..." />
        <button className="submit-btn" type="submit">
          Gửi
        </button>
      </div>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
    </div>
  );
}

export default CommentBlock;
