class Dot {
	
	// private fields
	#id; #latitude; #longitude; #elevation;

	// constructor
	constructor(id, latitude, longitude, elevation) {
		this.#id = id;
		this.#latitude = latitude;
		this.#longitude = longitude;
		this.#elevation = elevation;
	}

	// getters
	get id() { return this.#id; }
	get latitude() { return this.#latitude; }
	get longitude() { return this.#longitude; }
	get elevation() { return this.#elevation; }

	// setters
	set id(id) { this.#id = id; }
	set latitude(latitude) { this.#latitude = latitude; }
	set longitude(longitude) { this.#longitude = longitude; }
	set elevation(elevation) { this.#elevation = elevation; }
	
}