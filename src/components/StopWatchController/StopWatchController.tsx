import React from 'react';
import {valueSwitcher} from '../../utils';

import './StopWatchController.scss';

type stateChangeHandlerWithPrev = (arg: (subArg: boolean) => boolean) => void;

interface IProps {
    toggleHandler: () => void
    switchPauseHandler: stateChangeHandlerWithPrev
    initReset: stateChangeHandlerWithPrev
}

const StopWatchController: React.FC<IProps> = ({toggleHandler, switchPauseHandler, initReset}) => {
    const bindPauseSwitcher = () => {
        switchPauseHandler(valueSwitcher);
    };

    const doubleClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.target.addEventListener('click', bindPauseSwitcher, {once: true});

        setTimeout(() => {
            e.target.removeEventListener('click', bindPauseSwitcher);
        }, 300);
    };

    return (
        <div className='stop-watch-controller'>
            <button className='waves-light btn'
                    onClick={toggleHandler}>
                Start/Stop
            </button>
            <button className='waves-light btn'
                    onClick={e => doubleClickHandler(e)}>
                Wait
            </button>
            <button className='waves-light btn'
                    onClick={() => initReset(valueSwitcher)}>
                Reset
            </button>
        </div>
    );
};

export default StopWatchController;