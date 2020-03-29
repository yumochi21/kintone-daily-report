import $ from 'jquery';

const ScheduleCopy = {

  getSchedule(day) {
    return new kintone.Promise((resolve, reject) => {
      const startDateTime = day + encodeURIComponent('T00:00:00+09:00');
      const endDateTime = day + encodeURIComponent('T23:59:00+09:00');
  
      $.ajax({
        type: 'GET',
        url: '/g/api/v1/schedule/events?rangeStart=' + startDateTime + '&rangeEnd=' + endDateTime + '&orderBy=start asc'
      }).done(response => {
        resolve(response);
      }).fail(error => {
        reject(error);
      });
    });
  }
};

export default ScheduleCopy;