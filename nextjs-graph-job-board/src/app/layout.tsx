import NavBar from "@/components/NavBar";
// import { getUser } from "@/lib/auth"; // TODO
import "bulma/css/bulma.css";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = {
    id: "1",
    email: "vadym@example",
  };

  const handleLogout = async () => {
    "use server";
    console.log("Logging out..");
    redirect("/login");
  };

  return (
    <html lang="en">
      <body>
        <NavBar user={user} onLogout={handleLogout} />
        <main className="section">{children}</main>
      </body>
    </html>
  );
}
