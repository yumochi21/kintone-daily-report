import Handler from "./handler/Handler";

(() => {
  kintone.events.on([
    'app.record.create.change.報告日',
  ], Handler.handleReportDayChange);
})();