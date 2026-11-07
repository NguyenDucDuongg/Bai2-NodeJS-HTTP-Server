
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Profile | Node.js</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #080b25, #142d59, #32145c);
            color: white;
            min-height: 100vh;
        }

        header {
            padding: 25px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .logo {
            font-size: 25px;
            font-weight: bold;
            color: #48eaff;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 25px;
            transition: 0.3s;
        }

        nav a:hover {
            color: #48eaff;
        }

        .container {
            max-width: 1000px;
            margin: 80px auto;
            padding: 20px;
        }

        .profile {
            text-align: center;
            padding: 55px 25px;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 25px;
            box-shadow: 0 15px 50px rgba(0,0,0,0.3);
            backdrop-filter: blur(12px);
        }

        .avatar {
            width: 110px;
            height: 110px;
            margin: auto auto 25px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00eaff, #8a4dff);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 48px;
            box-shadow: 0 0 30px rgba(72,234,255,0.5);
        }

        h1 {
            font-size: 38px;
            margin-bottom: 15px;
        }

        h1 span {
            color: #48eaff;
        }

        .description {
            color: #c8d5f0;
            font-size: 17px;
            line-height: 1.8;
        }

        .tag {
            display: inline-block;
            margin-top: 25px;
            padding: 12px 25px;
            border-radius: 30px;
            background: linear-gradient(90deg, #087ee1, #7b42e8);
            font-weight: bold;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 30px;
        }

        .card {
            padding: 25px 15px;
            text-align: center;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 18px;
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-8px);
            background: rgba(72,234,255,0.15);
        }

        .card h3 {
            color: #48eaff;
            margin-bottom: 12px;
        }

        .card p {
            color: #d4def5;
            font-size: 14px;
            line-height: 1.6;
        }

        footer {
            text-align: center;
            padding: 25px;
            color: #aab9d8;
            border-top: 1px solid rgba(255,255,255,0.12);
        }

        @media (max-width: 650px) {
            header {
                flex-direction: column;
                gap: 18px;
            }

            nav a {
                margin: 0 8px;
            }

            .container {
                margin: 35px auto;
            }

            h1 {
                font-size: 28px;
            }

            .cards {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>

    <main class="container" id="home">

        <section class="profile" id="about">
            <div class="avatar">👨‍💻</div>

            <h1>Xin chào, tôi là <span>Đức Dưỡng</span></h1>

            <p class="description">
                Chào mừng bạn đến với website cá nhân của tôi.<br>
                Đây là sản phẩm thực hành HTTP Server đầu tiên<br>
                được xây dựng bằng Node.js thuần.
            </p>

            <div class="tag">NODE.JS DEVELOPER</div>
        </section>

    </main>
</body>
</html>
    `);
});

server.listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000');
});
