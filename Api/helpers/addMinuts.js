const addMinutes = (minutes, date = new Date()) => {
    return new Date(date.setMinutes(date.getMinutes() + minutes));
  };
  
  module.exports = addMinutes;