import styles from '../styles/Player.module.css';

export default function ChapterBlock({idx, onClick}) {

    const onKeyPressHandler = (e) => {
        if (e.key === 'Enter'){
            onClick(idx);
        }
    }

    return (
        <div
            className={styles.chapter}
            tabIndex={0}
            onClick={() => onClick(idx)}
            onKeyDown={(e) => onKeyPressHandler(e)}
            >
            {`Chapter ${idx + 1}`}
        </div>
    )
}