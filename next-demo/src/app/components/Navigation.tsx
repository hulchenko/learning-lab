import Link from "next/link"

export const Navigation = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", gap: '1rem', padding: "2rem", textDecoration: "underline"}}>
            <Link href={"/about"}>About</Link>
            <Link href={"/nested-route/1"}>Nested Route</Link>
            <Link href={"/"}>Home</Link>
        </div>
    )
}