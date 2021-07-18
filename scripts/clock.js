function currentDate() {
    let date = new Date()
    let day = date.getDate()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let month = date.getMonth()
    let curr_date = date.getDate()
    let year = date.getFullYear()
    let month_name = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] 
    let showDay = document.querySelectorAll('.content-day span')
    let midDay  = 'AM'
    let nightDay = 'PM'
    midDay = (hour >= 12) ? nightDay : midDay
    hour = (hour === 0) ? 12 : ((hour > 12) ? (hour - 12) : hour)
    hour = updateTime(hour)
    min = updateTime(min)
    sec = updateTime(sec)
    curr_date = updateTime(curr_date)
    document.querySelector('#time').innerHTML = `${hour}:${min}`
    document.querySelector('#sec').innerHTML = `${sec}`
    document.querySelector('#med').innerHTML = `${midDay}`
    document.querySelector('#full_date').innerHTML = `${month_name[month]} ${curr_date} ${year}`
    showDay[day].style.opacity = 1   
}

function updateTime(k) {
    if(k < 10){
        return "0" + 1
    }else{
        return k
    }
}

setInterval(currentDate, 1000)
