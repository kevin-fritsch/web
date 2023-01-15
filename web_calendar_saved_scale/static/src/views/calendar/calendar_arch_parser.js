/** @odoo-module **/

import {patch} from "@web/core/utils/patch";
import {CalendarArchParser} from "@web/views/calendar/calendar_arch_parser";

patch(CalendarArchParser.prototype, "parse patch", {
    parse(arch, models, modelName) {
        let res = this._super(arch, models, modelName);
        res.scale = "week";
        return res;
    },
});
