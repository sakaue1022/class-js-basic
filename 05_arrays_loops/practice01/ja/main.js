console.log('ready!');

const fruits = ['りんご', 'ばなな', 'みかん', 'ぶどう'];

// i は 0, 1, 2, 3 と変化する（fruits.length は 4）
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}番目: ${fruits[i]}`);
}

const stepIndicator = document.getElementById('step-indicator');
const stepMessage = document.getElementById('step-message');
const nextBtn = document.getElementById('next-btn');

// ガイドメッセージの配列（全4件：インデックスは 0 〜 3）
const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];

// 現在表示しているインデックス番号（0からスタート）
let currentIndex = 0;

// 初期表示の反映
stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
stepMessage.textContent = steps[currentIndex];

// ボタンクリックで次のメッセージへ進める
nextBtn.addEventListener('click', () => {
    // 1. インデックスを1つ進める
    currentIndex++;

    // 2. 最後まで行ったら最初（0）に戻す
    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }

    // 3. 画面のテキストを更新（人間向けの表示番号は +1 する）
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
    stepMessage.textContent = steps[currentIndex];
});

// 入力フォームの要素を取得
const newStepInput = document.getElementById('new-step-input');
const addBtn = document.getElementById('add-btn');

// 「ステップを追加」ボタンをクリックしたとき
addBtn.addEventListener('click', () => {
    const newStepText = newStepInput.value;

    // 入力欄が空でなければ配列に追加
    if (newStepText !== '') {
        // 1. 配列の末尾に新しいメッセージを追加
        steps.push(newStepText);

        // 2. ステップ表示の分母（steps.length）を更新
        stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

        // 3. 入力欄をクリア
        newStepInput.value = '';

        console.log(steps); // 配列にデータが増えたことを確認
    }
});

const removeBtn = document.getElementById('remove-')
removeBtn.addEventLestener('click', () => {
    stepIndicator.textContent = 'STEP${currentInd'
})

//11月9日分//
for (let i = 0; i < 5; i++) {
    console.log(`${i}回目の処理です。`);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}番目 : ${fruits[i]}`)
}

const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];
let text = '';

for (let i = 0; i < menus.length; i++) {
    text += `<li>${menus[i]}</li>`;
}

menuList.innerHTML = text;
