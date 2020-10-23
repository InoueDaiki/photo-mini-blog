# photo-mini-blog

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# 構築した手順

## Nuxt.js の初期化

```
$ npx create-nuxt-app photo-mini-blog

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in photo-mini-blog
? Project name: photo-mini-blog
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Bootstrap Vue
? Nuxt.js modules:
? Linting tools: ESLint, Prettier, Lint staged files, StyleLint, Commitlint
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Static (Static/JAMStack hosting)
? Development tools: jsconfig.json, Semantic Pull Requests, Dependabot
? Continuous integration: None
? What is your GitHub username? inouedaiki
? Version control system: Git
```

## Amplify のセットアップ

### 初期化

```
$ amplify init
Scanning for plugins...
Plugin scan successful
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project PhotoMiniBlog
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using none
? Source Directory Path:  assets
? Distribution Directory Path: dist
? Build Command:  npm.cmd run-script generate
? Start Command: npm.cmd run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
```

### 認証基盤の追加

```
$ amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.     
 How do you want users to be able to sign in? Username       
 Do you want to configure advanced settings? No, I am done.
```

### ファイルストレージの追加

```
$ amplify add storage
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Please provide a friendly name for your resource that will be used to label this category in the project: fileStorage
? Please provide bucket name: photominiblog0d65ef8274e84298a426b0b6955afc3e
? Who should have access: Auth users only
? What kind of access do you want for Authenticated users? create/update, read, delete
? Do you want to add a Lambda Trigger for your S3 Bucket? No
```

### GraphQL API の追加

```
$ amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: photominiblog
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: One-to-many relationship (e.g., “Blogs” with “Posts” and “Comments”)
? Do you want to edit the schema now? No
```

### モデル定義の更新

[schema.graphql](amplify/backend/api/photominiblog/schema.graphql)

記法は[API (GraphQL) - Directives - Amplify Docs](https://docs.amplify.aws/cli/graphql-transformer/directives)を参照

### GraphQL クエリ定義ファイルの自動生成設定追加

```
$ amplify add codegen
? Choose the code generation language target javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions assets/graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
√ Generated GraphQL operations successfully and saved at src\graphql
```

### 設定ファイル修正

[.graphqlconfig.yml](.graphqlconfig.yml)

### 再生成

```
$ amplify codegen
√ Generated GraphQL operations successfully and saved at assets\graphql
```

### バックエンド環境の更新

```
$ amplify push
√ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name | Operation | Provider plugin   |
| -------- | ------------- | --------- | ----------------- |
| Auth     | auth          | Create    | awscloudformation |
| Storage  | fileStorage   | Create    | awscloudformation |
| Api      | photominiblog | Create    | awscloudformation |
? Are you sure you want to continue? Yes

GraphQL schema compiled successfully.

Edit your schema at D:\daiki\Projects\photo-mini-blog\amplify\backend\api\photominiblog\schema.graphql or place .graphql files in a directory at D:\daiki\Projects\photo-mini-blog\amplify\backend\api\photominiblog\schema
? Do you want to update code for your updated GraphQL API Yes
? Do you want to generate GraphQL statements (queries, mutations and subscription) based on your schema types?
This will overwrite your current graphql queries, mutations and subscriptions Yes
```

### ビルド設定ファイルの追加

[amplify.yml](amplify.yml)

### Amplify Libraries を利用するための設定

```
npm i aws-amplify @aws-amplify/ui-vue
```

[amplify.js](/plugins/amplify.js)

[nuxt.config.js](/nuxt.config.js#L23)
