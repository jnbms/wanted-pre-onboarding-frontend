import {wantedApi} from "api"
import { useInput, useValidate } from "hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup() {
    const email = useInput()
    const password = useInput()
    // Assignment 1 : 이메일의 @ 포함 여부, 패스워트 8자리 이상 유효성 체크
    const enable = useValidate(email.value.includes('@') && password.value.length >= 8)
    
    // Assignment 4 : 로그인 여부에 따른 리다이렉트
    const navigate = useNavigate()
    useEffect(() => {
        if(window.localStorage.JWT !== undefined)
            navigate('/todo')
    })

    const signUp = () => {
        wantedApi.post('/auth/signup',
        {
            email: email.value,
            password: password.value
        })
        .then(() => {
            //assignment 2 : 회원 가입 완료시 signin 페이지로 이동
            window.alert('회원가입이 완료되었습니다.')
            navigate('/signin')
        })
        .catch(() => {
            window.alert('회원가입에 실패했습니다.')
        })
    }

    return(
            <div>
                <input data-testid="email-input" {...email}/>
                <input data-testid="password-input" {...password}/>
                <button data-testid="signup-button" disabled={!enable} onClick={signUp}>회원가입</button>
            </div>
    )
}