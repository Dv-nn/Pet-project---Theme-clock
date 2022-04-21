const hour = document.getElementById('clock-hour');
const minutes = document.getElementById('clock-minutes');
const seconds = document.getElementById('clock-seconds');

const clock = () => {
   let date = new Date();
   let hr = date.getHours() * 30;
   let min = date.getMinutes() * 6;
   let sec = date.getSeconds() * 6;

   hour.style.transform = `rotateZ(${hr + min / 12}deg)`;
   minutes.style.transform = `rotateZ(${min}deg)`;
   seconds.style.transform = `rotateZ(${sec}deg)`;
}
setInterval(clock, 1000);


const textHour = document.getElementById('text-hour');
const textMinutes = document.getElementById('text-minutes');
const textAmPm = document.getElementById('text-ampm');
const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYear = document.getElementById('date-year');

const clockText = () => {
   let date = new Date();

   let hr = date.getHours();
   let ampm;
   let min = date.getMinutes();
   let day = date.getDate();
   let month = date.getMonth();
   let year = date.getFullYear();

   if (hr >= 12) {
      hr = hr - 12;
      ampm = 'PM';
   } else {
      ampm = 'AM';
   }
   if (hr == 0) {hr = 12;}
   if (hr < 10) { hr = `0${hr}`;}

   textHour.innerHTML = `${hr}:`;

   if (min < 10) { min = `0${min}`;}

   textMinutes.innerHTML = min;

   textAmPm.innerHTML = ampm;

   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

   dateDay.innerHTML = day;
   dateMonth.innerHTML = `${months[month]},`;
   dateYear.innerHTML = year;
}
setInterval(clockText, 1000);


const buttonTheme = document.getElementById('theme-button');


buttonTheme.addEventListener('click', () => {
   const html = document.querySelector('html');
   if(html.classList.contains('dark-theme')) {
       html.classList.remove('dark-theme');
       buttonTheme.classList.remove('bxs-sun');
   } else {
       html.classList.add('dark-theme');
       buttonTheme.classList.add('bxs-sun');
   }
})
