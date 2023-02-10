import React from "react";
import { useInput } from "hooks";
import { wantedApi } from "api";

export default function Signin() {
    const email = useInput()
    const password = useInput()

    const signIn = async () => {
        await wantedApi.post('/auth/signin',
        {
            email: email.value,
            password: password.value
        },
        { headers: { "Content-Type": 'application/json' } })
        .then((res) => {
            localStorage.setItem('JWT',res.data.access_token)
            
        })
        .catch((error) => {
            if(error.response) {
                if(error.response.data.message === "동일한 이메일이 이미 존재합니다.") {
                    window.alert("동일한 이메일이 이미 존재합니다.")
                } else {
                    window.alert(error.response.data.message)
                }
            }
        })
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems:' center'}}>
            <div>
                <input {...email} data-testid="email-input" />
                <input {...password} data-testid="password-input" />
                <button onClick={signIn} data-testid="signin-button">회원가입</button>
            </div>
        </div>
    );
}