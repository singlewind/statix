var statixPlugins = require('./plugins');
module.exports = {
    useFileWatch: true,
    port: 8000,
    sourceFolder: `${process.cwd()}/demo/source`,
    outputFolder: `${process.cwd()}/demo/build`,
    watchFolders: [`${process.cwd()}/demo/source`, `${process.cwd()}/hema_modules`],
    plugins: [
        [
            new statixPlugins.SassPlugin({
                directories: ['/assets/**/*.scss']
            }),
            new statixPlugins.HandlebarsPlugin({
                directories: ['/**/*.html.hbs'],
                templateData: { test: 'test example'},
                batch: [`${process.cwd()}/source/layouts`, `${process.cwd()}/source/partials`]
            })
        ],
        new statixPlugins.CopyPlugin({
            directories: ['/**/*.png']
        }),
    ]
};