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
document.getElementById("id_rank_kanni").textContent = rank_kanni;

rank_bunka = "A";
document.getElementById("id_rank_bunka").textContent = rank_bunka;

rank_nogyo = "B";
document.getElementById("id_rank_nogyo").textContent = rank_nogyo;

rank_syogyo = "C";
document.getElementById("id_rank_syogyo").textContent = rank_syogyo;

rank_asigaru = "A";
document.getElementById("id_rank_asigaru").textContent = rank_asigaru;

rank_domei = "S";
document.getElementById("id_rank_domei").textContent = rank_domei;

money_A = 3000;
document.getElementById("id_money_A").textContent = money_A + "貫";

money_B = 2000;
document.getElementById("id_money_B").textContent = money_B + "貫";

money_C = 1000;
document.getElementById("id_money_C").textContent = money_C + "貫";

money_D = 0;
document.getElementById("id_money_D").textContent = money_D + "貫";
