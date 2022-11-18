import CommentItem from "../CommentItem/CommentItem";
import "./commentBlock.scss";
import { useState } from "react";

function CommentBlock() {

  const [comment, setComment] = useState('')

  const [comments, setComments] = useState(() => {
    const stComments = JSON.parse(localStorage.getItem('comments'))
    return (stComments ?? [])
  })

  const handleSubmit = () => {
    setComments(prev => {
      const newComments = [...prev, comment]

      // save to local storage
      const jsonComments = JSON.stringify(newComments)
      localStorage.setItem('comments', jsonComments)

      return newComments
    })
    setComment('')
    console.log(comment)
  }

  return (
    <div className="comment-block">
      <h3 className="title">Đánh giá sản phẩm</h3>
      <div className="input-text">
        <div className="cmt-input">
          <textarea className="input" type="text" placeholder="Bình luận..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button className="submit-btn" type="submit"
            onClick={handleSubmit}
          >
            Gửi
          </button>

        </div>
        <ul style={{ clear: "both" }}>
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
        </ul>

      </div>
    </div>
  );
}

export default CommentBlock;
