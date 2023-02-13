import React, { useEffect, useState } from "react"
import { useInput } from "hooks"
import { wantedApi } from "api"
import { useNavigate } from "react-router-dom"
import useValidate from "hooks/useValidate"

export default function Signin() {
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

    const signIn = () => {
        wantedApi.post('/auth/signin',
        {
            email: email.value,
            password: password.value
        })
        .then((res: any) => {
            //Assignment 3 : 로그인 완료시 TODO 페이지로 이동
            window.alert('로그인이 완료되엇습니다.')
            localStorage.setItem('JWT',res.data.access_token)
            navigate('/todo')
        })
        .catch(() => {
            window.alert('로그인에 실패했습니다.')
        })
    }

    return(
            <div>
                <input data-testid="email-input" {...email}/>
                <input data-testid="password-input" {...password}/>
                <button data-testid="signin-button" disabled={!enable} onClick={signIn}>로그인</button>
            </div>
    )
}