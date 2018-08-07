console.log("Javascript is alive!");

document.addEventListener('DOMContentLoaded', function () {

    const greet = document.getElementById('greeting')
    greet.innerText = 'Hello, World!'

    const li = document.getElementsByTagName('li')
        for (let i of li) {
            i.style.backgroundColor = 'yellow'
        }

    let newImage = document.createElement('img')
    newImage.setAttribute('src', `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`);
    greet.appendChild(newImage)

    let newList = document.createElement('ul')
    newList.className = 'todo-items'
    document.body.appendChild(newList)
   
    
    const chores = ['make coffee', 'eat donut', 'change diapers', 'drive to work']
        chores.forEach(function(item) {
            let li = document.createElement('li')//create new li element
            let text = document.createTextNode(item);//create a text node w/text from array
            li.appendChild(text);//add text to li element
            newList.appendChild(li);//add li element to ul "todo-items"
        })
})