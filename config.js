<!DOCTYPE html>
<html>
<head>
    <title>Basic JavaScript Example</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p id="message">Click the button to see a message!</p>
    <button onclick="showMessage()">Click Me</button>

    <script>
        function showMessage() {
            document.getElementById("message").innerText = "Hello, JavaScript is working!";
        }
    </script>
</body>
</html>
