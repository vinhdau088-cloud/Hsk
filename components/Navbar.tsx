"use client";

import Link from "next/link";


export default function Navbar(){

return (

<nav className="navbar">


<div className="logo">
🐉 Hanzi Master
</div>


<div className="links">

<Link href="/">
Trang chủ
</Link>


<Link href="/learn">
📚 Học
</Link>


<Link href="/exam">
📝 Thi
</Link>


<Link href="/dictionary">
📖 Từ điển
</Link>


<Link href="/login">
👤 Đăng nhập
</Link>


</div>


</nav>

);

}
