module.exports = function (compound) {
    return typeof window === 'undefined' ? [
        'jugglingdb',
        'co-assets-compiler'
    ].concat('development' == compound.app.get('env') ? [
        'ejs-ext',
        'seedjs',
        'co-generators',
    ] : []).map(require) : [
    ];
};

