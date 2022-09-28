import "./inputText.scss";
function InputText() {
  return (
    <div className="input-text">
      <textarea className="input" type="text" placeholder="Bình luận..." />
      <button className="submit-btn" type="submit">Gửi</button>
    </div>
  );
}

export default InputText;
