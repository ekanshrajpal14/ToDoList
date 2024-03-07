import React from 'react'
import Link from 'next/link'
import style from "@/component/navbar/nav.module.css";
const Nav = () => {
    return (
        <>
            <nav className={style.navbar}>
                <div className={style.navigation}>
                    <h1>To do list</h1>


                    <Link href="/done">Done tasks</Link>



                </div>
            </nav>
        </>
    )
}

export default Nav