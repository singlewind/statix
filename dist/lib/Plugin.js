'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
    function Plugin(configuration) {
        _classCallCheck(this, Plugin);

        this.configuration = configuration;
    }

    _createClass(Plugin, [{
        key: 'setSourceFolder',
        value: function setSourceFolder(path) {
            console.log('test source');
            this.sourceFolder = path;
        }
    }, {
        key: 'setDestinationFolder',
        value: function setDestinationFolder(path) {
            this.destinationFolder = path;
        }
    }]);

    return Plugin;
}();

module.exports = Plugin;
//# sourceMappingURL=Plugin.js.map