export const BLOG_CONFIG = {
  // サイト情報（デプロイごとに変更）
  siteName: 'いじめ対策完全マニュアル ブログ',
  siteUrl: 'https://ijime-manuals-blog.web.app',

  // ログイン許可するGoogleドメイン（空配列 = 全Googleアカウント許可）
  allowedDomains: [] as string[],
  // 例: ['example.com', 'example.co.jp']

  // Firebase設定（Firebase Console > プロジェクトの設定 > マイアプリ からコピー）
  firebase: {
    apiKey: 'AIzaSyAi8u_uoGD157JFGYiTiC-Xe0i0ZFQS8Ak',
    authDomain: 'ijime-manuals.firebaseapp.com',
    projectId: 'ijime-manuals',
    storageBucket: 'ijime-manuals.firebasestorage.app',
    messagingSenderId: '686274736641',
    appId: '1:686274736641:web:f199a4265edf8dcbbd0600',
  },

  // Firebase Hosting サイトID（firebase.json の site と一致させる）
  hostingSiteId: 'ijime-manuals-blog',
}
