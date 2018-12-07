document.querySelectorAll(".spy-container--item").forEach(function (item, i, listObj) {
    
    item.onclick = function(){
        listObj.forEach(function (item, i, listObj) {
            item.style.background = "white";
        });
        
        this.style.background = "#3498db";
    };
});
