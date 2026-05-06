# blog_system
汎用のブログシステム

## 変更履歴

### 2026-05-06
- **[修正]** tiptap `extension-text-align` のバージョン競合を解消（v3 → v2 に統一）
- **[修正]** Vite の `base` を `/admin/` に設定し、アセットの 404 を解消
- **[修正]** Deploy ボタン実行時に `/admin/**` ファイルが消えるバグを修正（既存バージョンのハッシュを引き継ぐ方式に変更）
- **[追加]** `firestore.indexes.json` を追加し、Firestore 複合インデックスをデプロイ時に自動生成
- **[追加]** `firebase.json` に `"indexes": "firestore.indexes.json"` を追記
