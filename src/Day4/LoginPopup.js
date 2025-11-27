

const LoginPopup = ({onClose, textID, textPwd, textEmail}) => {
  return (
    <div  className="login_popup">
      <div>
        <h2>재희 UP~!</h2>
        <p>입력한 아이디 : {textID}</p>
        <p>입력한 비밀번호 : {textPwd}</p>
        <p>입력한 비밀번호 : {textEmail}</p>
        <button onClick={onClose}>×</button>
      </div>
    </div>
  )
}

export default LoginPopup