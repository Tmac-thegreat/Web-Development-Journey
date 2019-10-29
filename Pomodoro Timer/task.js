const form = document.querySelector('#pomo-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-btn');
const filter = document.querySelector('.filter');
const taskInput = document.querySelector('#new-task');
const start = document.querySelector('.time');
const complete = document.querySelector('.complete');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const timerDisplay = document.querySelector('.timer');
const addTask = document.querySelector('.add');
const buttons = document.querySelector('.buttons');


form.addEventListener('submit', addedTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);

let isClockRunning = false
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;
let breakSessionDuration = 300;


start.addEventListener('click', function(){
  toggleClock();
});
// pause.addEventListener('click', function(){
//   toggleClock();
// });
complete.addEventListener('click', function(){
  toggleClock(true);
});
reset.addEventListener('click', function(){
  toggleClock();
});

const displayCurrentTimeLeftInSession = function() {
  const secondsLeft = currentTimeLeftInSession;
  let result = '';
  const seconds = secondsLeft % 60;
  const minutes = parseInt(secondsLeft / 60) % 60;
  let hours = parseInt(secondsLeft / 3600);
  // add leading zeroes if it's less than 10
  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time
  }
  if (hours > 0) result += `${hours}:`
  result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
  timerDisplay.innerText = result.toString();
}

const stopClock = function(){
  // 1) reset the timer we set
  clearInterval(clockTimer);
  // 2) update our variable to know that the timer is stopped
  isClockRunning = false;
  // reset the time left in the session to its original state
  currentTimeLeftInSession = workSessionDuration;
  // update the timer displayed
  displayCurrentTimeLeftInSession();
}

const toggleClock = function(reset){
  if (reset) {
    // STOP THE TIMER
    stopClock();
  } else {
    if (isClockRunning === true) {
      // PAUSE THE TIMER
      clearInterval(clockTimer);
      isClockRunning = false;
    } else {
      // START THE TIMER
      isClockRunning = true;
      clockTimer = setInterval(() => {
        // decrease time left / increase time spent
        currentTimeLeftInSession--;
        displayCurrentTimeLeftInSession();
    }, 1000)
    }
  }
}








function addedTask(e){
  if(taskInput.value === ''){
   alert('add a task');
  }

  const li = document.createElement('li');
  li.className = 'todo-item';

  li.appendChild(document.createTextNode(taskInput.value));
  
  const link = document.createElement('a');
  link.className = 'delete';

  link.innerHTML = '<i class ="remove">X</i>';
  
  li.appendChild(link);

  taskList.appendChild(li);

  // storeInLocalStorage(taskInput.value);

  // taskInput.value = '';
  
  e.preventDefault();
}

function clearTasks(){
  while(taskList.firstChild){
taskList.removeChild(taskList.firstChild);
  }
  // clearTasksFromLocalStorage();
}


function removeTask(e){
  if(e.target.parentElement.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
      // removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}




