const link = document.getElementById('eternal-link');
const url = link.getAttribute('href');
console.log(url);

link.setAttribute('href', 'https://yahoo.co.jp');

const postBtn = document.getElementById('post-btn');
postBtn.removeAttribute('disbled');
if (!postBtn.hasAttribute('disabled')) {
    console.log('有効化中');
}

const viewImg = document.getElementById('view-img');
const toggleImgBtn = document.getElementById('toggle-img-btn');
const DAY_IMG = 'https://picsum.photos/id/1015/500/300';
const NIGHT_IMG = 'https://picsum.photos/id/1040/500/300';

toggleImgBtn.addEventListener('click', () => {
    const currentSrc = viewImg.getAttribute('src');

    // 2. if文で現在の画像がどちらかを判定
    if (currentSrc === DAY_IMG) {
        // 夜の画像に変更
        viewImg.setAttribute('src', NIGHT_IMG);
        viewImg.setAttribute('alt', '夜の画像');
    } else {
        // 昼の画像に戻す
        viewImg.setAttribute('src', DAY_IMG);
        viewImg.setAttribute('alt', '昼の山の風景');
    }
});

const switchSiteBtn = document.getElementById('switch-site-btn');
const externalLink = document.getElementById('external-link');

switchSiteBtn.addEventListener('click', () => {
    // リンク先を変更
    externalLink.setAttribute('href', 'https://computer.trident.ac.jp/');
    externalLink.textContent = 'トライデント公式サイトを開く（同じタブ）';

    // target="_blank" を削除して同じタブ遷移にする
    externalLink.removeAttribute('target');

    // ボタンを完了状態にして無効化
    switchSiteBtn.textContent = '切り替え完了！';
    switchSiteBtn.setAttribute('disabled', 'true');
});

const commentInput = document.getElementById('comment-input');
const charCount = document.getElementById('char-count');
const warningText = document.getElementById('warning-text');
const counterStatus = document.querySelector('.counter-status');
const postBtn = document.getElementById('post-btn');

const MAX_LENGTH = 15;

const passwordInput = document.getElementById('password-input');
const togglePasswordBtn = document.getElementById('toggle-password-btn');

// 2. クリックイベントの設定
togglePasswordBtn.addEventListener('click', () => {
    // 3. 現在の type 属性の値を取得
    const currentType = passwordInput.getAttribute('type');

    // 4. if文で条件分岐
    if (currentType === 'password') {
        // パスワードが見えるようにする
        passwordInput.setAttribute('type', 'text');
        togglePasswordBtn.textContent = '非表示';
        togglePasswordBtn.classList.add('is-active');
    } else {
        // パスワードを隠す（伏せ字に戻す）
        passwordInput.setAttribute('type', 'password');
        togglePasswordBtn.textContent = '表示';
        togglePasswordBtn.classList.remove('is-active');
    }
});

commentInput.addEventListener('input', () => {
    // 1. 現在の文字数を取得
    const currentLength = commentInput.value.length;

    // 2. カウンター数値を画面に反映
    charCount.textContent = currentLength;

    // 3. if文による3パターンの条件分岐
    if (currentLength === 0) {
        // 空文字のとき：ボタンは無効、警告はなし
        postBtn.setAttribute('disabled', 'true');
        warningText.textContent = '';
        commentInput.classList.remove('is-error');
        counterStatus.classList.remove('is-error');

    } else if (currentLength <= MAX_LENGTH) {
        // 1〜15文字の適正入力：ボタンを有効化！
        postBtn.removeAttribute('disabled');
        warningText.textContent = '';
        commentInput.classList.remove('is-error');
        counterStatus.classList.remove('is-error');

    } else {
        // 15文字を超えたとき：ボタンを再び無効化し、赤色警告を表示！
        postBtn.setAttribute('disabled', 'true');
        warningText.textContent = '文字数オーバーです！';
        commentInput.classList.add('is-error');
        counterStatus.classList.add('is-error');
    }
});

// （おまけ）投稿ボタンが押されたときの処理
postBtn.addEventListener('click', () => {
    alert(`「${commentInput.value}」を投稿しました！`);
    commentInput.value = ''; // 入力欄をクリア
    charCount.textContent = '0';
    postBtn.setAttribute('disabled', 'true');
});
