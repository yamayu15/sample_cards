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
      if (card.value == "10") {
        rank_kanni = 4;
      }
    }

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
  document.getElementById("id_money_A").textContent = money_A + "貫";
  document.getElementById("id_money_B").textContent = money_B + "貫";
  document.getElementById("id_money_C").textContent = money_C + "貫";
  document.getElementById("id_money_D").textContent = money_D + "貫";
  document.getElementById("id_money").textContent = money + "貫";
}
// ボタンのクリックイベントを設定
document.getElementById('drawButton').addEventListener('click', drawCard);

// 初回ロード時にデッキをシャッフル
shuffleDeck();

rank_kanni = 1;
rank_bunka = 1;
rank_nogyo = 2;
rank_syogyo = 3;
rank_asigaru = 1;
rank_domei = 0;
money_A = 3000;
money_B = 2000;
money_C = 1000;
money_D = 0;
money = 10000;

update_table();