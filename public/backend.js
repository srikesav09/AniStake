function searchAnime() {

  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("anime-card");

  for (let i = 0; i < cards.length; i++) {

    let title = cards[i].innerText.toLowerCase();

    if (title.includes(input)) {
      cards[i].style.display = "";
    } 
    else {
      cards[i].style.display = "none";
    }

  }
}