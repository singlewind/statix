'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vfs = require('vinyl-fs');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var WatchablePlugin = require('./watchable-plugin');

var SassPlugin = function (_WatchablePlugin) {
    _inherits(SassPlugin, _WatchablePlugin);

    function SassPlugin() {
        _classCallCheck(this, SassPlugin);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SassPlugin).apply(this, arguments));
    }

    _createClass(SassPlugin, [{
        key: 'run',
        value: function run() {
            var files = this._getFilePaths(this.configuration.directories);

            return new Promise(function (resolve, reject) {
                vfs.src(files, { base: this.sourceFolder }).pipe(sourcemaps.init()).pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)).pipe(sourcemaps.write('/')).pipe(vfs.dest(this.destinationFolder)).on('finish', function () {
                    resolve();
                });
            }.bind(this));
        }
    }, {
        key: 'getWatchGlobs',
        value: function getWatchGlobs(watchFolders) {
            return _get(Object.getPrototypeOf(SassPlugin.prototype), 'getWatchGlobs', this).call(this, watchFolders, this.watchConfiguration.pattern);
        }
    }]);

    return SassPlugin;
}(WatchablePlugin);

module.exports = SassPlugin;
//# sourceMappingURL=sass-plugin.js.map