"use client";

import { useState } from "react";

export default function LoginPage(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

function login(){

alert(
"Đăng nhập: "+email
);

}


return (

<div className="login-page">

<div className="login-box">

<h1>
🐉 Hanzi Master
</h1>

<p>
Đăng nhập để lưu tiến độ học
</p>


<input
type="email"
placeholder="Email"
value={email}
onChange={
e=>setEmail(e.target.value)
}
/>


<input
type="password"
placeholder="Mật khẩu"
value={password}
onChange={
e=>setPassword(e.target.value)
}
/>


<button onClick={login}>
Đăng nhập
</button>


<button className="google">
🔵 Đăng nhập Google
</button>


<p>
Chưa có tài khoản?
<a href="#">
 Đăng ký
</a>
</p>


</div>

</div>

)

}
