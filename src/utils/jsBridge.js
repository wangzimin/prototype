(function() {
  (function() {
    var MockEvent, isEmbedded;
    isEmbedded = /YTX/.test(navigator.userAgent);
    if (isEmbedded) {
      window.onBridgeReady = function(callback) {
        if (window.YTXBridge) {
          window.YTXBridge.init();
          if (typeof callback === "function") {
            callback();
          }
          return;
        }
        return document.addEventListener("YTXBridgeReady", (function() {
          window.YTXBridge.init();
          return typeof callback === "function" ? callback() : void 0;
        }), false);
      };
    } else {
      window.onBridgeReady = function(callback) {
        window.YTXBridge = new MockEvent();
        window.Ti = {
          App: new MockEvent()
        };
        return window.onload = function() {
          return typeof callback === "function" ? callback() : void 0;
        };
      };
    }
    return MockEvent = (function() {
      function MockEvent() {
        this.events = {};
      }

      MockEvent.prototype.addEventListener = function(eventName, func) {
        if (!this.events[eventName]) {
          this.events[eventName] = [];
        }
        return this.events[eventName].push(func);
      };

      MockEvent.prototype.fireEvent = function(eventName) {
        var args, func, j, len, ref, results;
        if (!this.events[eventName]) {
          return;
        }
        args = [].slice.call(arguments);
        args.shift();
        ref = this.events[eventName];
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          func = ref[j];
          if (func) {
            results.push(func.apply({}, args));
          }
        }
        return results;
      };

      MockEvent.prototype.removeEventListener = function(eventName, func) {
        var i, item, j, len, ref;
        if (!this.events[eventName]) {
          return;
        }
        ref = this.events[eventName];
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          item = ref[i];
          if (item === func) {
            delete this.events[eventName][i];
            return;
          }
        }
      };

      return MockEvent;

    })();
  })();

}).call(this);