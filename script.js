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
  } else {
    alert("カードを引くことができませんでした。");
  }
}

// ボタンのクリックイベントを設定
document.getElementById('drawButton').addEventListener('click', drawCard);

// 初回ロード時にデッキをシャッフル
shuffleDeck();

rank_kanni = "A";
rank_bunka = "A";
rank_nogyo = "B";
rank_syogyo = "C";
rank_asigaru = "A";
rank_domei = "S";
money_A = 3000;
money_B = 2000;
money_C = 1000;
money_D = 0;
money = 10000;

if (rank_bunka == "A") {
  money = money + 3000;
}
if (rank_bunka == "B") {
  money = money + 2000;
}
if (rank_bunka == "C") {
  money = money + 1000;
}


document.getElementById("id_rank_kanni").textContent = rank_kanni;
document.getElementById("id_rank_bunka").textContent = rank_bunka;
document.getElementById("id_rank_nogyo").textContent = rank_nogyo;
document.getElementById("id_rank_syogyo").textContent = rank_syogyo;
document.getElementById("id_rank_asigaru").textContent = rank_asigaru
document.getElementById("id_rank_domei").textContent = rank_domei;
document.getElementById("id_money_A").textContent = money_A + "貫";
document.getElementById("id_money_B").textContent = money_B + "貫";
document.getElementById("id_money_C").textContent = money_C + "貫";
document.getElementById("id_money_D").textContent = money_D + "貫";
document.getElementById("id_money").textContent = money + "貫";
