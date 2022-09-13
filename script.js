
// task 1 
let btn1 = document.querySelector('#bnt1')

btn1.addEventListener('click', () => {
    fetch('https://my-json-server.typicode.com/typicode/demo/posts')
        .then(res => res.json())
        .then(res => {
            console.log();
            let date = new Date()
            btn1.innerHTML = 'Your vote is accepted: ' + date
        })

})

// task 2 
let btn2 = document.querySelector('#bnt2')

btn2.addEventListener('click', () => {
    fetch('./books.json')
        .then(res => res.json())
        .then(res => {
            btn2.style.display = "none"

            let div = document.querySelector('div')
            res.forEach(el => {
                div.innerHTML += el.name + "<br>"

            });
        })
})
