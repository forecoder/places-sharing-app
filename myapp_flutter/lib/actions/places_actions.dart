import '../models/models.dart';

class StartAddPlaceAction {}

class PlaceAddedAction {}

class SetPlacesAction {
  final List<Place> places;

  SetPlacesAction({this.places});
}

class GetPlacesAction {}
