import { useEffect, useState } from "react";

// Custom react hook.
// Causes the utilising element to rerender at the refresh rate of the monitor.
// Will also run a callback function every frame.
export default function useAnimationFrame(callback) {
    const [frameTime, setFrameTime] = useState(0);
    useEffect(() => {
        let frameHandle;
        const refresh = (time) => {
            setFrameTime(time);
            callback();
            frameHandle = requestAnimationFrame(refresh);
        }
        requestAnimationFrame(refresh);
        return () => cancelAnimationFrame(frameHandle);
    });
    return frameTime;
}