const { src, dest, series, watch } = require(`gulp`),
htmlCompressor = require(`gulp-htmlmin`),
CSSLinter = require(`gulp-stylelint`),
cssCompressor = require(`gulp-clean-css`),
jsLinter = require(`gulp-eslint`),
jsCompressor = require(`gulp-uglify`),
babel = require(`gulp-babel`),
browserSync = require(`browser-sync`),
reload = browserSync.reload;

let browserChoice = `firefox`;

let compressHTML = () => {
    return src([`index.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let lintCSS = () => {
    return src([`styles/main.css`])
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let compressCSS = () => {
    return src([`styles/main.css`])
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/styles`));
};

let validateJS = () => {
    return src([`scripts/main.js`])
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let transpileJSForDev = () => {
    return src([`scripts/main.js`])
        .pipe(babel())
        .pipe(dest(`.tmp/scripts`));
};

let transpileJSForProd = () => {
    return src([`scripts/main.js`])
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let serve = () => {
    browserSync({
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `.tmp`,
                `./`,
            ]
        }
    });

    watch(`scripts/main.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);

    watch(`styles/main.css`).on(`change`, reload);

    watch(`index.html`).on(`change`, reload);
};

exports.compressHTML = compressHTML;
exports.lintCSS = lintCSS;
exports.compressCSS = compressCSS;
exports.validateJS = validateJS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.serve = series(
    validateJS,
    transpileJSForDev,
    serve
);
exports.build = series(
    compressHTML,
    compressCSS,
    transpileJSForProd
);