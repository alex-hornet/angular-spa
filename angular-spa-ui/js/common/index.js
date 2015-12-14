"use strict";

module.exports = function (app) {

    require('./common-srv')(app);

    // Page preload actions realized in mainCtrl
    require('./common-ctrl')(app);

    require('./recordsListDir')(app);
    
    app.constant(
        'appConfig',
        require('./app-config')
    );
    

};
