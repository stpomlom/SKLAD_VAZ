
const warehouses = {
    "00281": { name: "Склад 00281", address: "61 корпус", capacity: "координаты: 53.562742, 49.278497" },
    "01013": { name: "Склад 01013", address: "10 корпус", capacity: "координаты: 53.564105, 49.261220" },
    "01944": { name: "Склад 01944", address: "10 корпус", capacity: "10 ворота,координаты: 53.564022, 49.260968" },
    "01989": { name: "Склад 01989", address: "10 корпус", capacity: "координаты: 53.564022, 49.260968" },
    "1D181": { name: "Склад 1D181", address: "10 корпус", capacity: "координаты: 53.567649, 49.245494" },
    "1F261": { name: "Склад 1F261", address: "23 корпус", capacity: "координаты: 53.564886, 49.258801" },
    "1F428": { name: "Склад 1F428", address: "23 корпус", capacity: "координаты: 53.564886, 49.258801" },
    "1F539": { name: "Склад 1F539", address: "10 корпус", capacity: "координаты: 53.566373, 49.239366" },
    "1F946": { name: "Склад 1F946", address: "23 корпус", capacity: "координаты: 53.564886, 49.258801" },
    "02892": { name: "Склад 02892", address: "94 корпус", capacity: "координаты: 53.568026, 49.247002" },
    "02898": { name: "Склад 02898", address: "94 корпус", capacity: "координаты: 53.568026, 49.247002" },
    "02968": { name: "Склад 02968", address: "06 корпус", capacity: "координаты: 53.567449, 49.232221" },
    "02979": { name: "Склад 02979", address: "06 корпус", capacity: "координаты: 53.566313, 49.245051" },
    "02981": { name: "Склад 02981", address: "06 корпус", capacity: "координаты: 53.568324, 49.232403" },
    "02991": { name: "Склад 02991", address: "06 корпус", capacity: "координаты: 53.566313, 49.245051" },
    "02998": { name: "Склад 02998", address: "06 корпус", capacity: "координаты: 53.566991, 49.246857" },
    "02082": { name: "Склад 02082", address: "06 корпус", capacity: "координаты: 53.566991, 49.246857" },
    "04410": { name: "Склад 04410", address: "1 вставка", capacity: "6 ворота, координаты: 53.562967, 49.240048" },
    "04999": { name: "Склад 04999", address: "02C корпус", capacity: "координаты: 53.563646, 49.247399" },
    "06024": { name: "Склад 06024", address: "80/2 корпус", capacity: "37 ворота, координаты: 53.558236, 49.268178" },
    "07529": { name: "Склад 07529", address: "BOK3 104 корпус", capacity: "координаты: 53.575400, 49.231999" },
    "07881": { name: "Склад 07881", address: "68 корпус", capacity: "координаты: 53.568155, 49.225176" },
    "07980": { name: "Склад 07980", address: "68 корпус", capacity: "координаты: 53.568155, 49.225176" },
    "07990": { name: "Склад 07990", address: "68 корпус", capacity: "координаты: 53.568155, 49.225176" },
    "08103": { name: "Склад 08103", address: "70 корпус", capacity: "координаты: 53.564280, 49.231904" },
    "08104": { name: "Склад 08104", address: "70 корпус", capacity: "координаты: 53.564280, 49.231904" },
    "08280": { name: "Склад 08280", address: "456 корпус", capacity: "координаты: 53.558449,49.278074" },
    "08301": { name: "Склад 08301", address: "2 вставка", capacity: "10 ворота, координаты: 53.559855, 49.243421" },
    "08304": { name: "Склад 08304", address: "3 вставка", capacity: "14 ворота, координаты: 53.560365, 49.247513" },
    "08305": { name: "Склад 08305", address: "1 вставка", capacity: "6 ворота, координаты: 53.560469, 49.239554" },
    "08306": { name: "Склад 08306", address: "4 вставка", capacity: "19 ворота, координаты: 53.560452, 49.250189" },
    "08325": { name: "Склад 08325", address: "5 вставка", capacity: "4 ворота, координаты: 53.559350, 49.254263" },
    "08328": { name: "Склад 08328", address: "6 вставка", capacity: "8 ворота, координаты: 53.558906, 49.256894" },
    "08329": { name: "Склад 08329", address: "4 вставка", capacity: "19 ворота, координаты: 53.559519, 49.250833" },
    "30011": { name: "Склад 30011", address: "456 корпус", capacity: "координаты: 53.560365,49.276129" },
    "08780": { name: "Склад 08780 (УЗО)", address: "456 корпус", capacity: "координаты: 53.558449,49.278074" },
    "08790": { name: "Склад 08790 (30)", address: "456 корпус", capacity: "координаты: 53.560365,49.276129" },
    "08K01": { name: "Склад 08K01", address: "3 вставка", capacity: "14 ворота, координаты: 53.562294, 49.247942" },
    "08K02": { name: "Склад 08K02", address: "2 вставка", capacity: "10 ворота, координаты: 53.561834, 49.243419" },
    "08K10": { name: "Склад 08K10", address: "8 вставка", capacity: "16 ворота, координаты: 53.558658, 49.264790" },
    "08K13": { name: "Склад 08K13", address: "8 вставка", capacity: "16 ворота, координаты: 53.560563, 49.265204" },
    "08P06": { name: "Склад 08P06", address: "1 вставка", capacity: "6 ворота, координаты: 53.560469, 49.239554" },
    "08P09": { name: "Склад 08P09", address: "2 вставка", capacity: "10 ворота, координаты: 53.559855, 49.243421" },
    "08P10": { name: "Склад 08P10", address: "2 вставка", capacity: "10 ворота, координаты: 53.559855, 49.243421" },
    "08P32": { name: "Склад 08P32", address: "5 вставка", capacity: "4 ворота, координаты: 53.558935, 49.253780", },
    "08S01": { name: "Склад 08S01", address: "2 вставка", capacity: "10 ворота, координаты: 53.562696, 49.243623" },
    "08501": { name: "Склад 08501", address: "1 вставка", capacity: "6 ворота, координаты: 53.562354, 49.240949" },
    "08S02": { name: "Склад 08S02", address: "3 вставка", capacity: "14 ворота, координаты: 53.561820, 49.246940" },
    "08504": { name: "Склад 08504", address: "3 вставка", capacity: "14 ворота, координаты: 53.561820, 49.246940" },
    "08S05": { name: "Склад 08S05", address: "4 вставка", capacity: "19 ворота, координаты: 53.562082, 49.250507" },
    "08506": { name: "Склад 08506", address: "2 вставка", capacity: "10 ворота, координаты: 53.561182, 49.243226" },
    "09300": { name: "Склад 09300", address: "01/235", capacity: "ворота, координаты: 53.559791, 49.233197" },
    "09892": { name: "Склад 09892", address: "3 вставка", capacity: "14 ворота, координаты: 53.562548, 49.247090" },
    "11893": { name: "Склад 11893", address: "128/3 корпус", capacity: "координаты: 53.564410, 49.283474" },
    "12930": { name: "Склад 12930", address: "170 корпус", capacity: "координаты: 53.556875, 49.261916" },
    "12931": { name: "Склад 12931", address: "170 корпус", capacity: "координаты: 53.556875, 49.261916" },
    "12881": { name: "Склад 12881", address: "170 корпус", capacity: "координаты: 53.556875, 49.261916" },
    "1D416": { name: "Склад 1D416", address: "51 корпус", capacity: "координаты: 53.556788, 49.283596" },
    "1D494": { name: "Склад 1D494", address: "125 корпус", capacity: "координаты: 53.570282, 49.227874" },
    "1P934": { name: "Склад 1P934", address: "61 корпус", capacity: "координаты: 53.565346, 49.280696" },
    "1P935": { name: "Склад 1P935", address: "61 корпус", capacity: "координаты: 53.565346, 49.280696" },
    "1P942": { name: "Склад 1P942", address: "61 корпус", capacity: "координаты: 53.565346, 49.280696" },
    "1P971": { name: "Склад 1P971", address: "61 корпус", capacity: "координаты: 53.564569, 49.277435" },
    "1P983": { name: "Склад 1P983", address: "187 корпус", capacity: "координаты: 53.564559, 49.246186" },
    "13493": { name: "Склад 13493", address: "80/2 корпус", capacity: "139 ворота, координаты: 53.558236, 49.268178" },
    "13494": { name: "Склад 13494", address: "80/2 корпус", capacity: "139 ворота, координаты: 53.558236, 49.268178" },
    "13495": { name: "Склад 13495", address: "80/2 корпус", capacity: "139 ворота, координаты: 53.558236, 49.268178" },
    "13496": { name: "Склад 13496", address: "80/2 корпус", capacity: "139 ворота, координаты: 53.558236, 49.268178" },
    "13497": { name: "Склад 13497", address: "80/2 корпус", capacity: "139 ворота, координаты: 53.558236, 49.268178" },
    "13498": { name: "Склад 13498", address: "80/2 корпус", capacity: "139 ворота, координаты: 53.558236, 49.268178" },
    "13499": { name: "Склад 13499", address: "80/2 корпус", capacity: "139 ворота, координаты: 53.558236, 49.268178" },
    "13891": { name: "Склад 13891", address: "80/2 корпус", capacity: "139 ворота, координаты: 53.558236, 49.268178" },
    "18901": { name: "Склад 18901", address: "05 корпус", capacity: "35 ворота, координаты: 53.562046, 49.264749" },
    "18902": { name: "Склад 18902", address: "05 корпус", capacity: "35 ворота, координаты: 53.562046, 49.264749" },
    "18903": { name: "Склад 18903", address: "05 корпус", capacity: "35 ворота, координаты: 53.562046, 49.264749" },
    "18904": { name: "Склад 18904", address: "05 корпус", capacity: "35 ворота, координаты: 53.562046, 49.264749" },
    "18905": { name: "Склад 18905", address: "05 корпус", capacity: "35 ворота, координаты: 53.562046, 49.264749" },
    "18906": { name: "Склад 18906", address: "05 корпус", capacity: "35 ворота, координаты: 53.562046, 49.264749" },
    "18907": { name: "Склад 18907", address: "05 корпус", capacity: "35 ворота, координаты: 53.562046, 49.264749" },
    "5DC15": { name: "Склад 5DC15", address: "15/3 корпус", capacity: "52 ворота, координаты: 53.561772, 49.228075" },
    "18909": { name: "Склад 18909", address: "05 корпус", capacity: "координаты: 53.562046, 49.264749" },
    "18910": { name: "Склад 18910", address: "05 корпус", capacity: "координаты: 53.562046, 49.264749" },
    "18911": { name: "Склад 18911", address: "05 корпус", capacity: "координаты: 53.562046, 49.264749" },
    "18950": { name: "Склад 18950", address: "05 корпус", capacity: "координаты: 53.562046, 49.264749" },
    "18999": { name: "Склад 18999", address: "05 корпус", capacity: "координаты: 53.562046, 49.264749" },
    "1L011": { name: "Склад 1L011", address: "20 корпус", capacity: "координаты: 53.567354, 49.264893" },
    "20582": { name: "Склад 20582", address: "170 корпус", capacity: "координаты: 53.556753, 49.263604" },
    "24892": { name: "Склад 24892", address: "6 вставка", capacity: "8 ворота, координаты: 53.561730, 49.257545" },
    "24893": { name: "Склад 24893", address: "7 вставка", capacity: "12 ворота, координаты: 53.558961, 49.261265" },
    "29290": { name: "Склад 29290", address: "60 корпус", capacity: "20 ворота, координаты: 53.562808, 49.275208" },
    "29294": { name: "Склад 29294", address: "60 корпус", capacity: "20 ворота, координаты: 53.562808, 49.275208" },
    "29296": { name: "Склад 29296", address: "60 корпус", capacity: "20 ворота, координаты: 53.562808, 49.275208" },
    "29593": { name: "Склад 29593", address: "60 корпус", capacity: "20 ворота, координаты: 53.562808, 49.275208" },
    "30971": { name: "Склад 30971", address: "53 корпус", capacity: "координаты: 53.559946, 49.283343" },
    "30891": { name: "Склад 30891", address: "50 корпус", capacity: "координаты: 53.556934, 49.281987" },
    "30982": { name: "Склад 30982", address: "50 корпус", capacity: "координаты: 53.558280, 49.282193" },
    "3C170": { name: "Склад 3C170", address: "50 корпус", capacity: "координаты: 53.556934, 49.281987" },
    "3C180": { name: "Склад 3C180", address: "50 корпус", capacity: "координаты: 53.556934, 49.281987" },
    "53296": { name: "Склад 53296", address: "60 корпус", capacity: "координаты: 53.562808, 49.275208" },
    "53899": { name: "Склад 53899", address: "60 корпус", capacity: "координаты: 53.562808, 49.275208" },
    "5D230": { name: "Склад 5D230", address: "BOK3 104", capacity: "координаты: 53.575400, 49.231999" },
    "5D301": { name: "Склад 5D301", address: "7 вставка", capacity: "12 ворота, координаты: 53.560085, 49.261522" },
    "5D302": { name: "Склад 5D302", address: "03 корпус", capacity: "координаты: 53.563072, 49.253012" },
    "5D303": { name: "Склад 5D303", address: "02 корпус", capacity: "координаты: 53.564526, 49.237129" },
    "5D304": { name: "Склад 5D304", address: "02 корпус", capacity: "координаты: 53.564660, 49.234393" },
    "5D305": { name: "Склад 5D305", address: "5 вставка", capacity: "4 ворота, координаты: 53.561740, 49.254492" },
    "5D307": { name: "Склад 5D307", address: "125 корпус", capacity: "5 ворота, координаты: 53.570282, 49.227874" },
    "5D333": { name: "Склад 5D333", address: "02C корпус", capacity: "координаты: 53.563646, 49.247399" },
    "5D336": { name: "Склад 5D336", address: "02 корпус", capacity: "79A ворота, координаты: 53.564526, 49.237129" },
    "5D339": { name: "Склад 5D339", address: "02C корпус", capacity: "координаты: 53.563646, 49.247399" },
    "5D344": { name: "Склад 5D344", address: "125 корпус", capacity: "5 ворота, координаты: 53.570282, 49.227874" },
    "5D364": { name: "Склад 5D364", address: "3 вставка", capacity: "14 ворота, координаты: 53.560772, 49.246683" },
    "5D376": { name: "Склад 5D376", address: "78A корпус", capacity: "координаты: 53.569931, 49.232597" },
    "5D376": { name: "Склад 5D376", address: "77A корпус", capacity: "координаты: 53.570295, 49.232372" },
    "5ZA80": { name: "Склад 5ZA80", address: "10 корпус", capacity: "117 ворота, координаты: 53.564022, 49.260968" },
    "5ZM31": { name: "Склад 5ZM31", address: "20 корпус", capacity: "координаты: 53.567354, 49.264893" },
    "5ZM31": { name: "Склад 5ZM31", address: "30 корпус", capacity: "координаты: 53.569386, 49.251220" },
    "5ZM34": { name: "Склад 5ZM34", address: "20 корпус", capacity: "координаты: 53.567354, 49.254893" },
    "5ZM41": { name: "Склад 5ZM41", address: "20 корпус", capacity: "координаты: 53.567354, 49.264893" },
    "5ZM41": { name: "Склад 5ZM41", address: "35/3 корпус", capacity: "координаты: 53.564881, 49.251718" },
    "5ZM84": { name: "Склад 5ZM84", address: "77A корпус", capacity: "координаты: 53.570295, 49.232372" },
    "5ZM87": { name: "Склад 5ZM87", address: "30 корпус", capacity: "координаты: 53.569386, 49.251220" },
    "5ZM88": { name: "Склад 5ZM88", address: "10 корпус", capacity: "координаты: 53.564098, 49.260227" },
    "5ZM46": { name: "Склад 5ZM46", address: "77A корпус", capacity: "координаты: 53.570295, 49.232372" },
    "5ZM22": { name: "Склад 5ZM22", address: "21 корпус", capacity: "координаты: 53.568409, 49.256681" },
    "5ZM32": { name: "Склад 5ZM32", address: "22 корпус", capacity: "99 ворота, координаты: 53.567354, 49.264893" },
    "5ZM33": { name: "Склад 5ZM33", address: "21 корпус", capacity: "координаты: 53.568409, 49.256681" },
    "5ZK80": { name: "Склад 5ZK80", address: "22 корпус", capacity: "координаты: 53.567354, 49.264893" },
    "5ZG80": { name: "Склад 5ZG80", address: "20 корпус", capacity: "38 ворота, координаты: 53.568628, 49.253493" },
    "5D382": { name: "Склад 5D382", address: "02 корпус", capacity: "76 ворота, координаты: 53.564660, 49.234393" },
    "5D390": { name: "Склад 5D390", address: "АЗС", capacity: "координаты: 53.565721, 49.233500" },
    "5D393": { name: "Склад 5D393", address: "02C корпус", capacity: "координаты: 53.563646, 49.247399" },
    "5D399": { name: "Склад 5D399", address: "78Б корпус", capacity: "координаты: 53.569330, 49.239308" },
    "5C099": { name: "Склад 5C099", address: "78Б корпус", capacity: "координаты: 53.569234, 49.240531" },
    "5DC16": { name: "Склад 5DC16", address: "15/3 корпус", capacity: "координаты: 53.561772, 49.228075" },
    "5DC10": { name: "Склад 5DC10", address: "62 корпус", capacity: "координаты: 53.563803, 49.272653" },
    "5DC11": { name: "Склад 5DC11", address: "62 корпус", capacity: "координаты: 53.563803, 49.272653" },
    "5DC17": { name: "Склад 5DC17", address: "62 корпус", capacity: "координаты: 53.563803, 49.272653" },
    "5DC19": { name: "Склад 5DC19", address: "71 корпус", capacity: "135 ворота, координаты: 53.557045, 49.280703" },
    "5DC20": { name: "Склад 5DC20", address: "15/3 корпус", capacity: "координаты: 53.561772, 49.228075" },
    "5DC21": { name: "Склад 5DC21", address: "71 корпус", capacity: "34 ворота, координаты: 53.558861, 49.279016" },
    "5DC22": { name: "Склад 5DC22", address: "71 корпус", capacity: "координаты: 53.558861, 49.279016" },
    "5DC23": { name: "Склад 5DC23", address: "15/2 корпус", capacity: "51 ворота, координаты: 53.563382, 49.225031" },
    "5DC30": { name: "Склад 5DC30", address: "62 корпус", capacity: "координаты: 53.563803, 49.272553" },
    "5DC31": { name: "Склад 5DC31", address: "62 корпус", capacity: "координаты: 53.563803, 49.272653" },
    "5DC32": { name: "Склад 5DC32", address: "62 корпус", capacity: "координаты: 53.563803, 49.272653" },
    "5DC42": { name: "Склад 5DC42", address: "62 корпус", capacity: "координаты: 53.563803, 49.272653" },
    "5DC50": { name: "Склад 5DC50", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.563382, 49.225031" },
    "5DC51": { name: "Склад 5DC51", address: "15/3 корпус", capacity: "48 ворота, координаты: 53.561772, 49.228075" },
    "5DC52": { name: "Склад 5DC52", address: "15/3 корпус", capacity: "48 ворота, координаты: 53.563870, 49.228688" },
    "5DC52": { name: "Склад 5DC52", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.562542, 49.225433" },
    "5DC53": { name: "Склад 5DC53", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.562542, 49.225433" },
    "5DC60": { name: "Склад 5DC60", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.562964, 49.224908" },
    "5DC61": { name: "Склад 5DC61", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.562600, 49.224811" },
    "5DC63": { name: "Склад 5DC63", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.562964, 49.224908" },
    "5DC70": { name: "Склад 5DC70", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.564498, 49.225298" },
    "5DC71": { name: "Склад 5DC71", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.564498, 49.225298" },
    "5DC72": { name: "Склад 5DC72", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.564089, 49.225202" },
    "5DC73": { name: "Склад 5DC73", address: "15/2 корпус", capacity: "52 ворота, координаты: 53.564089, 49.225202" },
    "5DC64": { name: "Склад 5DC64", address: "18 корпус", capacity: "координаты: 53.564982, 49.228708" },
    "5DC80": { name: "Склад 5DC80", address: "15/3 корпус", capacity: "48 ворота, координаты: 53.560922, 49.227914" },
    "5DC81": { name: "Склад 5DC81", address: "15/3", capacity: "координаты: 53.562379, 49.228204" },
    "5DC83": { name: "Склад 5DC83", address: "15/3", capacity: "координаты: 53.564224, 49.228810" },
    "5DM01": { name: "Склад 5DM01", address: "68", capacity: "координаты: 53.569045, 49.221431" },
    "5DM02": { name: "Склад 5DM02", address: "68", capacity: "координаты: 53.569045, 49.221431" },
    "5DM03": { name: "Склад 5DM03", address: "68", capacity: "координаты: 53.569045, 49.221431" },
    "5DM04": { name: "Склад 5DM04", address: "68", capacity: "3 ворота, координаты: 53.568306, 49.221225" },
    "5DM05": { name: "Склад 5DM05", address: "68", capacity: "координаты: 53.569045, 49.221431" },
    "5DM06": { name: "Склад 5DM06", address: "68", capacity: "координаты: 53.569045, 49.221431" },
    "5DP01": { name: "Склад 5DP01", address: "68", capacity: "координаты: 53.568155, 49.225176" },
    "5DP02": { name: "Склад 5DP02", address: "68", capacity: "координаты: 53.568155, 49.225176" },
    "5DP03": { name: "Склад 5DP03", address: "68", capacity: "координаты: 53.568155, 49.225176" },
    "5DG01": { name: "Склад 5DG01", address: "68", capacity: "координаты: 53.569235, 49.225449" },
    "5DT01": { name: "Склад 5DT01", address: "04A", capacity: "координаты: 53.562633, 49.257685" },
    "5DT03": { name: "Склад 5DT03", address: "04", capacity: "координаты: 53.562543, 49.258726" },
    "5DT11": { name: "Склад 5DT11", address: "5 вставка", capacity: "4 ворота, координаты: 53.559650, 49.253405" },
    "5DT14": { name: "Склад 5DT14", address: "5 вставка", capacity: "4 ворота, координаты: 53.560136, 49.253587" },
    "5DT12": { name: "Склад 5DT12", address: "4 оставка", capacity: "19 ворота, координаты: 53.561784, 49.251346" },
    "5DT16": { name: "Склад 5DT16", address: "4 вставка", capacity: "19 ворота, координаты: 53.561784, 49.251346" },
    "5DT19": { name: "Склад 5DT19", address: "4 вставка", capacity: "19 ворота, координаты: 53.561784, 49.251346" },
    "5DT25": { name: "Склад 5DT25", address: "6 вставка", capacity: "8 ворота, координаты: 53.559897, 49.257105" },
    "5DT26": { name: "Склад 5DT26", address: "7 вставка", capacity: "12 ворота, координаты: 53.558335, 49.261093" },
    "5DT29": { name: "Склад 5DT29", address: "6 вставка", capacity: "8 ворота, координаты: 53.559897, 49.257105" },
    "5DT31": { name: "Склад 5DT31(УЗО)", address: "6 вставка", capacity: "8 ворота, координаты: 53.560957, 49.257320" },
    "5DT40": { name: "Склад 5DT40", address: "8 вставка", capacity: "16 ворота, координаты: 53.561199, 49.264462" },
    "5DT41": { name: "Склад 5DT41", address: "8 вставка", capacity: "16 ворота, координаты: 53.561199, 49.264452" },
    "5DT55": { name: "Склад 5DT55", address: "5 вставка", capacity: "4 ворота, координаты: 53.561388, 49.254810" },
    "5DT59": { name: "Склад 5DT59", address: "6 вставка", capacity: "8 ворота, координаты: 53.561417, 49.257470" },
    "5DT63": { name: "Склад 5DT63", address: "7 вставка", capacity: "12 ворота, координаты: 53.560481, 49.260664" },
    "5DT65": { name: "Склад 5DT65", address: "7 вставка", capacity: "12 ворота, координаты: 53.560621, 49.261758" },
    "5DT66": { name: "Склад 5DT66", address: "7 вставка", capacity: "12 ворота, координаты: 53.561455, 49.261021" },
    "5DT67": { name: "Склад 5DT67", address: "7 вставка", capacity: "12 ворота, координаты: 53.560621, 49.261758" },
    "5DT69": { name: "Склад 5DT69", address: "7 вставка", capacity: "12 ворота, координаты: 53.561455, 49.261021" },
    "5DT77": { name: "Склад 5DT77", address: "7 вставка", capacity: "12 ворота, координаты: 53.558961, 49.261265" },
    "5DT79": { name: "Склад 5DT79", address: "8 вставка", capacity: "16 ворота, координаты: 53.558741, 49.263824" },
    "5DT81": { name: "Склад 5DT81", address: "7 вставка", capacity: "12 ворота, координаты: 53.558508, 49.260218" },
    "5DT82": { name: "Склад 5DT82", address: "6 вставка", capacity: "8 ворота, координаты: 53.558822, 49.257774" },
    "5DT83": { name: "Склад 5DT83", address: "7 вставка", capacity: "12 ворота, координаты: 53.558335, 49.261093" },
    "5DT90": { name: "Склад 5DT90", address: "4 вставка", capacity: "19 ворота, координаты: 53.561784, 49.251346" },
    "5DT91": { name: "Склад 5DT91", address: "4 вставка", capacity: "19 ворота, координаты: 53.561784, 49.251346" },
    "5DT92": { name: "Склад 5DT92", address: "4 вставка", capacity: "19 ворота, координаты: 53.561784, 49.251346" },
    "5DT93": { name: "Склад 5DT93", address: "6 вставка", capacity: "8 ворота, координаты: 53.560957, 49.257320" },
    "5DT94": { name: "Склад 5DT94", address: "7 вставка", capacity: "12 ворота, координаты: 53.558335, 49.261093" },
    "5DT97": { name: "Склад 5DT97", address: "7 вставка", capacity: "12 ворота, координаты: 53.560609, 49.260801" },
    "5DT98": { name: "Склад 5DT98", address: "7 вставка", capacity: "12 ворота, координаты: 53.560609, 49.260801" },
    "5D198(УЗО)": { name: "Склад 5D198(УЗО)", address: "7 вставка", capacity: "12 ворота, координаты: 53.558508, 49.260218" },
    "5D302": { name: "Склад 5D302", address: "04 корпус", capacity: "координаты: 53.562543, 49.258726" },
    "5D337": { name: "Склад 5D337", address: "7 вставка", capacity: "12 ворота, координаты: 53.560085, 49.261522" },
    "5D338": { name: "Склад 5D338", address: "7 вставка", capacity: "12 ворота, координаты: 53.560085, 49.261522" },
    "5D346": { name: "Склад 5D346", address: "склад готовой продукции", capacity: "координаты: 53.562735, 49.267834" },
    "5D384": { name: "Склад 5D384", address: "03 корпус", capacity: "координаты: 53.563072, 49.253012" },
    "5DG02": { name: "Склад 5DG02", address: "4 вставка", capacity: "координаты: 53.562082, 49.250507" },
    "5ZP80": { name: "Склад 5ZP80", address: "6 корпус", capacity: "координаты: 53.566462, 49.233297" },
    "5ZP83": { name: "Склад 5ZP83", address: "6 корпус", capacity: "координаты: 53.566462, 49.233297" },
    "5ZP85": { name: "Склад 5ZP85", address: "6 корпус", capacity: "координаты: 53.566462, 49.233297" },
    "5ZP88": { name: "Склад 5ZP88", address: "6 корпус", capacity: "координаты: 53.566462, 49.233297" },
    "5Z990": { name: "Склад 5Z990", address: "6 корпус", capacity: "координаты: 53.565520, 49.245140" },
    "5ZS80": { name: "Склад 5ZS80", address: "6 корпус", capacity: "координаты: 53.565520, 49.245140" },
    "5ZZ80": { name: "Склад 5ZZ80", address: "6 корпус", capacity: "координаты: 53.565520, 49.245140" },
    "5ZZ30": { name: "Склад 5ZZ30", address: "6 корпус", capacity: "3 ворота, координаты: 53.568688, 49.232451" },
    "5ZZ31": { name: "Склад 5ZZ31", address: "6 корпус", capacity: "3 ворота, координаты: 53.568688, 49.232451" },
    "08841": { name: "Склад 08841", address: "454 площадка", capacity: "координаты: 53.564794, 49.218263" },
    "08842": { name: "Склад 08842", address: "77б площадка", capacity: "координаты: 53.569634, 49.240322" },
    "58200": { name: "Склад 58200", address: "460 площадка", capacity: "координаты: 53.561262, 49.219830" },
    "58495": { name: "Склад 58495", address: "80/2 корпус", capacity: "координаты: 53.558236, 49.268178" },
    "58937": { name: "Склад 58937", address: "80 корпус", capacity: "координаты: 53.557460, 49.277550" },
    "58938": { name: "Склад 58938", address: "39/4 корпус", capacity: "координаты: 53.569684, 49.248120" },
    "58988": { name: "Склад 58988", address: "39/4 корпус", capacity: "координаты: 53.569684, 49.248120" },
    "61130": { name: "Склад 61130", address: "4 вставка", capacity: "координаты: 53.562082, 49.250507" },
    "64100": { name: "Склад 64100", address: "5 вставка", capacity: "4 ворота, координаты: 53.559650, 49.253405" },
    "D5140": { name: "Склад D5140", address: "70 корпус", capacity: "координаты: 53.561735, 49.229456" },
    "D5935": { name: "Склад D5935", address: "70 корпус", capacity: "координаты: 53.561735, 49.229456" },
    "D700E": { name: "Склад D700E", address: "29 корпус", capacity: "координаты: 53.568794, 49.247253" },
    "G48AO": { name: "Склад G48AO", address: "77г корпус", capacity: "координаты: 53.569449, 49.245722" },
    "08391": { name: "Склад 08391", address: "456 корпус", capacity: "координаты: 53.560365, 49.276129" },
    "80168": { name: "Склад 80168", address: "61 корпус дейвон", capacity: "координаты: 53.564590, 49.280756" },
    "3C129": { name: "Склад 3С129", address: "456 корпус", capacity: "координаты: 53.560365,49.276129" },
    "08K03": { name: "Склад 08K03", address: "1 вставка", capacity: "координаты: 53.560469, 49.239554" },
    "08K04": { name: "Склад 08K04", address: "1 вставка", capacity: "координаты: 53.560469, 49.239554" },
    "08K06": { name: "Склад 08K06", address: "2 вставка", capacity: "координаты: 53.561834, 49.243419" },
    "08K08": { name: "Склад 08K08", address: "2 вставка", capacity: "координаты: 53.561834, 49.243419" },
    "61110": { name: "Склад 61110", address: "2 вставка", capacity: "координаты: 53.561834, 49.243419" },
    "08K07": { name: "Склад 08K07", address: "2 вставка", capacity: "координаты: 53.561834, 49.243419" },
    "62100": { name: "Склад 62100", address: "1 вставка", capacity: "координаты: 53.560469, 49.239554" },
    "62110": { name: "Склад 62110", address: "1 вставка", capacity: "координаты: 53.560469, 49.239554" },
    "62120": { name: "Склад 62120", address: "1 вставка", capacity: "координаты: 53.560469, 49.239554" },
    "08S03": { name: "Склад 08S03", address: "2 вставка", capacity: "координаты: 53.561834, 49.243419" },
    "08S06": { name: "Склад 08S06", address: "2 вставка", capacity: "координаты: 53.561834, 49.243419" },
    "29295": { name: "Склад 29295", address: "61 корпус", capacity: "координаты: 53.562808, 49.275208" },
    "11893": { name: "Склад 11893", address: "128/3 корпус", capacity: "координаты: 53,5660454, 49,2463774" }
   // Добавьте больше складов по мере необходимости
};

function findWarehouse() {
    const warehouseNumber = document.getElementById('warehouseNumber').value;
    const resultDiv = document.getElementById('result');

    if (warehouses[warehouseNumber]) {
        const warehouse = warehouses[warehouseNumber];
        resultDiv.innerHTML = `
            <h2>${warehouse.name}</h2>
            <p>Где находиться: ${warehouse.address}</p>
            <p>Как проехать: ${warehouse.capacity}</p>
        `;
    } else {
        resultDiv.innerHTML = `<p>Склад с номером ${warehouseNumber} не найден.</p>`;
    }
}
