(function() {
  //UI variables
  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');
  const countdown = document.querySelector('#countdown');
  const year = document.querySelector('#year');
  const changeRandomColor = document.querySelector('.time');
  const loading = document.querySelector('#loading');
  const numbers = document.querySelector('.numbers')

  const currentYear = new Date().getFullYear();
  //create a new date
  const newYearTime = new Date(`October 15 ${currentYear + 1} 00:00:00`);

  //set Background Year
  year.innerHTML = currentYear;



  //Update countdown
  function updateCountDown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

    
  }

  //spinner
  setTimeout(()=>{
    loading.remove();
    countdown.style.display = 'flex'
  },1000)

  setInterval(updateCountDown, 1000);
})();
