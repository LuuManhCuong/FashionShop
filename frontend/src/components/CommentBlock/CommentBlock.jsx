import CommentItem from "../CommentItem/CommentItem";
import "./commentBlock.scss";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, reloadApiSlector } from "../../redux/selectors";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from 'react';
import {navigate} from 'react-dom';
import { reloadApi } from "../../redux/reducer/adminSlice";



function CommentBlock() {
  
  const checkUser = useSelector(userSelector);
  const user = checkUser.login.currentUser;

  const reload = useSelector(reloadApiSlector);
  const dispath = useDispatch();

  const navigate = useNavigate();
  // console.log("user: ", user);

  const params = useParams();
  // console.log(params);

  const [dataCommnent, setDataComment] = useState([]);


  const { register, formState: { errors }, handleSubmit } = useForm();

  useEffect(() => {
    if(!user ) {
      navigate("/login");
    }else{
      axios.get( `http://localhost:5000/comment/${params.id}`,
    {
      withCredentials: true,
      headers: {
        token: `Bearer ${user.accessToken}`,
      },
    })
    
    .then(res => setDataComment(res.data))
    .catch(errors => console.log(errors))
    }

  }, [user, reload])

  // console.log(dataCommnent)

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`http://localhost:5000/create/comment?idUser=${user.idUser}&idFeedback=${params.id}`,
      data, {
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
    })
      .then(res => dispath(reloadApi.actions.setReload()))

      .catch(
        errors => console.log(errors)
      )
  };



  return (

    <div className="comment-block">
      <h3 className="title">Bình luận</h3>






      <div className="input-text">
        {user ? (
          <div className="cmt-input">

            <form onSubmit={handleSubmit(onSubmit)}>

              <input style={{ border: "1px solid black", width: "300px" }}
                {...register("comment", { required: true })}
                aria-invalid={errors.comment ? "true" : "false"}
              />
              {errors.comment?.type === 'required' && <p style={{ color: "red" }} role="alert">Vui long nhập nội dung</p>}

              <input type="submit" />

            </form>

          </div>
        ) : (
          <Link to="/login">Đăng nhập để bình luận</Link>
        )}


        {dataCommnent.length <= 0 ? <h3>chua cos binh luan</h3>: 
          <>
            {dataCommnent.map((comment, index) => 
              <CommentItem key={index} data={comment}></CommentItem>
            )}
          </>
        }

        
      </div>
    </div>
  );
}

export default CommentBlock;
