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
                  border: "1px solid grey",
                  width: "360px",
                  color: "black",
                  height: "30px",
                  fontSize:"1.4rem",
                  paddingLeft: "5px"
                }}
              />
              {errors?.text?.type === "required" && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "5px",
                    fontSize: "13px"
                  }}
                >
                  Vui lòng nhập trường này !{" "}
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

              <input type="submit" style={{width: "50px", height:"30px", background: "var(--primary-color)", color: "white", fontSize: "1.4rem"}}/>
            </form>
          </div>
        ) : (
          <Link to="/login"><button
          style={{fontSize: "1.4rem", marginLeft: "20px", height: "30px", width: "170px",
          backgroundColor: "var(--primary-color)", color: "white"}}
          >Đăng nhập để bình luận</button></Link>
        )}

        {dataCommnent.length <= 0 ? (
          <h5 style={{paddingLeft: "20px", paddingTop: "20px"}}>Chưa có bình luận</h5>
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
