var dots = [] // global variable

function loadDots() {

	url = "http://localhost:5002/readAllCrosswalks";

	$.get(url)
        .done(function (data) {
        	json = JSON.parse(data);
        	json.forEach( dot => dots.push( new Dot(dot.id, dot.latitude, dot.longitude, dot.elevation) ) );
            //array.forEach( d => dots.append( new Dot(d.id, d.latitude, d.longitude, d.elevation) ) );
        });

    //console.log(dots)
}