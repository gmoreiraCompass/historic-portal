import { RefObject, useLayoutEffect, useState } from "react";

export const useIsOverflow = (
    ref: RefObject<HTMLDivElement>,
    callback?: any
) => {
    const [isOverflow, setIsOverflow] = useState(Boolean);

    useLayoutEffect(() => {
        const { current } = ref;

        const trigger = () => {
            const hasOverflow = current
                ? current.scrollHeight > current.clientHeight
                : false;

            setIsOverflow(hasOverflow);

            if (callback) callback(hasOverflow);
        };

        if (current) {
            trigger();
        }
    }, [callback, ref]);

    return isOverflow;
};
