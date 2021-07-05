import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <div>
                <Link href="/about">About</Link>
                <Link href="/writing">Writing</Link>
            </div>
        </nav>
    )
}