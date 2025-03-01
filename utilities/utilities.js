function getID(id){
    return document.getElementById(id);
}

function getInnerValue(id){
    let value = getID(id).innerText;
    return parseInt(value);
}
function getInnerText(id){
    return getID(id).innerText;
}

let count = 0;
function updation(id , id2){
    getID(id).addEventListener('click', function(event){
        alert('Board updated successfully');
        getID(id).setAttribute('disabled', 'true');
        getID('total-tasks').innerText = getInnerValue('total-tasks')+1;
        getID('remaining-tasks').innerText = getInnerValue('remaining-tasks')-1;

        let date = new Date();
        let time = date.toLocaleTimeString('en-us', {hour12: true});

        let p = document.createElement('p');
        p.innerText = 'You have Complete The Task ' + getInnerText(id2) +' at ' +time;
        p.classList.add('activities','bg-[#F4F7FF]', 'p-3', 'rounded-2xl', 'mt-1')
        getID('activity-container').appendChild(p);


        count++;
        if(count === 6) alert('Congrats!!! You have completed all the tasks');
    })
}
