const menuList = [
    "カレー",
    "寿司",
    "パスタ",
    "焼肉",
    "ラーメン",
    "天ぷら",
    "ハンバーグ",
    "オムライス",
    "麻婆豆腐",
    "麻婆茄子",
    "酢豚",
    "春巻き",
    "焼きそば",
    "うどん",
    "ラーメン",
    "そうめん",
    "キンパ",
    "ビビンバ",
    "タコライス",
    "たまご丼",
    "カルボナーラ",
    "ペペロンチーノ",
    "ミートパスタ",
    "親子丼",
    "かつ丼",
    "チキン南蛮",
    "唐揚げ",
    "鯖の塩焼き",
    "五目御飯",
    "肉じゃが",
    "お好み焼き",
    "餃子",
    "グラタン",
    "豚キムチ",
    "シュウマイ",
    "野菜炒め",
    "焼うどん",
    "焼肉",
];

document.getElementById('menuButton').addEventListener('click', function() {
    
    const randomMenus = []; // ランダムに選ばれたメニューを保存する配列

while (randomMenus.length < 5) { // 5つ選ぶまで繰り返す
    const randomIndex = Math.floor(Math.random() * menuList.length);
    const randomMenu = menuList[randomIndex];

    // すでに選ばれていないメニューなら追加する
    if (!randomMenus.includes(randomMenu)) {
        randomMenus.push(randomMenu);
    }
}
    document.getElementById('menuDisplay').innerText = randomMenus.join(', ');
});

