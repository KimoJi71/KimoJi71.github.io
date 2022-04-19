import {locations} from "../assets/common/locations.js";

function draw(color) {
    var canvas = document.getElementById(color);
    if(!canvas.getContext) return;
	var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
	ctx.fillRect (10, 10, 55, 50);
}
const canvas = ["red", "#1E90FF"]
canvas.map(item => draw(item));

//設定地圖中心座標和縮放比例
var map = L.map('map-canvas', {
    center: [24.065, 121.522],
    zoom: 8,
});

//載入 OpenStreetMap 地圖資訊
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

// 圓點設定
var blueCircle = {
    radius: 10,
    stroke: false,
    fillColor: '#1ea9e9',
    fillOpacity: 0.6,
    bubblingMouseEvents: false
};

var redCircle = {
    radius: 15,
    stroke: false,
    fillColor: '#e91e3a',
    fillOpacity: 0.6,
    bubblingMouseEvents: false
};

//設定經緯度和 Popup 內容
locations.map(location => {
		L.circleMarker(
			[location["location_lat"], location["location_lng"]],
            location["location_limit"] ? {...redCircle} : {...blueCircle}
		).bindPopup(
			`
				<div>
					<h3>${location["location_name"]}</h3>
					<p>水域地點：${location["location_addr"]}</p>
					<hr/>
					<div style='display: flex'>
                        <div>
							<p><b>當日海象：</b></p>
							<p>潮汐狀況：乾潮</p>
							<p>潮高：-37</p>
							<p>最大浪高：1.4</p>
						</div>
					</div>
				</div>
			`,
			{ maxWidth: 700 }
		).addTo(map);
});