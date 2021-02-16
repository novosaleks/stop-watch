import React from 'react';
import withStopWatchContentContainer from '../../containers';

import './StopWatchContent.scss';

interface IProps {
    time: string,
}

const StopWatchContent: React.FC<IProps> = ({time}) => {
    return <h1 className='stop-watch-content'>{time}</h1>;
};

export default withStopWatchContentContainer()(StopWatchContent);