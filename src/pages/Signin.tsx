import React, { useEffect, useState } from "react";
import { useInput } from "hooks";
import { wantedApi } from "api";
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const email = useInput()
    const password = useInput()
    const [loginDisabled, setloginDisabled] = useState(false)

    const navigate = useNavigate()
    
    // 로컬 스토리지에 JWT가 저장되어 있는 경우 todo 페이지로 이동
    useEffect(() => {
        if(window.localStorage.JWT !== undefined)
            navigate('/todo')
    })

    // 유효성 검사
    useEffect(() => 
        email.value.includes('@') && password.value.length >= 8
        ? setloginDisabled(false)
        : setloginDisabled(true)
    ,[email, password])

    const signIn = () => {
        wantedApi.post('/auth/signin',
        {
            email: email.value,
            password: password.value
        },
        { headers: { "Content-Type": 'application/json' } })
        .then((res: any) => {
            localStorage.setItem('JWT',res.data.access_token)
            window.alert('로그인이 완료되엇습니다.')
            navigate('/todo')
        })
        .catch(() => {
            window.alert('로그인에 실패했습니다.')
        })
    }

    return(
        <div style={{height: '100vh', width: '100vw', display: 'grid', alignContent: 'center'}}>
            <div style={{display: 'flex', width: 300, height: 150, flexDirection: 'column', alignItems:' center', border: '1px solid'}}>
                <input {...email} data-testid="email-input" />
                <input {...password} data-testid="password-input" />
                <button disabled={loginDisabled} onClick={signIn} data-testid="signin-button">로그인</button>
            </div>
        </div>
    );
}