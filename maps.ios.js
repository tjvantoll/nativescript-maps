var dependencyObservable = require( "ui/core/dependency-observable" );
var proxy = require( "ui/core/proxy" );
var stackLayout = require( "ui/layouts/stack-layout" );

function Map() {
	this.map = MKMapView.alloc().initWithFrame( UIScreen.mainScreen().bounds );
	this.ios.addSubview( this.map );
}
Map.prototype = new stackLayout.StackLayout();
Map.prototype.updateLocation = function() {
	if ( !this.latitude || !this.longitude ) {
		return;
	}

	var location = CLLocationCoordinate2DMake( this.latitude, this.longitude ),
		span = new MKCoordinateSpan({ latitudeDelta: 0.3, longitudeDelta: 0.3 }),
		region = new MKCoordinateRegion({ center: location, span: span });

	this.map.region = region;
}

var properties = [ "latitude", "longitude" ];
properties.forEach(function( name ) {
	var property = new dependencyObservable.Property(
		name,        // Name of the attribute
		"id" + name, // id? Still not sure what this is
		new dependencyObservable.PropertyMetadata(
			0,       // default value of the attribute
			dependencyObservable.PropertyMetadataSettings.None,
			function( data ) {
				data.object.updateLocation();
			}
		)
	);
	exports[ name + "Property" ] = property;

	Object.defineProperty( Map.prototype, name, {
		get: function() {
			return this._getValue( property );
		},
		set: function( value ) {
			var intValue = parseInt( value, 10 );
			if ( intValue >= -180 && intValue <= 180 ) {
				this._setValue( property, value );
			}
		}
	});
});

exports.Map = Map;
