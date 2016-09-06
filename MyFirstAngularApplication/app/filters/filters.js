/**
 * Created by tianzi.gu on 2016/09/06.
 */

app.filter('removeAllSpaces', function () {
    return function(str) {
        return str.replace(/\s/g, '');
    };
});