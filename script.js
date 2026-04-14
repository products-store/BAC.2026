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

/* --- أكواد تغيير الخلفية --- */

// مصفوفة تحتوي على روابط لصور مناظر طبيعية عالية الدقة
const backgrounds = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format&fit=crop", // ضباب وجبال
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920&auto=format&fit=crop", // غابة
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop", // جبال الألب
    "https://images.unsplash.com/photo-1506744626753-1fa44df31c78?q=80&w=1920&auto=format&fit=crop", // بحيرة هادئة
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1920&auto=format&fit=crop", // شلال
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1920&auto=format&fit=crop", // وادي أخضر
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&auto=format&fit=crop", // طبيعة خضراء
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1920&auto=format&fit=crop"  // منظر طبيعي واسع
];

let currentBgIndex = -1;

function changeBackground() {
    let newIndex;
    // التأكد من عدم تكرار نفس الصورة مرتين متتاليتين
    do {
        newIndex = Math.floor(Math.random() * backgrounds.length);
    } while (newIndex === currentBgIndex);
    
    currentBgIndex = newIndex;
    
    // تطبيق الصورة كخلفية
    document.body.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
}

// تشغيل الوظيفة لجلب أول خلفية عند فتح الصفحة
changeBackground();

// تغيير الخلفية تلقائياً كل 5 دقائق (5 * 60 * 1000 مللي ثانية)
setInterval(changeBackground, 300000);

// ربط زر تغيير الخلفية بالوظيفة
document.getElementById('change-bg-btn').addEventListener('click', changeBackground);
