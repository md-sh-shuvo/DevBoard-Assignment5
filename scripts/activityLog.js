


getID('clear-history').addEventListener('click', function(){
    for(let activity of document.querySelectorAll(".activities")){
        activity.remove();
    }
})