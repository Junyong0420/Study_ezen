// 1. 전체 url 가져오기
const currentURL = location.href;

// 2. 쿼리스트링 파라미터 가져오기
const urlobj = new URL(currentURL);
const params = urlobj.searchParams; //파라미터에 대한 정보가 들어있다.

// 파라미터의 값을 구한다 params.get("변수명");
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

//3. ajxx 이용해 전체 날씨 정보 얻어오기
function getCityWeather(q) {
  var temp = {};
  var urlAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=f3ea4e686e26d655625baab1f8541271&units=metric&lang=kr";
  urlAPI += "&q=" + q;
  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태 => ajax는 기본적으로 비동기다.
    success: function (data) {
      console.log(data);

      const celsius = data.main.temp.toFixed(0);
      const icon = data.weather[0].icon;

      temp.celsius = celsius;
      temp.icon = icon;
      console.log(temp);
      $(".region-weather").text(`${celsius}℃`);
      $("");
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp;
}

//4. 데이터 바인딩 작업
$(".legion-title").text(`${krcity} 상세날씨`);

let temp = getCityWeather(q);
