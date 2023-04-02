import CommentItem from "../CommentItem/CommentItem";
import "./commentBlock.scss";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, reloadApiSlector } from "../../redux/selectors";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { reloadApi } from "../../redux/reducer/adminSlice";
import { HOT_URL } from "../../api/api";

function CommentBlock() {
  const checkUser = useSelector(userSelector);
  const user = checkUser.login.currentUser;

  const reload = useSelector(reloadApiSlector);
  const dispath = useDispatch();

  const navigate = useNavigate();
  // console.log("user: ", user);

  const params = useParams();
  // console.log(params);

  const [mess, setMess] = useState("");
  const [dataCommnent, setDataComment] = useState([]);
  const [err, setErr] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    // if (!user) {
    //   navigate("/login");
    // } else {
    axios
      .get(`${HOT_URL}/comment/${params.id}`)

      .then((res) => setDataComment(res.data))
      .catch((errors) => console.log(errors));
    // }
  }, [user, reload, navigate, params.id]);

  // console.log(dataCommnent)S
  const onSubmit = (data) => {
    if (data.comment.length <= 0) {
      setErr("Vui lòng nhập nội dung!!!");
    } else {
      setErr("");
      axios
        .post(
          `${HOT_URL}/create/comment?idUser=${user.idUser}&idFeedback=${params.id}`,
          data,
          {
            headers: {
              token: `Bearer ${user.accessToken}`,
            },
          }
        )
        .then((res) => {
          setMess("");
          dispath(reloadApi.actions.setReload());
        })

        .catch((errors) => console.log(errors));
    }
  };

  return (
    <div className="comment-block">
      <h3 className="title">Bình luận</h3>

      <div className="input-text">
        {user ? (
          <div className="cmt-input">
            <form
              onSubmit={handleSubmit((data) => {
                let setData = {
                  comment: mess,
                };
                onSubmit(setData);
              })}
            >
              <input
                {...register("text", { required: true })}
                type="text"
                value={mess}
                min={1}
                onChange={(e) => {
                  setMess(e.target.value);
                }}
                style={{
                  border: "1px solid black",
                  width: "300px",
                  color: "black",
                }}
              />
              {errors?.text?.type === "required" && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  Vui lòng nhập trường này{" "}
                </p>
              )}
              <p
                style={{
                  color: "red",
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
              >
                {err}
              </p>

              <input type="submit" />
            </form>
          </div>
        ) : (
          <Link to="/login">Đăng nhập để bình luận</Link>
        )}

        {dataCommnent.length <= 0 ? (
          <h3>Chưa có bình luận</h3>
        ) : (
          <div className="coment-item-block">
            {dataCommnent.map((comment, index) => (
              <CommentItem key={index} data={comment}></CommentItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentBlock;
