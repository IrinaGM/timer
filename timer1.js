/**
 * * The following is an alarm clock / timer which beeps after a specific amount of time has passed (in seconds).
 * * The user can specify an unlimited number of alarms using command line argumants.
 * * Usage example: `node timer1.js 10 3 5 15 9`
 */

const alarmTimes = process.argv.slice(2); // Retrieves the alarm times specified by the user into an array.

/**
 * @function cleanArray - removes negative numbers and strings if were provided by the user. And sorts the times.
 * @param {array} args - alarm times specifed by the user.
 */
const cleanArray = (args) => {
  return args
    .filter((element) => {
      if (Number(element) && Number(element) >= 0) {
        return true;
      }
    })
    .map((element) => Number(element))
    .sort((a, b) => a - b);
};

/**
 * @function timer
 * @param {array} times - alarm times specifed by the user.
 */
const timer = (times) => {
  // if no time has been specified by the user the for loop will not run
  for (const time of cleanArray(times)) {
    setTimeout(() => {
      process.stdout.write("\x07");
      process.stdout.write(`.${time} `); //this line is to give visual queue as the sound on my vagrant box is not working for me.
    }, time);
  }
};

timer(alarmTimes);
