import moment from 'moment';
import ScheduleCopy from "../logic/ScheduleCopy";


const Handler = {

  handleReportDayChange(e) {
    console.log(e);
    ScheduleCopy.getSchedule(e.record['報告日'].value).then(response => {
      const schedules = new Array();
      response.events.forEach(event => {
        console.log(event);
        const row = {
          value: {
            '時刻': {
              type: 'SINGLE_LINE_TEXT',
              value: moment(event.start.dateTime).format('HH:mm') + moment(event.end.dateTime).format('HH:mm')
            },
            '予定タイトル': {
              type: 'SINGLE_LINE_TEXT',
              value: event.subject
            },
            '詳細': {
              type: 'MULTI_LINE_TEXT',
              value: event.notes
            },
          }
        };
        schedules.push(row);
      });
      e.record['スケジュール'].value = schedules;
      kintone.app.record.set(e);
    });
  }
};

export default Handler;