var container = document.querySelector('.container');
var date = new Date(Date.now());
var dueDate = new Date('Apr 09 2023');
var timeDiff = dueDate.getTime() - date.getTime();
var daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


if (date > dueDate) {
    console.log('The due date has passed. The fetch request will not be executed.');
    fetch = null;
}  else {
    (
        async function() {
            await fetch('api.json')
            .then(res => res.json())
            .then(data => {
                data.forEach(element => {
                    const fragment = document.createRange().createContextualFragment(
                        `<div>
                        <img width="170px" src="${element.poster_path}"/>
                        <br />
                        <span>${element.title}</span>
                    </div>`
                    )
                    container.appendChild(fragment);
                });
            })
        }
    )();
}  
if (daysLeft > 0) {
    console.log('You have ' + daysLeft + ' days left until the due date.');
} else {
    console.log('The due date has passed.');
}
