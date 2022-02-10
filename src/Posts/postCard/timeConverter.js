export const toDate = (str) =>{
      let today = new Date()
      let date = new Date(str)
      let timeEnd = today.getTime()
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];
      let day = date.getDate()
      let month = date.getMonth()
      let year = date.getFullYear()
      let timeStart = date.getTime()

      let timeAgo = timeEnd - timeStart
       var milliseconds = Math.floor((timeAgo % 1000) / 100),
      seconds = Math.floor((timeAgo / 1000) % 60),
      minutes = Math.floor((timeAgo / (1000 * 60)) % 60),
      hours = Math.floor((timeAgo / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

 


     
      if(day===today.getDate() && month === today.getMonth() && year === today.getFullYear()){
         return (hours>0?`${hours} h ago`:
         minutes>0?`${minutes} m ago`:
         seconds>0?`${seconds} sec ago`:
         ''
         
         )
      }
      else{
         return(`${day} ${monthNames[month]} ${year}`)
      }

   }
