import HeaderLink from "./headerLink"

export default function Header() {
    const headerButtons = [
        {
            label: "Home",
            address: "/"
        },
        {
            label: "Course List",
            address: "/course-list"
        }
    ]

    return (
        <>
            <div className="flex pt-8 pl-8 gap-4">
                {headerButtons.map((header) => (
                    <HeaderLink key={header.label} label={header.label} address={header.address} />
                ))}
            </div>
        </>
    )
}