import Amplify, { Storage, I18n } from 'aws-amplify'
import { Translations } from '@aws-amplify/ui-components'
import awsExports from '@/assets/aws-exports'

Amplify.configure(awsExports)

Storage.configure({ level: 'protected' })

I18n.putVocabularies({
  ja: {
    // エラーメッセージ
    'Username/client id combination not found.':
      '登録されていないユーザーIDです',
    'An account with the given email already exists.':
      'このメールアドレスはすでに使用されています',
    'Incorrect username or password.':
      'ユーザーIDまたはパスワードが正しくありません',
    'Username cannot be empty': 'ユーザーIDを入力してください',
    'Password cannot be empty': 'パスワードを入力してください',
    'Confirmation code cannot be empty': '確認コードを入力してください',
    'Invalid email address format.': 'メールアドレスを正しく入力してください',
    'User already exists': 'このユーザーIDはすでに登録されています',
    'null failed with error Generate callenges lambda cannot be called..':
      'パスワードを入力してください',
    'The following fields must be completed: Email, Password':
      'メールアドレスとパスワードを入力してください',
    'The following fields must be completed: Email':
      'メールアドレスを入力してください',
    'The following fields must be completed: Password':
      'パスワードを入力してください',
    'User does not exist.': '存在しないユーザーIDです',
    'Password reset required for the user':
      'パスワードのリセットが要求されています',
    'User cannot be confirmed. Current status is CONFIRMED':
      '認証が完了しましたのでもう一度ログインを試みてください',
    'Custom auth lambda trigger is not configured for the user pool.':
      'パスワードを入力してください',
    'Password does not conform to policy: Password not long enough':
      'パスワードが短すぎます',

    // Amplifyのデフォルト値変更
    // InteractionsStrings
    [Translations.CHATBOT_TITLE]: 'チャットボットレックス',
    [Translations.TEXT_INPUT_PLACEHOLDER]: 'メッセージを書く',
    [Translations.VOICE_INPUT_PLACEHOLDER]: 'マイクをクリックして話します',
    [Translations.CHAT_DISABLED_ERROR]:
      'チャットボットで音声またはテキストのいずれかを有効にする必要があります',
    [Translations.NO_BOT_NAME_ERROR]:
      'ボット名をチャットボットに提供する必要があります',
    // AuthErrorStrings
    [Translations.DEFAULT_MSG]: '認証エラー',
    [Translations.EMPTY_USERNAME]: 'ユーザー名を空にすることはできません',
    [Translations.INVALID_USERNAME]:
      'ユーザー名は、文字列またはサインインタイプのいずれかである必要があります',
    [Translations.EMPTY_PASSWORD]: 'パスワードを空にすることはできません',
    [Translations.EMPTY_CODE]: '確認コードを空にすることはできません',
    [Translations.SIGN_UP_ERROR]: 'アカウントの作成中にエラーが発生しました',
    [Translations.NO_MFA]: '有効なMFAメソッドが提供されていません',
    [Translations.INVALID_MFA]: '無効なMFAタイプ',
    [Translations.EMPTY_CHALLENGE]:
      'チャレンジレスポンスを空にすることはできません',
    [Translations.NO_USER_SESSION]:
      'ユーザーが空であるため、セッションを取得できませんでした',
    // AuthStrings
    [Translations.BACK_TO_SIGN_IN]: 'サインインに戻る',
    [Translations.CHANGE_PASSWORD_ACTION]: '変更する',
    [Translations.CHANGE_PASSWORD]: 'パスワードを変更する',
    [Translations.CODE_LABEL]: '検証コード',
    [Translations.CODE_PLACEHOLDER]: 'コードを入力する',
    [Translations.CONFIRM_SIGN_UP_CODE_LABEL]: '確認コード',
    [Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER]: 'コードを入力してください',
    [Translations.CONFIRM_SIGN_UP_HEADER_TEXT]: 'サインアップの確認',
    [Translations.CONFIRM_SIGN_UP_LOST_CODE]: 'コードを紛失しましたか？',
    [Translations.CONFIRM_SIGN_UP_RESEND_CODE]: 'コードを再送する',
    [Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT]: '確認',
    [Translations.CONFIRM_SMS_CODE]: 'SMSコードを確認する',
    [Translations.CONFIRM_TOTP_CODE]: 'TOTPコードを確認する',
    [Translations.CONFIRM]: '確認',
    [Translations.CREATE_ACCOUNT_TEXT]: 'アカウントを作成する',
    [Translations.EMAIL_LABEL]: 'メールアドレス *',
    [Translations.EMAIL_PLACEHOLDER]: 'メールアドレスを入力してください',
    [Translations.FORGOT_PASSWORD_TEXT]: 'パスワードをお忘れですか？',
    [Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE]:
      '利用可能な2つ未満のmfaタイプ',
    [Translations.NEW_PASSWORD_LABEL]: '新しいパスワード',
    [Translations.NEW_PASSWORD_PLACEHOLDER]:
      '新しいパスワードを入力してください',
    [Translations.NO_ACCOUNT_TEXT]: 'アカウントがありませんか？',
    [Translations.PASSWORD_LABEL]: 'パスワード*',
    [Translations.PASSWORD_PLACEHOLDER]: 'パスワードを入力してください',
    [Translations.PHONE_LABEL]: '電話番号 *',
    [Translations.PHONE_PLACEHOLDER]: '(555) 555-1212',
    [Translations.QR_CODE_ALT]: 'QRコード',
    [Translations.RESET_PASSWORD_TEXT]: 'パスワードを再設定する',
    [Translations.RESET_YOUR_PASSWORD]: 'あなたのパスワードをリセット',
    [Translations.SELECT_MFA_TYPE_HEADER_TEXT]: 'MFAタイプを選択',
    [Translations.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT]: '確認',
    [Translations.SEND_CODE]: 'コードを送信',
    [Translations.SUBMIT]: '参加する',
    [Translations.SETUP_TOTP_REQUIRED]: 'TOTPを構成する必要があります',
    [Translations.SIGN_IN_ACTION]: 'サインイン',
    [Translations.SIGN_IN_HEADER_TEXT]: 'アカウントにサインインします',
    [Translations.SIGN_IN_TEXT]: 'サインイン',
    [Translations.SIGN_IN_WITH_AMAZON]: 'Amazonでサインイン',
    [Translations.SIGN_IN_WITH_AUTH0]: 'Auth0でサインイン',
    [Translations.SIGN_IN_WITH_AWS]: 'AWSでサインイン',
    [Translations.SIGN_IN_WITH_FACEBOOK]: 'Facebookでサインイン',
    [Translations.SIGN_IN_WITH_GOOGLE]: 'Googleでサインイン',
    [Translations.SIGN_OUT]: 'サインアウト',
    [Translations.SIGN_UP_EMAIL_PLACEHOLDER]: 'Eメール',
    [Translations.SIGN_UP_HAVE_ACCOUNT_TEXT]: 'アカウントを持っています？',
    [Translations.SIGN_UP_HEADER_TEXT]: '新しいアカウントを作成する',
    [Translations.SIGN_UP_PASSWORD_PLACEHOLDER]: 'パスワード',
    [Translations.SIGN_UP_SUBMIT_BUTTON_TEXT]: 'アカウントを作成する',
    [Translations.SIGN_UP_USERNAME_PLACEHOLDER]: 'ユーザー名',
    [Translations.SUCCESS_MFA_TYPE]: '成功！ MFAタイプは次のようになります。',
    [Translations.TOTP_HEADER_TEXT]: 'スキャンして確認コードを入力します',
    [Translations.TOTP_LABEL]: 'セキュリティコードを入力してください：',
    [Translations.TOTP_ISSUER]: 'AWSCognito',
    [Translations.TOTP_SETUP_FAILURE]: 'TOTPセットアップが失敗しました',
    [Translations.TOTP_SUBMIT_BUTTON_TEXT]: 'セキュリティトークンを確認する',
    [Translations.TOTP_SUCCESS_MESSAGE]:
      'TOTPを正常にセットアップしてください！',
    [Translations.UNABLE_TO_SETUP_MFA_AT_THIS_TIME]:
      '失敗しました！現在、MFAを構成できません',
    [Translations.USERNAME_LABEL]: 'ユーザー名*',
    [Translations.USERNAME_PLACEHOLDER]: 'ユーザー名を入力して下さい',
    [Translations.VERIFY_CONTACT_EMAIL_LABEL]: 'Eメール',
    [Translations.VERIFY_CONTACT_HEADER_TEXT]:
      'アカウントの復旧には、確認済みの連絡先情報が必要です',
    [Translations.VERIFY_CONTACT_PHONE_LABEL]: '電話番号',
    [Translations.VERIFY_CONTACT_SUBMIT_LABEL]: '参加する',
    [Translations.VERIFY_CONTACT_VERIFY_LABEL]: '確認',
    [Translations.ADDRESS_LABEL]: '住所',
    [Translations.ADDRESS_PLACEHOLDER]: '住所を入力してください',
    [Translations.NICKNAME_LABEL]: 'ニックネーム',
    [Translations.NICKNAME_PLACEHOLDER]: 'あなたのニックネームを入力します',
    [Translations.BIRTHDATE_LABEL]: 'お誕生日',
    [Translations.BIRTHDATE_PLACEHOLDER]: '誕生日を入力してください',
    [Translations.PICTURE_LABEL]: '画像のURL',
    [Translations.PICTURE_PLACEHOLDER]: '写真のURLを入力してください',
    [Translations.FAMILY_NAME_LABEL]: '苗字',
    [Translations.FAMILY_NAME_PLACEHOLDER]: '姓を入力してください',
    [Translations.PREFERRED_USERNAME_LABEL]: '優先ユーザー名',
    [Translations.PREFERRED_USERNAME_PLACEHOLDER]:
      'ご希望のユーザー名を入力してください',
    [Translations.GENDER_LABEL]: '性別',
    [Translations.GENDER_PLACEHOLDER]: '性別を入力してください',
    [Translations.PROFILE_LABEL]: 'プロフィールURL',
    [Translations.PROFILE_PLACEHOLDER]: 'プロファイルのURLを入力してください',
    [Translations.GIVEN_NAME_LABEL]: 'ファーストネーム',
    [Translations.GIVEN_NAME_PLACEHOLDER]: '名を入力してください',
    [Translations.ZONEINFO_LABEL]: 'タイムゾーン',
    [Translations.ZONEINFO_PLACEHOLDER]: 'タイムゾーンを入力してください',
    [Translations.LOCALE_LABEL]: 'ロケール',
    [Translations.LOCALE_PLACEHOLDER]: 'ロケールを入力してください',
    [Translations.UPDATED_AT_LABEL]: 'で更新',
    [Translations.UPDATED_AT_PLACEHOLDER]:
      '情報が最後に更新された時刻を入力します',
    [Translations.MIDDLE_NAME_LABEL]: 'ミドルネーム',
    [Translations.MIDDLE_NAME_PLACEHOLDER]: 'ミドルネームを入力してください',
    [Translations.WEBSITE_LABEL]: 'ウェブサイト',
    [Translations.WEBSITE_PLACEHOLDER]:
      'あなたのウェブサイトを入力してください',
    [Translations.NAME_LABEL]: 'フルネーム',
    [Translations.NAME_PLACEHOLDER]: 'フルネームを入れて下さい',
    [Translations.PHOTO_PICKER_TITLE]: 'ピッカータイトル',
    [Translations.PHOTO_PICKER_HINT]:
      '補助的なテキストまたはコンテンツがここのこのスペースを占める場合があります',
    [Translations.PHOTO_PICKER_PLACEHOLDER_HINT]: 'プレースホルダーのヒント',
    [Translations.PHOTO_PICKER_BUTTON_TEXT]: 'ボタン',
    [Translations.IMAGE_PICKER_TITLE]: 'プロフィール写真を追加',
    [Translations.IMAGE_PICKER_HINT]:
      'アップロードする前に画像をプレビューする',
    [Translations.IMAGE_PICKER_PLACEHOLDER_HINT]: 'タップして画像を選択',
    [Translations.IMAGE_PICKER_BUTTON_TEXT]: 'アップロード',
    [Translations.PICKER_TEXT]: 'ファイルを選択',
    [Translations.TEXT_FALLBACK_CONTENT]: 'フォールバックコンテンツ',
    [Translations.CONFIRM_SIGN_UP_FAILED]:
      'サインアップに失敗したことを確認する',
    [Translations.SIGN_UP_FAILED]: 'サインアップに失敗しました',
  },
})
