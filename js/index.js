// bigSwiper data
fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24top=100&%24skip=124&format=JSON/', {
    headers: getAuthorizationHeader(),
})
    .then((res) => res.json())
    .then((data) => {
        // filter No City
        data = data.filter((item) => {
            if (item.City) return item;
        });
        data.slice(0, 6).forEach((item) => {
            document.querySelector('.bigSwiper').querySelector('.swiper-wrapper').innerHTML += `
                        <a class="swiper-slide" href="detail.html?type=spot&id=${
                            item.ScenicSpotID
                        }" style="background: url(${
                item.Picture.PictureUrl1 ? item.Picture.PictureUrl1 : './images/NoImage-1100x400.svg'
            }) no-repeat center center; background-size: cover">
                            <figure>
                                <figcaption>${item.Address.slice(0, 3)} | ${item.ScenicSpotName}</figcaption>
                            </figure>
                        </a>
                        `;
        });
    });

// event data
fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24top=4&%24skip=4&%24format=JSON/', {
    headers: getAuthorizationHeader(),
})
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item) => {
            document.querySelector('.event').querySelector('.list').innerHTML += `
                        <a href="detail.html?type=event&id=${item.ActivityID}" class="event-card">
                        <div class="img-wrap">
                            <img src="${
                                item.Picture.PictureUrl1 ? item.Picture.PictureUrl1 : './images/NoImage-255x200.svg'
                            }" alt="${item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : ''}" />
                        </div>
                        <div class="text-wrap">
                            <p class="time">${item.StartTime.slice(0, 10)} - ${item.EndTime.slice(0, 10)}</p>
                            <p class="name">${item.ActivityName}</p>
                            <div>
                                <p class="location">${
                                    item.City ? '<img class="hidden" src="./images/icon/spot16.svg" />' : ''
                                }${item.City ? item.City : ''}</p>
                                <p class="hidden detail">詳細介紹<img src="./images/icon/arrow-right16_G.svg" /></p>
                            </div>
                        </div>
                    </a>
                        `;
        });
    });

// spot data
fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24top=100&%24skip=6&%24format=JSON/', {
    headers: getAuthorizationHeader(),
})
    .then((res) => res.json())
    .then((data) => {
        // filter No City
        data = data.filter((item) => {
            if (item.City) return item;
        });
        data.slice(0, 4).forEach((item) => {
            document.querySelector('.slider-spot').querySelector('.swiper-wrapper').innerHTML += `
                    <a class="swiper-slide" href="detail.html?type=spot&id=${item.ScenicSpotID}">
                                <figure>
                                    <img src="${
                                        item.Picture.PictureUrl1
                                            ? item.Picture.PictureUrl1
                                            : './images/NoImage-255x200.svg'
                                    }" alt="${
                item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : ''
            }" />
                                    <figcaption class="name">${item.ScenicSpotName}</figcaption>
                                    <figcaption class="location">
                                        <img src="./images/icon/spot16.svg" />${item.Address.slice(0, 3)}
                                    </figcaption>
                                </figure>
                            </a>
                    `;
            document.querySelector('.spot').querySelector('.list.hidden').innerHTML += `
                        <a class="spot-card" href="detail.html?type=spot&id=${item.ScenicSpotID}">
                        <figure>
                            <div class="img-wrap"><img src="${
                                item.Picture.PictureUrl1 ? item.Picture.PictureUrl1 : './images/NoImage-255x200.svg'
                            }" alt="${
                item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : ''
            }" /></div>
                            <figcaption class="name">${item.ScenicSpotName}</figcaption>
                            <figcaption class="location"><img src="./images/icon/spot16.svg" />${item.Address.slice(
                                0,
                                3
                            )}</figcaption>
                        </figure>
                    </a>
                    `;
        });
    });

// food data
fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=100&%24format=JSON/', {
    headers: getAuthorizationHeader(),
})
    .then((res) => res.json())
    .then((data) => {
        // filter No City
        data = data.filter((item) => {
            if (item.City) return item;
        });
        data.slice(0, 4).forEach((item) => {
            document.querySelector('.slider-res').querySelector('.swiper-wrapper').innerHTML += `
                        <a class="swiper-slide" href="detail.html?type=res&id=${item.RestaurantID}">
                                <figure>
                                    <img src="${
                                        item.Picture.PictureUrl1
                                            ? item.Picture.PictureUrl1
                                            : './images/NoImage-255x200.svg'
                                    }" alt="${
                item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : ''
            }" />
                                    <figcaption class="name">${item.RestaurantName}</figcaption>
                                    <figcaption class="location">
                                        <img src="./images/icon/spot16.svg" />${item.Address.slice(0, 3)}
                                    </figcaption>
                                </figure>
                            </a>
                    `;
            document.querySelector('.res').querySelector('.list.hidden').innerHTML += `
                            <a class="res-card" href="detail.html?type=res&id=${item.RestaurantID}">
                        <figure>
                            <div class="img-wrap"><img src="${
                                item.Picture.PictureUrl1 ? item.Picture.PictureUrl1 : './images/NoImage-255x200.svg'
                            }" alt="${
                item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : ''
            }" /></div>
                            <figcaption class="name">${item.RestaurantName}</figcaption>
                            <figcaption class="location"><img src="./images/icon/spot16.svg" />${item.Address.slice(
                                0,
                                3
                            )}</figcaption>
                        </figure>
                    </a>
                        `;
        });
    });

// API key
function getAuthorizationHeader() {
    let AppID = '4130011dfd624eb5b17086040eb2d373';
    let AppKey = 'ASYHFL004Xm1zWq2dfp32IPNwDA';
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization =
        'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
    return { Authorization: Authorization, 'X-Date': GMTString };
}
