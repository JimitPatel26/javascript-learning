function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");

    img.setAttribute("src", thumbnail);
    img.setAttribute("alt", title);

    imgContainer.style.position = "relative";

    card.appendChild(imgContainer);
    imgContainer.appendChild(img);
    container.appendChild(card);

    card.style.display = "flex";
    card.style.flexWrap = "wrap";
    imgContainer.style.marginRight = '15px'
    card.style.backgroundColor = "black";
    card.style.margin = "10px";
    card.style.padding = "10px";
    card.style.borderRadius = "8px";

    let tc = document.createElement("div");
    tc.style.display = "flex";
    tc.style.flexDirection = "column";

    card.appendChild(tc);

    let videoTitle = document.createElement("h3");
    videoTitle.style.color = "white";
    videoTitle.textContent = title;
    tc.appendChild(videoTitle);

    let smallInfos = document.createElement("div");
    smallInfos.style.display = "flex";
    smallInfos.style.gap = "10px";
    tc.appendChild(smallInfos);

    let channel = document.createElement("p");
    channel.textContent = cName + "  | ";
    channel.style.color = "white";
    smallInfos.appendChild(channel);

    let vws = document.createElement("p");
    vws.style.color = "white";
    if (views >= 1000000) {
        views = (views / 1000000).toFixed(0) + "M";
    } else {
        views = (views / 1000).toFixed(0) + "K";
    }
    vws.textContent = views +" views | ";
    smallInfos.appendChild(vws);

    let mo = document.createElement("p");
    mo.style.color = "white";
    mo.textContent = monthsOld + " months ago ";
    smallInfos.appendChild(mo);

    let dur = document.createElement("div");
    dur.textContent = duration;
    dur.style.backgroundColor = "#32302F";
    dur.style.borderRadius = "7px";
    dur.style.padding = "5px";
    dur.style.position = "absolute";
    dur.style.bottom = "17px";
    dur.style.right = "2px";
    dur.style.color = "white";
    imgContainer.appendChild(dur);
}
createCard("Introduction to Backend | Sigma Web Dev Video 2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ");

