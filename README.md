# maido / easy SSG using Next.js

```
eslint
prettier
husky&lint-staged
editorconfig
docker
nextjs
typescript
yarn, npm(どちらかに統一したい)
```

```
yarn install
yarn husky install
```

# Todo

- デザイン
  - 左/右ボタンで前/次のコンテンツへ移動(mdbook風)
  - list, tocは閉じられる(mdbook風)
- テストを足す
- リファクタリング
  - コードの重複が多い

# Spec

## Terms

```
Project > Book > Article
```

- Project: Bookがまとまった、rootに相当するもの
- Book: ひとつのTopicに相当する、markdownファイル複数で構成されるもの。ディレクトリに対応。
- Article: markdown(.md)ファイルひとつに相当する

## Directory structure

```
book-dir/
  index.md (optional)
  toc.md
  thumbnail.png
  article-1-dir/
    index.md
    image.png
  article-2-file.md
```

## book-dir/index.md

自動生成するCLIコマンドがある

```md:index.md
+++
title = "index.md"
date = "2022-01-18T05:28:15+09:00"
draft = false
+++

# index.md

Hello
```

## book-dir/toc.md

自動生成するCLIコマンドがある(ディレクトリ構造を見て作る)

```md:toc.md
+++
image_path = "./thumbnail.png"
+++

- [index.md](./index.md)
```
