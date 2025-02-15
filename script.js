const apiBase = "https://deckofcardsapi.com/api/deck";
let deckId = null;

// デッキをシャッフルしてデッキIDを取得
async function shuffleDeck() {
  const response = await fetch(`${apiBase}/new/shuffle/?deck_count=1`);
  const data = await response.json();
  deckId = data.deck_id;
}

// カードを1枚引く
async function drawCard() {
  if (!deckId) {
    await shuffleDeck();
  }

  const response = await fetch(`${apiBase}/${deckId}/draw/?count=1`);
  const data = await response.json();

  if (data.success && data.cards.length > 0) {
    const card = data.cards[0];
    document.getElementById('cardImage').src = card.image;
    document.getElementById('cardImage').alt = `${card.value} of ${card.suit}`;
    console.log(card.suit);
    console.log(card.value);
    if (card.suit == "HEARTS") {
      if (card.value == "ACE") {
        if (rank_bunka <= 1) {
          money = money + 3000;
        }
        if (rank_bunka == 2) {
          money = money + 2000;
        }
        if (rank_bunka == 3) {
          money = money + 1000;
        }
        rank_bunka = rank_bunka - 1;
      }
      if (card.value == "2") {
        if (rank_kanni <= 1) {
          money = money - 4000;
        }
        if (rank_kanni == 2) {
          money = money - 3000;
        }
        if (rank_kanni == 3) {
          money = money - 2000;
        }
        if (rank_kanni == 4) {
          money = money - 1000;
        }
        rank_kanni = rank_kanni - 1;
      }
      if (card.value == "3") {
        if (rank_bunka == 2) {
          money = money - 1000;
        }
        if (rank_bunka == 3) {
          money = money - 2000;
        }
        if (rank_bunka == 4) {
          money = money - 3000;
        }
        rank_bunka = rank_bunka - 1;
      }
      if (card.value == "4") {
        if (rank_bunka == 2) {
          money = money - 2000;
        }
        if (rank_bunka == 3) {
          money = money - 2000;
        }
        if (rank_bunka == 4) {
          money = money - 2000;
        }
      }
      if (card.value == "5") {
        if (rank_bunka <= 1) {
          money = money - 3000;
        }
        if (rank_bunka == 2) {
          money = money - 1000;
        }
        if (rank_bunka == 3) {
          money = money - 1000;
        }
        if (rank_bunka == 4) {
          money = money - 1000;
        }
        rank_bunka = rank_bunka - 1;
      }
      if (card.value == "6") {
        if (rank_bunka <= 1) {
          money = money + 5000;
        }
        if (rank_bunka == 2) {
          money = money + 4000;
        }
        if (rank_bunka == 3) {
          money = money + 2000;
        }
        if (rank_bunka == 4) {
          money = money + 1000;
        }
      }
      if (card.value == "7") {
        if (rank_kanni <= 1) {
          money = money - 3000;
        }
        if (rank_kanni == 2) {
          money = money - 3000;
        }
        if (rank_kanni == 3) {
          money = money - 1000;
        }
        if (rank_kanni == 4) {
          money = money - 1000;
        }
        rank_kanni = rank_kanni - 1;
      }
      if (card.value == "8") {
        money = money + 3000;
        rank_kanni = rank_kanni - 1;
      }
      if (card.value == "9") {
        if (rank_bunka <= 1) {
          money = money - 5000;
        }
        if (rank_bunka == 2) {
          money = money - 3000;
        }
      }
    }
    if (card.suit == "CLUBS") {
      console.log("CLUBS");
      if (card.value == "ACE") {
        if (rank_nogyo == 2) {
          money = money - 1000;
        }
        if (rank_nogyo == 3) {
          money = money - 2000;
        }
        if (rank_nogyo == 4) {
          money = money - 3000;
        }
      }
      if (card.value == "2") {
        money = money - 2000
        rank_nogyo = rank_nogyo + 1;
      }
      if (card.value == "3") {
        if (rank_nogyo <= 1) {
          money = money + 4000;
        }
        if (rank_nogyo == 2) {
          money = money + 3000;
        }
        if (rank_nogyo == 3) {
          money = money + 2000;
        }
        if (rank_nogyo == 4) {
          money = money + 1000;
        }
        rank_nogyo = rank_nogyo - 1;
      }
      if (card.value == "4") {
        if (rank_nogyo == 3) {
          money = money - 3000;
        }
        if (rank_nogyo == 4) {
          money = money - 3000;
        }
        rank_nogyo = rank_nogyo + 1;
      }
      if (card.value == "5") {
        money = money - 3000;
        if (rank_nogyo >= 3) {
          rank_nogyo = rank_nogyo - 1;
        }
      }
      if (card.value == "6") {
        if (rank_nogyo <= 1) {
          money = money + 3000;
        }
        if (rank_nogyo == 2) {
          money = money + 3000;
        }
      }
      if (card.value == "7") {
        if (rank_kanni == 3) {
          money -= 3000;
        }
        if (rank_kanni == 4) {
          money = money - 3000;
        }
        rank_nogyo --;
      }
      if (card.value == "8") {
        if (rank_nogyo <= 1) {
          money = money - 1000;
        }
        if (rank_nogyo == 2) {
          money = money - 2000;
        }
        if (rank_nogyo == 3) {
          money = money - 3000;
        }
        if (rank_nogyo == 4) {
          money = money - 4000;
        }
      }
      if (card.value == "9") {
        if (rank_nogyo == 3) {
          money = money - 5000;
        }
        if (rank_nogyo == 4) {
          money = money - 5000;
        }
        rank_asigaru = rank_asigaru - 2;
      }
      if (card.value == "10") {
        money = money - 1000;
      }
    }
    if (card.suit == "DIAMONDS") {
      console.log("DIAMONDS");
      if (card.value == "ACE") {
        if (rank_syogyo <= 1) {
          money = money + 5000;
        }
        if (rank_syogyo == 2) {
          money = money + 5000;
        }
        if (rank_syogyo == 3) {
          money = money + 5000;
        }
        rank_syogyo = 1;
      }
      if (card.value == "2") {
        if (rank_syogyo <= 1) {
          money = money + 2000;
        }
        if (rank_syogyo == 2) {
          money = money + 1000;
        }
      }
      if (card.value == "3") {
        if (rank_syogyo <= 1) {
          money = money - 1000;
        }
        if (rank_syogyo == 2) {
          money = money - 1000;
        }
        if (rank_syogyo == 3) {
          money = money - 3000;
        }
        if (rank_syogyo == 4) {
          money = money - 3000;
        }
        rank_syogyo = rank_syogyo - 1;
      }
      if (card.value == "4") {
        if (rank_syogyo == 3) {
          money = money - 3000;
        }
        if (rank_syogyo == 4) {
          money = money - 3000;
        }
        rank_syogyo = rank_syogyo + 1;
      }
      if (card.value == "5") {
        money = money - 2000;
        rank_syogyo = rank_syogyo + 1;
        
      }
      if (card.value == "6") {
      }
      if (card.value == "7") {
        money =money - 2000;
        rank_syogyo = rank_syogyo - 1;
      }
      if (card.value == "8") {
        money = money + 5000;
        rank_syogyo = rank_syogyo - 1;
      }
      if (card.value == "9") {
        money = money - 3000;
        rank_syogyo = rank_syogyo + 2;
      }
      if (card.value == "10") {
        if (rank_syogyo <= 1) {
          money = money + 10000;
        }
        if (rank_syogyo == 2) {
          money = money + 10000;
        }
        if (rank_syogyo == 3) {
          money = money + 5000;
        }
        if (rank_syogyo == 4) {
          money = money + 5000;
        }
      }
    }

    if (card.suit == "SPADES") {
      console.log("SPADES");
      if (card.value == "ACE") {
        if (rank_syogyo <= 1) {
          money = money + 3000;
        }
        if (rank_syogyo == 2) {
          money = money + 2000;
        }
        if (rank_syogyo == 3) {
          money = money + 1000;
        }
        rank_domei = rank_domei - 1;
      }
      if (card.value == "2") {
        if (rank_syogyo >= 2) {
          money = money - 3000;
        }
        rank_asigaru = rank_asigaru - 1;
      }
      if (card.value == "3") {

        if (rank_syogyo >= 2) {
          money = money - 2000;
        }
      }
      if (card.value == "4") {
        money = money -5000;
        rank_domei = rank_domei + 1;
      }
      if (card.value == "5") {
        if (rank_syogyo <= 1) {
          money = money - 1000;
        }
        if (rank_syogyo == 2) {
          money = money - 2000;
        }
        if (rank_syogyo == 3) {
          money = money - 2000;
        }
        if (rank_syogyo == 4) {
          money = money - 3000;
        }
      }
      if (card.value == "6") {
        if (rank_syogyo == 3) {
          money = money - 2000;
        }
        if (rank_syogyo == 4) {
          money = money - 2000;
        }
        rank_domei = rank_domei - 1;
      }
      if (card.value == "7") {
        money =money - 2000;
        rank_syogyo = rank_syogyo - 1;
      }
      if (card.value == "8") {
        money = money + 5000;
        rank_syogyo = rank_syogyo - 1;
      }
      if (card.value == "9") {
        money = money - 3000;
        rank_syogyo = rank_syogyo + 2;
      }
      if (card.value == "10") {
        if (rank_syogyo <= 1) {
          money = money + 10000;
        }
        if (rank_syogyo == 2) {
          money = money + 10000;
        }
        if (rank_syogyo == 3) {
          money = money + 5000;
        }
        if (rank_syogyo == 4) {
          money = money + 5000;
        }
      }
    }
    rank_kanni = Math.max(0, Math.min(rank_kanni, 4));
    rank_bunka = Math.max(0, Math.min(rank_bunka, 4));
    rank_nogyo = Math.max(0, Math.min(rank_nogyo, 4));
    rank_syogyo = Math.max(0, Math.min(rank_syogyo, 4));
    rank_asigaru = Math.max(0, Math.min(rank_asigaru, 4));
    rank_domei = Math.max(0, Math.min(rank_domei, 4));
    update_table();
  } else {
    alert("カードを引くことができませんでした。");
  }
}

