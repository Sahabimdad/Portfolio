<?php
// Sirf POST request ke liye code run karen
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Input fields ko clean aur sanitize karen
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Agar koi field khali ho to error show karen
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400); // Bad Request status code
        echo "<h2 style='color:red;'>❌ Please fill out all fields.</h2>";
        exit;
    }

    // Email address validate karen
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "<h2 style='color:red;'>❌ Invalid email format.</h2>";
        exit;
    }

    // Email details set karen
    $to = "muh2007abdullah@gmail.com";  // Apna email yahan likhen
    $subject = "Naya Contact Form Submission: " . $name;
    
    // Email headers
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Mail function se email bhej den
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200); // OK status code
        echo "<h2 style='color:green;'>✅ Thank you! Your message has been sent successfully.</h2>";
    } else {
        http_response_code(500); // Internal Server Error status code
        echo "<h2 style='color:red;'>❌ Sorry, something went wrong. Please try again later.</h2>";
    }

} else {
    // Agar direct access ho to 403 Forbidden error show karen
    http_response_code(403);
    echo "<h2 style='color:red;'>❌ Error: Forbidden. Direct access is not allowed.</h2>";
}
?>