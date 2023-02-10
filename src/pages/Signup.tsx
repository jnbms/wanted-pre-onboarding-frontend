import {wantedApi} from "api";
import { useInput } from "hooks";

export default function Signup() {
    const email = useInput()
    const password = useInput()

    const signUp = async () => {
        await wantedApi.post('/auth/signup',
        {
            email: email.value,
            password: password.value
        },
        { headers: { "Content-Type": 'application/json' } })
        .then((res: any) => console.log(res.message))
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
        <div style={{display: 'grid', justifyContent: 'center'}}>
            <div>회원 가입</div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems:' center'}}>
                <input {...email} data-testid="email-input" />
                <input {...password} data-testid="password-input" />
                <button data-testid="signin-button" onClick={signUp}>회원가입</button>
            </div>
        </div>
    );
}