/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/* CONF MERGE */
function confMerge(object) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return _.mergeWith.apply(_, [object].concat(sources, [function (prev, next) {
            if (!_.isArray(prev) || !_.isArray(next))
                return;
            return prev.concat(next);
        }]));
}
/* EXPORT */
exports.default = confMerge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBRVosMEJBQTRCO0FBRTVCLGdCQUFnQjtBQUVoQixtQkFBcUIsTUFBTTtJQUFFLGlCQUFVO1NBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtRQUFWLGdDQUFVOztJQUVyQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBWCxDQUFDLEdBQWEsTUFBTSxTQUFLLE9BQU8sR0FBRSxVQUFFLElBQUksRUFBRSxJQUFJO1lBRW5ELEVBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUcsSUFBSSxDQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1lBRXpELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFHLElBQUksQ0FBRSxDQUFDO1FBRTlCLENBQUMsSUFBRTtBQUVMLENBQUM7QUFFRCxZQUFZO0FBRVosa0JBQWUsU0FBUyxDQUFDIn0=