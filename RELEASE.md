# Release Notes

## v1.0 — Design System Overhaul (2026-06-27)

Kaidan Shosekikan Design System に基づく全面リデザイン。
怪奇書籍館のビジュアル言語（深い黒、褪せた金、真紅）を忠実に実装。

### Visual

- **フォント**: Noto Serif JP → Shippori Mincho（明朝体・雰囲気系）+ JetBrains Mono（機能系）
- **カラートークン**: デザインシステム準拠（`--bg: #0a0a0b`, `--gold: #d4a843`, `--crimson: #8b1a1a` 等）
- **和紙テクスチャ**: Canvas生成のノイズパターンを全パネルに適用
- **スクロールバー・選択**: カスタムスタイリング（`::selection` に ember + gold）
- **コンポーネント**: Button / OptionButton / SceneCard / Badge / Panel をデザインシステム仕様で統一
- **角丸**: 2px（コントロール）/ 4px（パネル）— 4px上限厳守
- **アニメーション**: fade only、0.25s ease（色・背景・ボーダーのトランジション）

### New Features

- **構図プレビュー**: 三分割ガイド線付きの16:9フレームに被写体シルエットを配置。3軸の選択に連動してリアルタイム描画
- **シーンスキップ**: シーン単位でスキップ/復帰が可能
- **ブロック進捗バー**: 10シーン単位のブロック表示。各セルがクリックでシーンジャンプ対応
- **Badge メタデータ**: シーン番号・場所・人物をモノラベルのバッジで表示
- **Obsidian Markdown出力**: ライブ生成のMarkdownプレビュー（コピー機能付き）

### Layout

- 2カラムグリッド（`auto-fit, minmax(280px, 1fr)`）で640px以下は自動で1カラムに
- 左カラム: ソース管理 → シーンナビ → 状況メモ → 3軸選択 → ADD/UPDATE
- 右カラム: シーンカード（Badge付き）→ 構図プレビュー
- 全幅: OUTPUT — Obsidian Markdown

### Retained

- 原稿ファイル読み込み（.md / .txt、--- 区切り & テーブル形式）
- OpenAI API（gpt-4o-mini）によるシーン自動解析（場所・人物抽出）
- APIキーのlocalStorage管理
- 先読みによる自動解析・一括解析

---

## v0.3 — Switch to OpenAI API (2026-06-27)

- シーン解析APIを Anthropic Claude → OpenAI に切り替え
- モデル: `claude-haiku-4-5-20251001` → `gpt-4o-mini`
- CORS制限の注意書きを削除（OpenAI APIはブラウザ直接アクセス対応）

## v0.2 — API Scene Analysis (2026-06-27)

- Claude APIによるシーン自動解析を追加（場所・人物抽出）
- 生原稿（--- 区切り）のパース対応
- 全シーン一括解析 / 個別再解析
- 先読みリクエストによる自動解析

## v0.1 — Initial Release

- 構図ビルダー初版
- 原稿ファイル読み込み（MDテーブル形式）
- 3軸選択（アングル・サイズ・方向）
- Obsidian用Markdown出力
- PWA対応（manifest.json / favicon）
