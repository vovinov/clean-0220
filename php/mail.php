<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$time = $_POST['time'];
$text = $_POST['text'];

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.timeweb.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@hardclean.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'info12345'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'tls';           // Enable TLS encryption, `ssl` also accepted
$mail->SMTPAutoTLS = false;
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true )
    );

$mail->setFrom('info@hardclean.ru'); // от кого будет уходить письмо?
$mail->addAddress('info@hardclean.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Комментарий с сайта HARD CLEAN';
$mail->Body    = '' . $name . ' оставил комментарий, его телефон ' . $phone . '<br>Почта этого пользователя: ' . $email . '<br>' .
'Время звонка ' . $time . '<br>' .
'Текст: ' . $text;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: /');
}
?>