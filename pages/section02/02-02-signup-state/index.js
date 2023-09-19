import { useState } from 'react'

export default function SignupStatPage(){

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [emailError, setEmailError] = useState("");


    function onChangeEmail(event){ //***** 이벤트 헨들러 함수 *****//

        console.log(event) // 나의 행동
        console.log(event.target) // 작동된 태그
        console.log(event.target.value) //작동된 태그에 입력된 값

        setEmail(event.target.value)
   
    }
    function onChangePassword(event){
        console.log(event)
        setPassword(event.target.value)
    }
  
    function onClickSignup(event){

        //진짜 포장이 잘 되었는지 확인하기 
        console.log(email)
        console.log(password)
        
        // 1. 검증하기
        if(email.includes("@") === false){
            // alert("이메일이 올바르지 않습니다. @가 없음")
            // document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다. @가 없음" ==> 옛날 방식 
            setEmailError("이메일이 올바르지 않습니다. @가 없음")
        }else{
            // 3. 성공알람 보여주기
            alert("회원가입을 축하힙니다.")
        }
        // 2. 백엔드 컴퓨터에 보내주기 ( 백엔드 개발자가 만든 함수, 즉 . API ) ==> 나중에 배울 것

    }

    return(
        <div>
            이메일 :  <input type="text" onChange={onChangeEmail} />
            <div>{emailError}</div>
            {/* <div id='myerror'></div>  ==> 옛날방식 */}
            비밀번호 : <input type="password"  onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}