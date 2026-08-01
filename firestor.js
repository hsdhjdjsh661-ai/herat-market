<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>مارکت هرات</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<div class="app">

<h1>🛒 مارکت هرات</h1>

<!-- ورود و ثبت نام -->

<div id="login">

<h2>ورود / ثبت نام</h2>

<input
id="name"
type="text"
placeholder="نام شما">

<input
id="email"
type="email"
placeholder="ایمیل">

<input
id="password"
type="password"
placeholder="رمز عبور">

<button id="registerBtn">
ثبت نام
</button>

<button id="loginBtn">
ورود
</button>

</div>





<!-- صفحه اصلی -->

<div id="home" style="display:none;">

<h2 id="welcome"></h2>

<hr>

<h2>انتخاب شهر</h2>

<button id="heratBtn">
هرات
</button>

<button disabled>
کابل (به زودی)
</button>

<button disabled>
قندهار (به زودی)
</button>

<button disabled>
مزار (به زودی)
</button>

<hr>

<h2>ثبت آگهی</h2>

<input
id="productName"
type="text"
placeholder="نام کالا">

<input
id="productPrice"
type="number"
placeholder="قیمت">

<button id="addProductBtn">
ثبت آگهی
</button>

<hr>

<div id="content">

</div>

</div>

</div>

<script type="module" src="./app.js"></script>

</body>

</html>
