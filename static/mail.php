<?php

$mailarea = htmlspecialchars($_POST['mailarea'], ENT_QUOTES);
$namearea = htmlspecialchars($_POST['namearea'], ENT_QUOTES);
// $telarea = htmlspecialchars($_POST['telarea'], ENT_QUOTES);
$textboxarea = htmlspecialchars($_POST['textboxarea'], ENT_QUOTES);

header("Content-Type:text/html; charset=UTF-8");
mb_language("japanese");
mb_internal_encoding("utf-8");

$mail = "contact@value.chord4me.info";
$sub1 = "価値観マップ-ValuesChart-へのお問合せが完了しました";
$mail_to = $mailarea;
$messegeall .= "価値観マップ-ValuesChart-へのお問合せありがとうございます。\n";
$messegeall .= "\n";
$messegeall .= "─ご送信内容の確認─────────────────\n";
$messegeall .= "\n";
$messegeall .= "お名前：" . $namearea . "\n";
$messegeall .= "メールアドレス：" . $mailarea . "\n";
// $messegeall .= "お電話番号：" . $telarea . "\n";
$messegeall .= "お問合せ内容：\n";
$messegeall .= $textboxarea . "\n";
$messegeall .= "\n";
$messegeall .= "─────────────────────────\n";
$messegeall .= "\n";
$messegeall .= "============================================\n";
$messegeall .= "このメールは自動送信です。\n";
$messegeall .= "お心当たりのない方は、お手数をおかけいたしますが、\n";
$messegeall .= "下記メールアドレスまでご連絡ください。\n";
$messegeall .= "============================================\n";
$messegeall .= "　価値観マップ-ValuesChart-\n";
$messegeall .= "　E-mail：contact@value.chord4me.info\n";


$success1 = mb_send_mail($mail_to, $sub1, $messegeall, "From:" . $mail);
$success2 = mb_send_mail($mail, $sub1, $messegeall, "From:" . $mail_to);
// header('Content-type: application/json');
header("Content-type: text/plain; charset=UTF-8");
echo "送信が完了しました！";
