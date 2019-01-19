import React from 'react';
import HomeComponent from '../component/homeComponent';

class HomeContainer extends React.Component {
    componentWillMount() {
        this.props.fetchData()
    }
    render() {
        return (
            <HomeComponent movie={this.props.movie}/>
        )
    }
}

export default HomeContainer;
