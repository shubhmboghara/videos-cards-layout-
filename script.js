function card(title, cname, views, months, duration, thum) {

    let viewstr
    if (views < 1000000) {
        viewstr = views / 1000 + "k"
    }
    else {
        viewstr = views / 1000000 + "m"
    }

    let html = `<div class="card">
            <div class="images">
                <img src="${thum}"
                    alt="">
                <div class="du">${duration}</div>    
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cname} . ${viewstr} view  ${months} months ago</p>
            </div>
        </div>`

    document.querySelector(".con").insertAdjacentHTML("beforeend", html);

}

card("Bumrah With The Bat! | 35 Runs In One Over Against Stuart Broad! | England v India 2022", "icc", 51000000, 8, "5:00", "https://i.ytimg.com/vi/M3ygFVrfR6E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC0E5raqyTUN9hoehqixo1XetH_2w")

card("किसे देखकर Shock हुए Gokuldham वासी? | Taarak Mehta Ka Ooltah Chashmah | Jetha Jasoos", "tmcko", 4000000, 8, "31.20", "https://i.ytimg.com/vi/iw2-y1PlGkk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD3DTKGPtlLWSB09aeMlZycJvpmoQ")





























