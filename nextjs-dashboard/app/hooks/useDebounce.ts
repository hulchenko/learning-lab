import {useRef} from 'react';

const DEBOUNCE_DEFAULT_TIME = 1500; //ms

export default function useDebounceCallback(
    callback: (value: string) => void
){
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

    function debounce(value: string){
        clearTimeout(timer.current);
        timer.current = setTimeout(() => callback(value), DEBOUNCE_DEFAULT_TIME);
    };

    return debounce;
}