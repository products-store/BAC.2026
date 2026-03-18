// تحديد تاريخ الهدف: 6 جوان 2026، الساعة 00:00:00
const targetDate = new Date("June 6, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // عناصر HTML الخاصة بالأرقام
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // التحقق مما إذا كان الوقت قد انتهى
    if (distance <= 0) {
        document.getElementById("countdown").classList.add("hidden");
        document.getElementById("expired-message").classList.remove("hidden");
        return; // إيقاف التحديث
    }

    // حساب الوقت المتبقي
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // إضافة صفر على اليسار إذا كان الرقم أقل من 10 (مثال: 09 بدلاً من 9)
    daysElement.textContent = days < 10 ? "0" + days : days;
    hoursElement.textContent = hours < 10 ? "0" + hours : hours;
    minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
}

// تحديث العداد فوراً عند تحميل الصفحة لمنع ظهور الأصفار المبدئية
updateCountdown();

// تعيين التحديث ليحدث كل 1 ثانية (1000 مللي ثانية)
setInterval(updateCountdown, 1000);