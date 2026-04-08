import Link from "next/link"

interface HeaderLinkProps {
    label: string
    address: string
}

export default function HeaderLink({ label, address }: HeaderLinkProps) {
    return (
        <Link
            href={address}
            className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
            {label}
        </Link>
    )
}