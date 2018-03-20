(function (configuration) {

    var clickOnButtonClose = function (button) {
        console.info("`" + configuration.youtubeVideoAdsClass + "` closed.");
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
            ads.innerHTML = "";
            console.info("`" + configuration.youtubeCompanionId + "` closed.");
        }
    };

    var handleYoutubeVideoAds = function (ads) {
        Array.prototype.forEach.call(
            ads.getElementsByClassName(configuration.youtubeVideoAdsCloseClass),
            clickOnButtonClose);
    };

    var closeYoutubeVideoAdsUi = function () {
        Array.prototype.forEach.call(
            document.getElementsByClassName(configuration.youtubeVideoAdsUiClass),
            clickOnButtonClose);
    };

    var closeYoutubeVideoAds = function () {
        Array.prototype.forEach.call(
            document.getElementsByClassName(configuration.youtubeVideoAdsClass),
            handleYoutubeVideoAds);
    };

    var closeTopGoogleCompanion = function () {
        removeAdsById(configuration.youtubeCompanionTopId);
    };

    var closeGoogleCompanion = function () {
        removeAdsById(configuration.youtubeCompanionId);
    };

    var closeYoutubeAdvertisement = function () {
        closeYoutubeVideoAds();
        closeYoutubeVideoAdsUi();

        closeTopGoogleCompanion();
        closeGoogleCompanion();
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
