
const weather = (pos) => {
    const API_KEY = "13f8479843df882ff819a375433e19fc";
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    const wrapEl = document.querySelector('.wrap');
    const weatherEl = document.querySelector('.weather span');
    const tempEl = document.querySelector('.temp span');
    const cityEl = document.querySelector('.city span');
    const windEl = document.querySelector('.wind span');

    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data);
        weatherEl.innerText = `${data.weather[0].main} ${data.weather[0].description}`
        tempEl.innerText = `${data.main.temp}  체감온도 : ${data.main.feels_like}`;
        cityEl.innerText = data.name;
        windEl.innerText = `속도 : ${data.wind.speed} 방향 : ${data.wind.deg}`;

        if(data.weather[0].main === "Clouds"){
            wrapEl.classList.add('active');
        }else if(data.weather[0].main === ""){

        }
    });

}

navigator.geolocation.getCurrentPosition(weather);



// *변수의 범위
// 1.전역변수
// =>전체 영역에서 사용할 수 있는 변수로 함수 안에 작성하지 않음

// 2.지역변수
// =>함수 내부에서만 사용할 수 있는 변수로 함수 밖에서는 사용 불가

// 13f8479843df882ff819a375433e19fc