function update_table() {
  document.getElementById("id_rank_kanni").textContent = "SABCD"[rank_kanni];
  document.getElementById("id_rank_bunka").textContent = "SABCD"[rank_bunka];
  document.getElementById("id_rank_nogyo").textContent = "SABCD"[rank_nogyo];
  document.getElementById("id_rank_syogyo").textContent = "SABCD"[rank_syogyo];
  document.getElementById("id_rank_asigaru").textContent = "SABCD"[rank_asigaru];
  document.getElementById("id_rank_domei").textContent = "SABCD"[rank_domei];
  document.getElementById("id_money").textContent = money + "貫";
}
function push_button_heart() {
  rank_kanni = rank_kanni - 1;
  rank_bunka = rank_bunka - 1;
  money = money - 1000;
  money_zero_check();
  update_table();
  if(rank_kanni <= 1){
    document.getElementById("id_button_heart").style.display = "none";
  }
}
function money_zero_check() {
  if(money == 0) {
    document.getElementById("id_button_heart").style.display = "none";
    document.getElementById("id_button_club").style.display = "none";
    document.getElementById("id_button_dia").style.display = "none";
    document.getElementById("id_button_spade").style.display = "none";
    money = 10000;
    document.getElementById("cardContainer").style.display = "block";
  }
}
function push_button_club() {
  rank_nogyo = rank_nogyo - 1;
  money = money - 1000;
  money_zero_check();
  update_table();
  if(rank_nogyo <= 1){
    document.getElementById("id_button_club").style.display = "none";
  }
}
function push_button_dia() {
  rank_syogyo = rank_syogyo - 1;
  money = money - 1000;
  money_zero_check();
  update_table();
  if(rank_syogyo <= 1){
    document.getElementById("id_button_dia").style.display = "none";
  }
}
function push_button_spade() {
  rank_domei = rank_domei - 1;
  rank_asigaru = rank_asigaru - 1;
  money = money - 1000;
  money_zero_check();
  update_table();
  if(rank_domei <= 1){
    document.getElementById("id_button_spade").style.display = "none";
  }
}
// ボタンのクリックイベントを設定
document.getElementById('drawButton').addEventListener('click', drawCard);
document.getElementById('id_button_heart').addEventListener('click', push_button_heart);
document.getElementById('id_button_club').addEventListener('click', push_button_club);
document.getElementById('id_button_dia').addEventListener('click', push_button_dia);
document.getElementById('id_button_spade').addEventListener('click', push_button_spade);
// 初回ロード時にデッキをシャッフル
shuffleDeck();

rank_kanni = 4;
rank_bunka = 4;
rank_nogyo = 4;
rank_syogyo = 4;
rank_asigaru = 4;
rank_domei = 4;
money = 10000;

update_table();