/*
 * jQuery Cache modified from jQuery Offline Version 1.0.0
 *
 * http://github.com/wycats/jquery-offline
 *
 * Copyright 2010, Yehuda Katz
 */
(function($) {
    var prefix = "kaskus.cache.jquery:",
        mostRecent = null,
        requesting = {};
    if (typeof $.support.localStorage === "undefined") {
        var localStorageTest = function() {
            try {
                localStorage.setItem("test", "test");
                localStorage.removeItem("test");
                return true;
            } catch(e) {
                return false;
            }
        };
        $.support.localStorage = !!window.localStorage && localStorageTest();
    }

    function getJSON(url, data, fn) {
        if ($.isFunction(data)) {
            fn = data;
            data = null;
        }
        var requestingKey = url + "?" + $.param(data || {});
        if (requesting[requestingKey]) {
            return false;
        }
        requesting[requestingKey] = true;
        return $.ajax({
            type: "GET",
            url: url,
            data: data,
            success: function(responseData, text) {
                delete requesting[requestingKey];
                if (undefined === responseData) {
                    if (!window.navigator.onLine) {
                        mostRecent = function() {
                            getJSON(url, data, fn);
                        };
                    }
                    return;
                }
                fn(responseData, text);
            },
            error: function() {
                delete requesting[requestingKey];
            },
            dataType: "json",
            ifModified: true,
            xhrFields: {
                withCredentials: true
            }
        });
    }
    if ($.support.localStorage) {
        $(window).bind("online", function() {
            if (mostRecent) {
                mostRecent();
            }
        });
        $(window).bind("offline", function() {
            $.event.trigger("ajaxStop");
        });
        $.retrieveJSON = function(url, data, fn, refreshtime) {
            if ($.isFunction(data)) {
                fn = data;
                data = {};
            }
            var retrieveDate = new Date;
            var param = $.param(data),
                key = prefix + url + ":" + param,
                text = localStorage[key],
                dateString = localStorage[key + ":date"],
                date = new Date(Date.parse(dateString)),
                refreshtime = (typeof(refreshtime) !== "undefined") ? refreshtime : 0;

            function cleanupLocalStorage() {
                var dateKeys = [];
                for (var i = 0; i < localStorage.length; ++i) {
                    var key = localStorage.key(i);
                    if (/:date$/.test(key)) {
                        dateKeys.push(key);
                    }
                }
                dateKeys.sort(function(a, b) {
                    var date_a = localStorage[a],
                        date_b = localStorage[b];
                    return date_a < date_b ? -1 : (date_a > date_b ? +1 : 0);
                });
                for (var i = 0; i < dateKeys.length / 2; ++i) {
                    var key = dateKeys[i];
                    delete localStorage[key];
                    delete localStorage[key.substr(0, key.length - 5)];
                }
            }

            function getData() {
                return getJSON(url, data, function(json, status) {
                    if (status == "notmodified") {
                        return false;
                    }
                    while (true) {
                        try {
                            localStorage[key] = JSON.stringify(json);
                            localStorage[key + ":date"] = new Date;
                            break;
                        } catch (e) {
                            if (e.name == "QUOTA_EXCEEDED_ERR" || e.name == "NS_ERROR_DOM_QUOTA_REACHED" || e.name == "QuotaExceededError") {
                                cleanupLocalStorage();
                            }
                            break;
                        }
                    }
                    var data = text && {
                        cachedAt: date,
                        retrievedAt: retrieveDate
                    };
                    fn(json, status, data);
                });
            }
            if (text) {
                var obj = $.parseJSON(text);
                var response = fn(obj, "cached", {
                    cachedAt: date
                });
                if (response === false) {
                    var dfd = $.Deferred().promise();
                    dfd.done = function(callback) {
                        callback(obj);
                    };
                    return dfd;
                }
                mostRecent = getData;
                if (refreshtime > 0 && (retrieveDate.getTime() - date.getTime()) > refreshtime) {
                    return getData();
                }
            } else {
                return getData();
            }
            return true;
        };
        $.clearJSON = function(url, data) {
            var param = $.param(data || {});
            delete localStorage[prefix + url + ":" + param];
            delete localStorage[prefix + url + ":" + param + ":date"];
        };
    } else {
        $.retrieveJSON = getJSON;
        $.clearJSON = $.noop;
    }
})(jQuery);
