(function () {
    var configuration = {
        youtubeCompanionTopId: "masthead-ad",
        youtubeCompanionId: "google_companion_ad_div",
        youtubeVideoAdsClass: "video-ads",
        youtubeVideoAdsUiClass: "videoAdUiSkipButton",
        youtubeVideoAdsCloseClass: "close-button",

        interval: 2000
    };

    var clickOnButtonClose = function (button) {
        console.info("`" + configuration.youtubeVideoAdsClass + "` closed.");
        button.click();
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
        removeAds(document.getElementById(configuration.youtubeCompanionTopId));
    };

    var closeGoogleCompanion = function () {
        removeAds(document.getElementById(configuration.youtubeCompanionId));
    };

    var closeAdvertisement = function () {
        closeYoutubeVideoAds();
        closeYoutubeVideoAdsUi();

        closeTopGoogleCompanion();
        closeGoogleCompanion();
    };

    return {
        setup: function () {
            setInterval(closeAdvertisement, configuration.interval);
        }
    }
})().setup();
