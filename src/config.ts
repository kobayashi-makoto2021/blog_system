export const BLOG_CONFIG = {
  // サイト情報（デプロイごとに変更）
  siteName: 'サイト名',
  siteUrl: 'https://test-blog-ca5a7.web.app',

  // ログイン許可するGoogleドメイン（空配列 = 全Googleアカウント許可）
  allowedDomains: [] as string[],
  // 例: ['example.com', 'example.co.jp']

  // Firebase設定（Firebase Console > プロジェクトの設定 > マイアプリ からコピー）
  firebase: {
    apiKey: 'AIzaSyA2hMI2m7t_E94yJXon4sBix9oBF7a23Vc',
    authDomain: 'test-blog-ca5a7.firebaseapp.com',
    projectId: 'test-blog-ca5a7',
    storageBucket: 'test-blog-ca5a7.firebasestorage.app',
    messagingSenderId: '1012300587036',
    appId: '1:1012300587036:web:281f2e8208a57b5833ffd9',
  },

  // Firebase Hosting サイトID（firebase.json の site と一致させる）
  hostingSiteId: 'test-blog-ca5a7',
}
