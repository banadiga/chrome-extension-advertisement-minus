(function (configuration) {

    var clickOnButtonClose = function (button) {
        console.info("Click on `" + button.id + "` closed.");
        button.click();
    };

    var removeAdsById = function (adsId) {
        removeAds(document.getElementById(adsId));
    };

    var removeAdsByClassName = function (adsClassName) {
        var elementsByClassName = document.getElementsByClassName(adsClassName);
        Array.prototype.forEach.call(
            elementsByClassName,
            removeAds);
    };

    var removeAds = function (ads) {
        if (ads !== null) {
            ads.parentElement.removeChild(ads);
            console.info("Remove `[" + ads.id + "/" + ads.className + "]` ads.");
        }
    };

    var handleYoutubeVideoAds = function (ads) {
        Array.prototype.forEach.call(
            ads.getElementsByClassName(configuration.youtubeVideoAdsCloseClass),
            clickOnButtonClose);
    };

    var closeYoutubeAdvertisement = function () {
        Array.prototype.forEach.call(
            document.getElementsByClassName(configuration.youtubeVideoAdsClass),
            handleYoutubeVideoAds);
    };

    var closeAdvertisement = function () {
        Array.prototype.forEach.call(
            configuration.advertisementIds,
            removeAdsById);

        Array.prototype.forEach.call(
            configuration.advertisementClassNames,
            removeAdsByClassName);
    };

    return {
        setup: function () {
            setInterval(closeYoutubeAdvertisement, configuration.interval);
            setInterval(closeAdvertisement, configuration.interval);
        }
    }
})(configuration).setup();
