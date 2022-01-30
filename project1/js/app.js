/* Открыть */
function openNav() {
    // document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.width = "100%";
}

/* Закрыть */
function closeNav() {
    // document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.width = "0%";
}

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}