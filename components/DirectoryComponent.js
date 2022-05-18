import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
    };   
};

class Directory extends Component {

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        //Navigation prop: you can use "navigate" by using this.props.navigation 
        const { navigate } = this.props.navigation;

        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    //navigate - Link to other screens:  navigation.navigate({ routeName, params, action, key })
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
                />
        );
    }

}

export default connect(mapStateToProps)(Directory);