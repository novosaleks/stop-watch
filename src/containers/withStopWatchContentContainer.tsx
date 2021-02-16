import React, {useEffect, useState} from 'react';
import {interval, NEVER, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

type injectedProps = {
    time: string
}

type baseProps = {
    active: boolean
    paused: boolean
    resetClock: boolean
}

const withStopWatchContentContainer = () => (View: React.ComponentType<injectedProps>) => {
    return (props: baseProps) => {
        const {active, paused, resetClock} = props;

        const [timeStamp, changeTimeStamp] = useState<number>(0);

        const intervalObserver$ = of(active && !paused)
            .pipe(switchMap(value => value ? interval(1000) : NEVER));

        const generateTime = (timeStamp: number): string => {
            const hours = Math.floor(timeStamp / (60 * 60)),
                minutes = Math.floor(timeStamp / 60) % 60,
                seconds = timeStamp % 60 % 60;

            return `${formatOutput(hours)}: ${formatOutput(minutes)}: ${formatOutput(seconds)}`;
        };

        const formatOutput = (item: number): string | number => {
            return item >= 10 ? item : `0${item}`;
        };

        useEffect(() => {
            changeTimeStamp(0);
        }, [active, resetClock]);

        useEffect(() => {
            const subscription = intervalObserver$.subscribe(() => {
                changeTimeStamp(timeStamp => timeStamp + 1);
            });

            return () => subscription.unsubscribe();
        }, [active, intervalObserver$, paused, resetClock]);

        return <View time={generateTime(timeStamp)}/>;
    };
};

export default withStopWatchContentContainer;