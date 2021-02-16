import React, {useState} from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';

import StopWatchContent from './components/StopWatchContent';
import StopWatchController from './components/StopWatchController';

import {valueSwitcher} from './utils';

const App: React.FC = () => {
    const [active, toggleClock] = useState<boolean>(false);
    const [paused, switchPause] = useState<boolean>(false);
    const [resetClock, initResetClock] = useState<boolean>(false);

    const toggleHandler = () => {

        if (!paused) {
            toggleClock(valueSwitcher);
        } else if (!active) {
            toggleClock(valueSwitcher);
            switchPause(valueSwitcher);
        } else {
            switchPause(valueSwitcher);
        }
    };

    return (
        <div className='App container grey lighten-3'>
            <StopWatchContent active={active}
                              paused={paused}
                              resetClock={resetClock}
            />
            <StopWatchController toggleHandler={toggleHandler}
                                 switchPauseHandler={switchPause}
                                 initReset={initResetClock}
            />
        </div>
    );
};

export default App;
