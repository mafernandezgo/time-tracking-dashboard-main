window.addEventListener("load", async () => {
    const buttons = document.querySelectorAll(".btn")
    const current = document.querySelectorAll(".current")
    const previous = document.querySelectorAll(".previous")
    const timeSpace = document.querySelectorAll(".timeSpace")

    function getData () { 
        return fetch('data.json')
        .then(response => response.json())
    }

    const data = await getData()


    buttons.forEach(async(button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => {
                btn.classList.remove("active")
            })
            button.classList.add("active")

            let period = button["dataset"]["period"]
            
            timeSpace.forEach ((text) => {
                if (period === "daily"){
                    text.innerHTML = "Yesterday - "
                } else if (period === "weekly"){
                    text.innerHTML = "Last Week - "
                } else {
                    text.innerHTML = "Last Month - "
                }
            } ) 

            for (i= 0; i < data.length; i++){
                if (data[i]["title"] === previous[i]["dataset"]["title"]){
                    previous[i].innerHTML = data[i]["timeframes"][period]["previous"]
                    current[i].innerHTML = data[i]["timeframes"][period]["current"]
                }
            }
        })
    })
})





