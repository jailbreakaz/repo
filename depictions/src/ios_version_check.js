/*
I saw some parts of this code on the internet. I forgot where. If it's yours
let me know and I'll credit you.

*/
const NOT_IOS_DEVICE = "Not an iOS device, can't check version.";

const VERSION_CHECK_SUPPORTED = "Sizin iOS versiyanız dəstəklənir! 😊";
const VERSION_CHECK_NEEDS_UPGRADE = "Ən azı iOS tələb edir %s 😕";
const VERSION_CHECK_UNCONFIRMED = "Hazırda  bu iOS'ta test edilmədi %s 😕";

function checkIOSVersion(minIOS, maxIOS) {
    var iOS = parseFloat(
        ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
        .replace('undefined', '3_2').replace('_', '.').replace('_', '')
    ) || false;

    if (!iOS) {
        return NOT_IOS_DEVICE;
    }

    if (maxIOS && iOS > maxIOS) {
        return VERSION_CHECK_UNCONFIRMED.replace("%s", iOS);
    } else if (iOS < minIOS) {
        return VERSION_CHECK_NEEDS_UPGRADE.replace("%s", minIOS);
    } else {
        return VERSION_CHECK_SUPPORTED;
    }
}
