import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";
import { Navigation } from "react-native-navigation";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "sideDrawerToggle") {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });
    }
  }

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    Navigation.push("startTabs", {
      component: {
        name: "MyApp.PlaceDetailScreen",
        passProps: {
          selectedPlace: selPlace
        },
        options: {
          topBar: {
            title: {
              text: selPlace.name
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
