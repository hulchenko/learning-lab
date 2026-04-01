"use client";

import BackHomeButton from "../components/BackHomeButton";

export default function Error() {
  return (
    <html>
      <body style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10rem" }}>
        <h2>Something went wrong!</h2>
        <BackHomeButton />
      </body>
    </html>
  );
}
