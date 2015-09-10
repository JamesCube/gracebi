(function() {
    var grace = andrea.grace;
    andrea.blink.declare("andrea.grace.constants.AppConst");

    var AppConst = andrea.grace.constants.AppConst;

    /**
     * Models
     */
    AppConst.MODEL_GRACE = "MODEL_GRACE";

    /**
     * Mediators
     */
    AppConst.MEDIATOR_DATA_DISCOVERY = "MEDIATOR_DATA_DISCOVERY";

    AppConst.MEDIATOR_ANALYSIS_SRC_DIM = "MEDIATOR_ANALYSIS_SRC_DIM";
    AppConst.MEDIATOR_ANALYSIS_SRC_MEA = "MEDIATOR_ANALYSIS_SRC_MEA";
    AppConst.MEDIATOR_ANALYSIS_DES_DIM = "MEDIATOR_ANALYSIS_DES_DIM";
    AppConst.MEDIATOR_ANALYSIS_DES_MEA = "MEDIATOR_ANALYSIS_DES_MEA";

    AppConst.MEDIATOR_ANALYSIS_RESULT = "MEDIATOR_ANALYSIS_RESULT";

    AppConst.MEDIATOR_VIZ_NAVIGATOR = "MEDIATOR_VIZ_NAVIGATOR";
    /**
     * Actions
     */
    AppConst.ACTION_CHANGE_DATA_PROVIDER = "ACTION_CHANGE_DATA_PROVIDER";
    AppConst.ACTION_RUN_ANALYSIS = "ACTION_RUN_ANALYSIS";
    /**
     * Notifications
     */
    AppConst.NOTIFICATION_DATA_PROVIDER_CHANGED = "NOTIFICATION_DATA_PROVIDER_CHANGED";
    AppConst.NOTIFICATION_VIZ_CONTEXT_CHANGED = "NOTIFICATION_VIZ_CONTEXT_CHANGED";
    AppConst.NOTIFICATION_VIZ_CONTEXT_APPLIED = "NOTIFICATION_VIZ_CONTEXT_APPLIED";

    AppConst.VIEW_NOTIFICATION_PASTE_TO = "VIEW_NOTIFICATION_PASTE_TO";

})();