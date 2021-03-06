var CopyPlugin = require('./plugins/copy-plugin'),
    SassPlugin = require('./plugins/sass-plugin'),
    HandlebarsPlugin = require('./plugins/handlebars-plugin'),
    DirectoryColorfyPlugin = require('./plugins/directory-colorfy-plugin'),
    DirectoryEncoderPlugin = require('./plugins/directory-encoder-plugin'),
    ConcatFilesPlugin = require('./plugins/concat-files-plugin'),
    CleanPlugin = require('./plugins/clean-plugin'),
    WebpackPlugin = require('./plugins/webpack-plugin'),
    GroupPlugin = require('./plugins/group-plugin');

module.exports = {
    CopyPlugin,
    SassPlugin,
    HandlebarsPlugin,
    DirectoryColorfyPlugin,
    DirectoryEncoderPlugin,
    ConcatFilesPlugin,
    CleanPlugin,
    WebpackPlugin,
    GroupPlugin
};
