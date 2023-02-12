import {wantedApi} from "api";
import { useInput } from "hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const email = useInput()
    const password = useInput()
    const [loginDisabled, setloginDisabled] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(window.localStorage.JWT !== undefined)
            navigate('/todo')
    })

    useEffect(() => 
        email.value.includes('@') && password.value.length >= 8
        ? setloginDisabled(false)
        : setloginDisabled(true)
    ,[email, password])

    const signUp = () => {
        wantedApi.post('/auth/signup',
        {
            email: email.value,
            password: password.value
        },
        { headers: { "Content-Type": 'application/json' } })
        .then(() => {
            window.alert('회원가입이 완료되었습니다.')
            navigate('/signin')
        })
        .catch(() => {
            window.alert('회원가입에 실패했습니다.')
        })
    }
    return(
        <div style={{display: 'grid', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems:' center'}}>
                <input {...email} data-testid="email-input" />
                <input {...password} data-testid="password-input" />
                <button disabled={loginDisabled} data-testid="signup-button" onClick={signUp}>회원가입</button>
            </div>
        </div>
    );
}