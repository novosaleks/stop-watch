import React, {Component} from 'react';

import './ErrorBoundary.scss';

export default class ErrorBoundary extends Component<{ children: React.ReactNode }, { error: boolean }> {
    state = {
        error: false
    };

    componentDidCatch(): void {
        this.setState({error: true});
    }

    render(): React.ReactNode {
        return this.state.error ? <h1 className='error'>Something went wrong...</h1> : this.props.children;
    }
}