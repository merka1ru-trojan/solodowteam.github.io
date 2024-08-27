<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solodow Team</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script>
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('.loading').classList.add('hidden');
            }, 3000); // 3000 миллисекунд = 3 секунды
        });
    </script>
</head>
<body>
    <div class="loading"></div>
    <header>
        <h1>Solodow Team</h1>
        <nav>
            <ul>
                <li><a href="programs.html" class="programs-button">Программы</a></li>
                <li><a href="#virtual-machine">Виртуалка</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="welcome">
            <h2>Приветствие</h2>
            <p>Привет! Не знаю ты простак или обычный юзер... Ладно не важно! Тут можно посмотреть наши проги и скачать их!</p>
            <p>Мы не пропагандируем читы, терроризм и т.п! Наши программы могут навредить вашему ПК! Наша команда делает их для специального канала Nedohackers Lite! Мы никак не несем ответственность за ваш компьютер!</p>
        </section>
        <section id="virtual-machine">
            <h2>Виртуалка</h2>
            <p>Информация о виртуальной машине: <a href="https://www.virtualbox.org/">VirtualBox</a></p>
        </section>
        <section id="contacts">
            <h2>Контакты</h2>
            <p>Свяжитесь с нами через наш Discord сервер!</p>
            <div class="social-icons">
                <a href="https://www.youtube.com/@solodowteam" class="youtube"><i class="fab fa-youtube"></i></a>
                <a href="https://discord.gg/2jw3qjbBwS" class="discord"><i class="fab fa-discord"></i></a>
            </div>
        </section>
    </main>
    <footer>
        <p>Социальные сети: <a href="https://www.youtube.com/@solodowteam">YouTube</a></p>
    </footer>
</body>
</html>