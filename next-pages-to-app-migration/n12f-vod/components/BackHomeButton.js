"use client";

import {useRouter} from "next/navigation";

export default function BackHomeButton() {
    const router = useRouter();

    const onClickHandler = () => router.push('/');

    return (
        <div style={{ marginTop: '2rem', textAlign: 'center', cursor: 'pointer' }}>
          <a
            onClick={onClickHandler}
            style={{
              color: '#fff',
              textDecoration: 'underline',
              fontWeight: 'bold',
              fontSize: '2rem',
            }}
          >
            Back to Home
          </a>
        </div>
    )
}