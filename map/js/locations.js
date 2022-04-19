import {locations} from "../assets/common/locations.js";

function draw(color) {
    var canvas = document.getElementById(color);
    if(!canvas.getContext) return;
	var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
	ctx.fillRect (10, 10, 55, 50);
}
const canvas = ["red", "#1E90FF", "black"]
canvas.map(item => draw(item));

//設定地圖中心座標和縮放比例
var map = L.map('map-canvas', {
    center: [24.065, 121.522],
    zoom: 8,
});

//載入 OpenStreetMap 地圖資訊
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var blueIcon = new L.Icon({
	iconUrl: '../assets/img/marker-icon-2x-blue.png',
	shadowUrl: '../assets/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var redIcon = new L.Icon({
	iconUrl: '../assets/img/marker-icon-2x-red.png',
	shadowUrl: '../assets/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
	iconUrl: '../assets/img/marker-icon-2x-black.png',
	shadowUrl: '../assets/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

//設定經緯度和 Popup 內容
locations.map(location => {
	// if (location["location_name"].match("已停業")) {
		L.marker(
			[location["location_lat"], location["location_lng"]],
			{ icon: location["location_name"].match("已停業") ? blackIcon : (location["location_limit"] ? redIcon : blueIcon) }
		).bindPopup(
			`
				<div>
					<h3>${location["location_name"]}</h3>
					<p>水域地點：${location["location_addr"]}</p>
					<hr/>
					<div style='display: flex'>
						<div style='margin-right: 3em'>
							<p><b>即時氣象：</b></p>
							<p>氣溫：26°C</p>
							<p>降雨機率：40%</p>
							<p>相對濕度：82%</p>
							<p>紫外線指數：4</p>
							<p>風向：偏南風</p>
							<p>天氣現象：陰</p>
						</div>
						<div style='margin-right: 3em'>
							<p><b>當日海象：</b></p>
							<p>潮汐狀況：乾潮</p>
							<p>潮高：-37</p>
							<p>最大浪高：1.4</p>
						</div>
						<div>
							<p><b>今日日出日落時間：</b></p>
							<p>日出時間：5:41 AM</p>
							<p>日落時間：6:13 PM</p>
						</div>
					</div>
				</div>
			`,
			{ maxWidth: 700 }
		).addTo(map);
});