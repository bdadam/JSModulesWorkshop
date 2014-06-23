$.namespace = function(ns) {
    ns = ns || '';
    var parts = ns.split('.');
    var obj = window;

    for (var i = 0, l = parts.length; i < l; i++) {
        obj[parts[i]] = obj[parts[i]] || {};
        obj = obj[parts[i]];
    }
};