class Dot {


	// constructor
	constructor(id, latitude, longitude, elevation) {
		this._id = id;
		this._latitude = latitude;
		this._longitude = longitude;
		this._elevation = elevation;
	}

	// getters
	get id() { return this._id; }
	get latitude() { return this._latitude; }
	get longitude() { return this._longitude; }
	get elevation() { return this._elevation; }

	// setters
	set id(id) { this._id = id; }
	set latitude(latitude) { this._latitude = latitude; }
	set longitude(longitude) { this._longitude = longitude; }
	set elevation(elevation) { this._elevation = elevation; }


	toString() {
        return "Dot{ " + this._id + ", " + this._latitude + ", " + this._longitude + ", " + this._elevation + "}";
    }
	
}