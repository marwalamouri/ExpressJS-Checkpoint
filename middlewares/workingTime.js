function workingTime(req, res, next) {
  let currentDate = new Date();
  if (
    currentDate.getHours() > 9 &&
    currentDate.getHours() < 17 &&
    currentDate.getDay() > 0 &&
    currentDate.getDay() < 6
  ) {
    next();
  } else {
    res.send("Working hours : Monday to Friday,  from 9 to 17.");
  }
}

export default workingTime;
