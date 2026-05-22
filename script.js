function updateRoutine() {

  // CURRENT DATE & TIME
  const now = new Date();

  const currentHour =
  now.getHours();

  const currentMinute =
  now.getMinutes();

  // TIME IN DECIMAL
  const currentTime =
  currentHour + (currentMinute / 60);

  // TODAY INDEX
  // 0=Sun,1=Mon,2=Tue...
  const today =
  now.getDay();

  // MAP DAYS
  const dayMap = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
  };

  const currentDay =
  dayMap[today];

  // REMOVE OLD ACTIVE
  document
  .querySelectorAll(".subject-btn")
  .forEach(subject => {
    subject.classList.remove("active");
  });

  // FIND TODAY ROW
  const rows =
  document.querySelectorAll("table tr");

  rows.forEach(row => {

    const dayCell =
    row.querySelector(".day");

    // ONLY TODAY ROW
    if(dayCell &&
       dayCell.innerText === currentDay){

      // SUBJECTS OF TODAY
      const subjects =
      row.querySelectorAll(".subject-btn");

      subjects.forEach(subject => {

        const start =
        Number(subject.dataset.start);

        const end =
        Number(subject.dataset.end);

        // ACTIVE ONLY CURRENT SUBJECT
        if(currentTime >= start &&
           currentTime < end){

          subject.classList.add("active");
        }

      });

    }

  });

  // DIGITAL CLOCK
  document.getElementById("clock")
  .innerHTML =
  "Current Time : " +
  now.toLocaleTimeString();

}

// RUN EVERY SECOND
setInterval(updateRoutine,1000);

// INITIAL RUN
updateRoutine();