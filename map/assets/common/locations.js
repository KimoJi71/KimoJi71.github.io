const locations = [
    {
        "location_id": 1,
        "location_name": "沙崙海水浴場(已停業)",
        "location_addr": "新北市淡水區沙崙子、淡水河出海口東岸的廢棄海水浴場",
        "location_lat": 25.1889681015275,
        "location_lng": 121.415740992011,
        "location_limit": false
    },
    {
        "location_id": 2,
        "location_name": "洲子灣海水浴場",
        "location_addr": "新北市淡水區興仁里",
        "location_lat": 25.2187867941733,
        "location_lng": 121.438692119393,
        "location_limit": false
    },
    {
        "location_id": 3,
        "location_name": "白沙灣海水浴場",
        "location_addr": "新北市石門區",
        "location_lat": 25.2845431716676,
        "location_lng": 121.517305379579,
        "location_limit": false
    },
    {
        "location_id": 4,
        "location_name": "淺水灣海濱公園",
        "location_addr": "新北市三芝區淡金公路14.5-16.5公里處",
        "location_lat": 25.2517952033438,
        "location_lng": 121.46983809502,
        "location_limit": false
    },
    {
        "location_id": 5,
        "location_name": "老梅綠石槽",
        "location_addr": "新北市石門區",
        "location_lat": 25.2925298058572,
        "location_lng": 121.544731289841,
        "location_limit": false
    },
    {
        "location_id": 6,
        "location_name": "下寮海灘(金山海濱浴場隔壁)",
        "location_addr": "新北市萬里區下寮牽罟",
        "location_lat": 25.2192677715859,
        "location_lng": 121.651675173936,
        "location_limit": false
    },
    {
        "location_id": 7,
        "location_name": "翡翠灣海水浴場",
        "location_addr": "新北市萬里區",
        "location_lat": 25.1886482268851,
        "location_lng": 121.686134048347,
        "location_limit": false
    },
    {
        "location_id": 8,
        "location_name": "萬里海水浴場",
        "location_addr": "新北市萬里區區翡翠路1-1號",
        "location_lat": 25.1817268697722,
        "location_lng": 121.690721134724,
        "location_limit": false
    },
    {
        "location_id": 9,
        "location_name": "金沙灣海水浴場",
        "location_addr": "新北市貢寮區和美街72號",
        "location_lat": 25.0753195154041,
        "location_lng": 121.916025115916,
        "location_limit": false
    },
    {
        "location_id": 10,
        "location_name": "藍灣海濱休憩園區",
        "location_addr": "新北市貢寮區研海街45號",
        "location_lat": 25.0448007962983,
        "location_lng": 121.926568215703,
        "location_limit": false
    },
    {
        "location_id": 11,
        "location_name": "龍門海水浴場",
        "location_addr": "新北市貢寮區",
        "location_lat": 25.0221335679739,
        "location_lng": 121.937640618032,
        "location_limit": false
    },
    {
        "location_id": 12,
        "location_name": "福隆海水浴場",
        "location_addr": "新北市貢寮區福隆里",
        "location_lat": 25.0224707372902,
        "location_lng": 121.94322885081,
        "location_limit": false
    },
    {
        "location_id": 13,
        "location_name": "鹽寮海水浴場",
        "location_addr": "新北市貢寮區",
        "location_lat": 25.0421791931332,
        "location_lng": 121.927583929715,
        "location_limit": false
    },
    {
        "location_id": 14,
        "location_name": "金沙灣海水浴場",
        "location_addr": "新北市貢寮區和美街72號",
        "location_lat": 25.0752083401745,
        "location_lng": 121.915976784898,
        "location_limit": false
    },
    {
        "location_id": 15,
        "location_name": "望海巷海灘",
        "location_addr": "新北市瑞芳區北部濱海公路377號",
        "location_lat": 25.1415244867974,
        "location_lng": 121.803138920491,
        "location_limit": true
    },
    {
        "location_id": 16,
        "location_name": "大武崙白沙灘",
        "location_addr": "基隆市安樂區湖海路二段",
        "location_lat": 25.1657501218328,
        "location_lng": 121.706768383642,
        "location_limit": false
    },
    {
        "location_id": 17,
        "location_name": "外木山海水浴場",
        "location_addr": "基隆市中山區湖海路一段221號",
        "location_lat": 25.1635070863795,
        "location_lng": 121.727111125706,
        "location_limit": false
    },
    {
        "location_id": 18,
        "location_name": "竹圍海水浴場",
        "location_addr": "桃園市大園區",
        "location_lat": 25.114984687958,
        "location_lng": 121.238462606358,
        "location_limit": false
    },
    {
        "location_id": 19,
        "location_name": "觀音海水浴場",
        "location_addr": "桃園市觀音區",
        "location_lat": 25.0467097550597,
        "location_lng": 121.074256823587,
        "location_limit": true
    },
    {
        "location_id": 20,
        "location_name": "笨港沙灘",
        "location_addr": "桃園市新屋區",
        "location_lat": 24.9846822762981,
        "location_lng": 121.017820946757,
        "location_limit": false
    },
    {
        "location_id": 21,
        "location_name": "永安海濱公園",
        "location_addr": "桃園市新屋區觀海路一段",
        "location_lat": 24.9857661237857,
        "location_lng": 121.016142530044,
        "location_limit": false
    },
    {
        "location_id": 22,
        "location_name": "大溪蜜月灣",
        "location_addr": "宜蘭縣頭城鎮合興路66號",
        "location_lat": 24.9333143936488,
        "location_lng": 121.885895838587,
        "location_limit": false
    },
    {
        "location_id": 23,
        "location_name": "梗坊海灘",
        "location_addr": "宜蘭縣頭城鎮濱海路三段88號",
        "location_lat": 24.9049142885572,
        "location_lng": 121.865567383807,
        "location_limit": false
    },
    {
        "location_id": 24,
        "location_name": "雙獅海灘",
        "location_addr": "宜蘭縣頭城鎮濱海路二段332巷",
        "location_lat": 24.8892144135444,
        "location_lng": 121.849397794507,
        "location_limit": false
    },
    {
        "location_id": 25,
        "location_name": "頭城海水浴場(已停業)",
        "location_addr": "宜蘭縣頭城鎮",
        "location_lat": 24.8507133532504,
        "location_lng": 121.829669850231,
        "location_limit": false
    },
    {
        "location_id": 26,
        "location_name": "外澳海水浴場(外澳沙灘)",
        "location_addr": "宜蘭縣頭城鎮濱海路二段6號",
        "location_lat": 24.8783001893348,
        "location_lng": 121.843030737055,
        "location_limit": false
    },
    {
        "location_id": 27,
        "location_name": "龜山島日岀海灘",
        "location_addr": "宜蘭縣頭城鎮頭濱路一段",
        "location_lat": 24.8190651908543,
        "location_lng": 121.822068622216,
        "location_limit": false
    },
    {
        "location_id": 28,
        "location_name": "廍後沙灘(壯圍海灘)",
        "location_addr": "宜蘭縣壯圍鄉廍後路57-16號",
        "location_lat": 24.7294491294828,
        "location_lng": 121.827641622022,
        "location_limit": false
    },
    {
        "location_id": 29,
        "location_name": "永鎮濱海遊憩區",
        "location_addr": "宜蘭縣壯圍鄉壯濱路四段388巷9號",
        "location_lat": 24.7761763767178,
        "location_lng": 121.817659140203,
        "location_limit": false
    },
    {
        "location_id": 30,
        "location_name": "清水海邊",
        "location_addr": "宜蘭縣五結鄉季水路",
        "location_lat": 24.6950577424722,
        "location_lng": 121.837497281634,
        "location_limit": false
    },
    {
        "location_id": 31,
        "location_name": "利澤沙丘海岸",
        "location_addr": "宜蘭縣五結鄉",
        "location_lat": 24.6718424119776,
        "location_lng": 121.836919883884,
        "location_limit": true
    },
    {
        "location_id": 32,
        "location_name": "無尾港海灘",
        "location_addr": "宜蘭縣蘇澳鎮",
        "location_lat": 24.6184321150461,
        "location_lng": 121.860616077451,
        "location_limit": false
    },
    {
        "location_id": 33,
        "location_name": "賊仔澳玻璃海灘",
        "location_addr": "宜蘭縣蘇澳鎮造船路",
        "location_lat": 24.5792761160342,
        "location_lng": 121.874765643157,
        "location_limit": false
    },
    {
        "location_id": 34,
        "location_name": "內埤海攤(內埤海水浴場)",
        "location_addr": "宜蘭縣蘇澳鎮學府路",
        "location_lat": 24.5760377159943,
        "location_lng": 121.869503577681,
        "location_limit": false
    },
    {
        "location_id": 35,
        "location_name": "粉鳥林海灘",
        "location_addr": "宜蘭縣蘇澳鎮",
        "location_lat": 24.4971294704694,
        "location_lng": 121.843881590281,
        "location_limit": false
    },
    {
        "location_id": 36,
        "location_name": "烏岩角無人沙灘(獨木舟熱點)",
        "location_addr": "宜蘭縣蘇澳鎮",
        "location_lat": 24.5402042727148,
        "location_lng": 121.874452891333,
        "location_limit": false
    },
    {
        "location_id": 37,
        "location_name": "東澳沙灘",
        "location_addr": "宜蘭縣蘇澳鎮",
        "location_lat": 24.524119255347,
        "location_lng": 121.842695536774,
        "location_limit": false
    },
    {
        "location_id": 38,
        "location_name": "神秘沙灘",
        "location_addr": "宜蘭縣蘇澳鎮海岸路",
        "location_lat": 24.4250103364699,
        "location_lng": 121.791296728934,
        "location_limit": false
    },
    {
        "location_id": 39,
        "location_name": "濱海沙灘、南寮海水浴場(已停業)",
        "location_addr": "新竹市北區海濱里",
        "location_lat": 24.8391115032935,
        "location_lng": 120.920042865294,
        "location_limit": false
    },
    {
        "location_id": 40,
        "location_name": "新豐海水浴場(已停業)",
        "location_addr": "新竹縣新豐鄉坡頭村",
        "location_lat": 24.9301117049722,
        "location_lng": 120.977236355597,
        "location_limit": false
    },
    {
        "location_id": 41,
        "location_name": "新月沙灘",
        "location_addr": "新竹縣竹北市鳳岡路五段155巷底",
        "location_lat": 24.868350449566,
        "location_lng": 120.942668782195,
        "location_limit": false
    },
    {
        "location_id": 42,
        "location_name": "通霄海水浴場",
        "location_addr": "苗栗縣通霄鎮海濱路41-1號",
        "location_lat": 24.4960221447579,
        "location_lng": 120.671205993008,
        "location_limit": false
    },
    {
        "location_id": 43,
        "location_name": "崎頂海水浴場",
        "location_addr": "苗栗縣竹南鎮北戶39號350崎頂海水浴場",
        "location_lat": 24.7235000837548,
        "location_lng": 120.865566145904,
        "location_limit": false
    },
    {
        "location_id": 44,
        "location_name": "白沙屯海灘",
        "location_addr": "苗栗縣通霄鎮白東里8號",
        "location_lat": 24.5726664517436,
        "location_lng": 120.707770745802,
        "location_limit": false
    },
    {
        "location_id": 45,
        "location_name": "苑裡出水沙灘海堤",
        "location_addr": "苗栗縣苑裡鎮",
        "location_lat": 24.4547196031264,
        "location_lng": 120.64251777162,
        "location_limit": false
    },
    {
        "location_id": 46,
        "location_name": "外埔海邊",
        "location_addr": "苗栗縣後龍鎮",
        "location_lat": 24.6501357365773,
        "location_lng": 120.769993974454,
        "location_limit": false
    },
    {
        "location_id": 47,
        "location_name": "後龍海灘",
        "location_addr": "苗栗縣後龍鎮",
        "location_lat": 24.6308961700191,
        "location_lng": 120.759201834815,
        "location_limit": false
    },
    {
        "location_id": 48,
        "location_name": "龍港海灘",
        "location_addr": "苗栗縣後龍鎮",
        "location_lat": 24.615533890257,
        "location_lng": 120.753038033672,
        "location_limit": false
    },
    {
        "location_id": 49,
        "location_name": "大安海水浴場(大安沙灘)",
        "location_addr": "台中市大安區福住里北汕路86巷1號",
        "location_lat": 24.3797300956109,
        "location_lng": 120.58380346085,
        "location_limit": false
    },
    {
        "location_id": 50,
        "location_name": "高美濕地",
        "location_addr": "台中市清水區美堤街",
        "location_lat": 24.3146430677984,
        "location_lng": 120.549268563521,
        "location_limit": false
    },
    {
        "location_id": 51,
        "location_name": "線西海邊",
        "location_addr": "彰化縣線西鄉安西路",
        "location_lat": 24.1259070192079,
        "location_lng": 120.411755980311,
        "location_limit": false
    },
    {
        "location_id": 52,
        "location_name": "臺西夢幻沙灘",
        "location_addr": "雲林縣台西鄉",
        "location_lat": 23.7424485820984,
        "location_lng": 120.17565988971,
        "location_limit": false
    },
    {
        "location_id": 53,
        "location_name": "三條崙海水浴場",
        "location_addr": "雲林縣四湖鄉",
        "location_lat": 23.657856091403,
        "location_lng": 120.150849202141,
        "location_limit": false
    },
    {
        "location_id": 54,
        "location_name": "東石漁人碼頭",
        "location_addr": "嘉義縣東石鄉彩霞大道420號",
        "location_lat": 23.448930755198,
        "location_lng": 120.13528352567,
        "location_limit": false
    },
    {
        "location_id": 55,
        "location_name": "白水湖壽島",
        "location_addr": "嘉義縣東石鄉",
        "location_lat": 23.401450787075,
        "location_lng": 120.151288175081,
        "location_limit": false
    },
    {
        "location_id": 56,
        "location_name": "鰲鼓溼地森林園區",
        "location_addr": "嘉義縣東石鄉",
        "location_lat": 23.5092421670888,
        "location_lng": 120.147999934725,
        "location_limit": false
    },
    {
        "location_id": 57,
        "location_name": "布袋小確幸海灘",
        "location_addr": "嘉義縣布袋鎮",
        "location_lat": 23.3983381323398,
        "location_lng": 120.152352926072,
        "location_limit": true
    },
    {
        "location_id": 58,
        "location_name": "北門潟湖",
        "location_addr": "台南市北門區",
        "location_lat": 23.2599024078621,
        "location_lng": 120.105524267995,
        "location_limit": false
    },
    {
        "location_id": 59,
        "location_name": "海濤園觀光漁場",
        "location_addr": "台南市北門區",
        "location_lat": 23.3003123358957,
        "location_lng": 120.099793305434,
        "location_limit": false
    },
    {
        "location_id": 60,
        "location_name": "雙春濱海遊憩區",
        "location_addr": "台南市北門區",
        "location_lat": 23.3184713917621,
        "location_lng": 120.111500822151,
        "location_limit": false
    },
    {
        "location_id": 61,
        "location_name": "馬沙溝海水浴場",
        "location_addr": "台南市將軍區平沙里140號",
        "location_lat": 23.2166709641616,
        "location_lng": 120.08162974528,
        "location_limit": true
    },
    {
        "location_id": 62,
        "location_name": "鯤鯓海水浴場",
        "location_addr": "台南市南區",
        "location_lat": 22.9606540750255,
        "location_lng": 120.166477941398,
        "location_limit": false
    },
    {
        "location_id": 63,
        "location_name": "四草海岸",
        "location_addr": "台南市安南區",
        "location_lat": 23.0157123391876,
        "location_lng": 120.120870298625,
        "location_limit": false
    },
    {
        "location_id": 64,
        "location_name": "橋頭海灘公園",
        "location_addr": "台南市安南區",
        "location_lat": 22.9980155449252,
        "location_lng": 120.1431862776,
        "location_limit": false
    },
    {
        "location_id": 65,
        "location_name": "漁光島",
        "location_addr": "台南市安平區漁光路114號",
        "location_lat": 22.9811676559972,
        "location_lng": 120.155646470369,
        "location_limit": false
    },
    {
        "location_id": 66,
        "location_name": "鯤鯓海水浴場(四鯤鯓海灘)",
        "location_addr": "台南市南區鯤鯓里",
        "location_lat": 22.9622735705534,
        "location_lng": 120.167656077078,
        "location_limit": false
    },
    {
        "location_id": 67,
        "location_name": "黃金海岸",
        "location_addr": "台南市南區濱南路600號",
        "location_lat": 22.9333437534183,
        "location_lng": 120.176236250747,
        "location_limit": false
    },
    {
        "location_id": 68,
        "location_name": "頂頭額沙洲",
        "location_addr": "台南市七股區",
        "location_lat": 23.1060346617332,
        "location_lng": 120.036841819591,
        "location_limit": false
    },
    {
        "location_id": 69,
        "location_name": "茄萣海岸公園",
        "location_addr": "高雄市茄萣區西部濱海公路852號",
        "location_lat": 22.9011025329787,
        "location_lng": 120.179242043493,
        "location_limit": false
    },
    {
        "location_id": 70,
        "location_name": "永新漁港沙灘",
        "location_addr": "高雄市永安區",
        "location_lat": 22.8224697569776,
        "location_lng": 120.208516702425,
        "location_limit": false
    },
    {
        "location_id": 71,
        "location_name": "彌陀漁港海岸光廊",
        "location_addr": "高雄市彌陀區南寮路96號",
        "location_lat": 22.7677351877557,
        "location_lng": 120.233866428095,
        "location_limit": false
    },
    {
        "location_id": 72,
        "location_name": "蚵仔寮海邊沙灘",
        "location_addr": "高雄市梓官區",
        "location_lat": 22.7317460098001,
        "location_lng": 120.252878722445,
        "location_limit": false
    },
    {
        "location_id": 73,
        "location_name": "西子灣海水浴場",
        "location_addr": "高雄市鼓山區蓮海路",
        "location_lat": 22.6258920293581,
        "location_lng": 120.26368287195,
        "location_limit": false
    },
    {
        "location_id": 74,
        "location_name": "旗津海水浴場",
        "location_addr": "高雄市旗津區旗津三路1050號",
        "location_lat": 22.6110459329597,
        "location_lng": 120.266792303193,
        "location_limit": false
    },
    {
        "location_id": 75,
        "location_name": "柴山漁港",
        "location_addr": "高雄市鼓山區柴山大路41之2號",
        "location_lat": 22.6442947880982,
        "location_lng": 120.252319241084,
        "location_limit": false
    },
    {
        "location_id": 76,
        "location_name": "大鵬灣國家風景區",
        "location_addr": "屏東縣東港鎮大潭路169號",
        "location_lat": 22.4579034676946,
        "location_lng": 120.479089041802,
        "location_limit": false
    },
    {
        "location_id": 77,
        "location_name": "南灣海水浴場",
        "location_addr": "屏東縣恆春鎮南灣里南灣路223號",
        "location_lat": 21.9597525032982,
        "location_lng": 120.763488714231,
        "location_limit": false
    },
    {
        "location_id": 78,
        "location_name": "小灣海水浴場(小灣沙灘)",
        "location_addr": "屏東縣恆春鎮墾丁路",
        "location_lat": 21.9415497424869,
        "location_lng": 120.804742129886,
        "location_limit": false
    },
    {
        "location_id": 79,
        "location_name": "墾丁海水浴場",
        "location_addr": "屏東縣恆春鎮墾丁路",
        "location_lat": 21.9451382518619,
        "location_lng": 120.793924293751,
        "location_limit": false
    },
    {
        "location_id": 80,
        "location_name": "青洲濱海遊憩區",
        "location_addr": "屏東縣東港鎮南平路631號",
        "location_lat": 22.4580075203345,
        "location_lng": 120.455679011734,
        "location_limit": false
    },
    {
        "location_id": 81,
        "location_name": "蛤板灣",
        "location_addr": "屏東縣琉球鄉蛤板灣沙灘",
        "location_lat": 22.335978328621,
        "location_lng": 120.361680008048,
        "location_limit": false
    },
    {
        "location_id": 82,
        "location_name": "美人沙灘",
        "location_addr": "屏東縣琉球鄉美人路3號",
        "location_lat": 22.3678004792679,
        "location_lng": 120.370794013633,
        "location_limit": false
    },
    {
        "location_id": 83,
        "location_name": "後灣沙灘",
        "location_addr": "屏東縣車城鄉後灣路18號",
        "location_lat": 22.0531475601735,
        "location_lng": 120.699698482094,
        "location_limit": false
    },
    {
        "location_id": 84,
        "location_name": "香蕉灣",
        "location_addr": "屏東縣恆春鎮鵝鑾里",
        "location_lat": 21.9250819426684,
        "location_lng": 120.831862616117,
        "location_limit": false
    },
    {
        "location_id": 85,
        "location_name": "保育沙灘",
        "location_addr": "屏東縣恆春鎮",
        "location_lat": 21.9480321599361,
        "location_lng": 120.747241001459,
        "location_limit": false
    },
    {
        "location_id": 86,
        "location_name": "大光沙灘",
        "location_addr": "屏東縣恆春鎮大光路79號",
        "location_lat": 21.9493073527583,
        "location_lng": 120.747985707919,
        "location_limit": false
    },
    {
        "location_id": 87,
        "location_name": "船帆石小沙灘",
        "location_addr": "屏東縣恆春鎮",
        "location_lat": 21.9374652907219,
        "location_lng": 120.821556313152,
        "location_limit": false
    },
    {
        "location_id": 88,
        "location_name": "砂島生態保護區",
        "location_addr": "屏東縣恆春鎮砂島路221號",
        "location_lat": 21.9145357001495,
        "location_lng": 120.846789477848,
        "location_limit": true
    },
    {
        "location_id": 89,
        "location_name": "港口海灘",
        "location_addr": "屏東縣滿州鄉茶山路252號",
        "location_lat": 21.9880214131834,
        "location_lng": 120.845972759638,
        "location_limit": false
    },
    {
        "location_id": 90,
        "location_name": "佳樂水風景區",
        "location_addr": "屏東縣滿州鄉中山路43號947",
        "location_lat": 21.9954968880044,
        "location_lng": 120.864220403984,
        "location_limit": false
    },
    {
        "location_id": 91,
        "location_name": "旭海沙灘",
        "location_addr": "屏東縣牡丹鄉台26線",
        "location_lat": 22.2030604191077,
        "location_lng": 120.890818134488,
        "location_limit": false
    },
    {
        "location_id": 92,
        "location_name": "磯崎海水浴場",
        "location_addr": "花蓮縣豐濱鄉6-1號",
        "location_lat": 23.7011205608184,
        "location_lng": 121.550225441634,
        "location_limit": false
    },
    {
        "location_id": 93,
        "location_name": "七星潭",
        "location_addr": "花蓮縣新城鄉漁場街",
        "location_lat": 24.0432344508395,
        "location_lng": 121.622484807792,
        "location_limit": false
    },
    {
        "location_id": 94,
        "location_name": "曼波海灘",
        "location_addr": "花蓮縣新城鄉花8鄉道8號",
        "location_lat": 24.1104178611166,
        "location_lng": 121.634252651371,
        "location_limit": false
    },
    {
        "location_id": 95,
        "location_name": "水漣海邊",
        "location_addr": "花蓮縣壽豐鄉水璉二街60號",
        "location_lat": 23.7831283063677,
        "location_lng": 121.569493214107,
        "location_limit": false
    },
    {
        "location_id": 96,
        "location_name": "換膚海岸",
        "location_addr": "花蓮縣壽豐鄉",
        "location_lat": 23.7643035519903,
        "location_lng": 121.570546051295,
        "location_limit": false
    },
    {
        "location_id": 97,
        "location_name": "嶺頂沙丘",
        "location_addr": "花蓮縣壽豐鄉",
        "location_lat": 23.9370285847444,
        "location_lng": 121.61013669938,
        "location_limit": false
    },
    {
        "location_id": 98,
        "location_name": "崇德海灘",
        "location_addr": "花蓮縣秀林鄉",
        "location_lat": 24.1675282253293,
        "location_lng": 121.657978182189,
        "location_limit": false
    },
    {
        "location_id": 99,
        "location_name": "石門洞",
        "location_addr": "花蓮縣豐濱鄉",
        "location_lat": 23.5241096277981,
        "location_lng": 121.50429126457,
        "location_limit": false
    },
    {
        "location_id": 100,
        "location_name": "知本濕地大沙灘",
        "location_addr": "台東縣台東市",
        "location_lat": 22.7186424925918,
        "location_lng": 121.08683983068,
        "location_limit": false
    },
    {
        "location_id": 101,
        "location_name": "三仙台風景區",
        "location_addr": "台東縣成功鎮基翬路87號961",
        "location_lat": 23.1241810912691,
        "location_lng": 121.408329875238,
        "location_limit": false
    },
    {
        "location_id": 102,
        "location_name": "都歷海灘",
        "location_addr": "台東縣成功鎮都歷路",
        "location_lat": 23.021111735876,
        "location_lng": 121.334147654019,
        "location_limit": false
    },
    {
        "location_id": 103,
        "location_name": "小野柳",
        "location_addr": "台東縣台東市松江路一段500號",
        "location_lat": 22.7953604126354,
        "location_lng": 121.198198139665,
        "location_limit": true
    },
    {
        "location_id": 104,
        "location_name": "華源海灣",
        "location_addr": "台東縣太麻里鄉台9線395.5公里",
        "location_lat": 22.6627006580362,
        "location_lng": 121.028962457659,
        "location_limit": false
    },
    {
        "location_id": 105,
        "location_name": "金崙海灘",
        "location_addr": "台東縣太麻里鄉",
        "location_lat": 22.5308667789118,
        "location_lng": 120.968872597502,
        "location_limit": false
    },
    {
        "location_id": 106,
        "location_name": "金樽海岸",
        "location_addr": "台東縣東河鄉七里橋11號",
        "location_lat": 22.9454767544065,
        "location_lng": 121.279834292894,
        "location_limit": false
    },
    {
        "location_id": 107,
        "location_name": "大白沙沙灘",
        "location_addr": "台東縣綠島鄉",
        "location_lat": 22.6696346265896,
        "location_lng": 121.502566206339,
        "location_limit": false
    },
    {
        "location_id": 108,
        "location_name": "綠島石朗",
        "location_addr": "台東縣綠島鄉",
        "location_lat": 22.6569546945859,
        "location_lng": 121.474359976169,
        "location_limit": false
    },
    {
        "location_id": 109,
        "location_name": "東清祕境",
        "location_addr": "台東縣蘭嶼鄉東清村",
        "location_lat": 22.060050978842,
        "location_lng": 121.569526483315,
        "location_limit": false
    },
    {
        "location_id": 110,
        "location_name": "杉原海水浴場",
        "location_addr": "臺東縣卑南鄉",
        "location_lat": 22.8315910618498,
        "location_lng": 121.18630894003,
        "location_limit": false
    },
    {
        "location_id": 111,
        "location_name": "觀音亭海水浴場",
        "location_addr": "澎湖縣馬公市介壽路7號",
        "location_lat": 23.5687835862057,
        "location_lng": 119.562394097808,
        "location_limit": false
    },
    {
        "location_id": 112,
        "location_name": "嵵裡海水浴場(嵵裡海灘)",
        "location_addr": "澎湖縣馬公市",
        "location_lat": 23.5262469318359,
        "location_lng": 119.566880997002,
        "location_limit": false
    },
    {
        "location_id": 113,
        "location_name": "隘門沙灘",
        "location_addr": "澎湖縣湖西鄉",
        "location_lat": 23.5553306079004,
        "location_lng": 119.639032795555,
        "location_limit": false
    },
    {
        "location_id": 114,
        "location_name": "澎澎灘",
        "location_addr": "澎湖縣白沙鄉",
        "location_lat": 23.6628327340325,
        "location_lng": 119.639116332014,
        "location_limit": false
    },
    {
        "location_id": 115,
        "location_name": "吉貝沙尾",
        "location_addr": "澎湖縣白沙鄉吉貝嶼",
        "location_lat": 23.7312767921449,
        "location_lng": 119.602761630679,
        "location_limit": false
    },
    {
        "location_id": 116,
        "location_name": "山水海灘",
        "location_addr": "澎湖縣馬公市山水里",
        "location_lat": 23.513687190787,
        "location_lng": 119.590817342102,
        "location_limit": false
    },
    {
        "location_id": 117,
        "location_name": "池西岩瀑(九孔瀑布)",
        "location_addr": "澎湖縣西嶼鄉",
        "location_lat": 23.6041038787616,
        "location_lng": 119.50244190974,
        "location_limit": false
    },
    {
        "location_id": 118,
        "location_name": "網垵口沙灘",
        "location_addr": "澎湖縣望安鄉",
        "location_lat": 23.3594485679472,
        "location_lng": 119.504808220188,
        "location_limit": true
    },
    {
        "location_id": 119,
        "location_name": "水垵沙灘",
        "location_addr": "澎湖縣望安鄉",
        "location_lat": 23.3943019886792,
        "location_lng": 119.501950247172,
        "location_limit": false
    },
    {
        "location_id": 120,
        "location_name": "溪邊海水浴場",
        "location_addr": "金門縣金湖鎮溪邊村",
        "location_lat": 24.442541089467,
        "location_lng": 118.466015442359,
        "location_limit": false
    }
]

export { locations };