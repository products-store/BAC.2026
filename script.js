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

// مصفوفة تحتوي على 30 رابطًا لصور مناظر طبيعية عالية الدقة
const backgrounds = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format&fit=crop", // ضباب وجبال
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920&auto=format&fit=crop", // غابة
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop", // جبال الألب
    "https://images.unsplash.com/photo-1506744626753-1fa44df31c78?q=80&w=1920&auto=format&fit=crop", // بحيرة هادئة
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1920&auto=format&fit=crop", // شلال
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1920&auto=format&fit=crop", // وادي أخضر
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&auto=format&fit=crop", // طبيعة خضراء
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1920&auto=format&fit=crop", // منظر طبيعي واسع
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1920&auto=format&fit=crop", // شروق الشمس على الشاطئ
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=1920&auto=format&fit=crop", // جبال وسماء مرصعة بالنجوم
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1920&auto=format&fit=crop", // غابة مظلمة
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1920&auto=format&fit=crop", // محيط وقت الغروب
    "https://images.unsplash.com/photo-1434725039720-aaad6dd32faa?q=80&w=1920&auto=format&fit=crop", // مساحة خضراء شاسعة
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop", // طريق بين الأشجار
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1920&auto=format&fit=crop", // جسر في الطبيعة
    "https://images.unsplash.com/photo-1455218873509-8097305ee378?q=80&w=1920&auto=format&fit=crop", // بحيرة عاكسة للجبال
    "https://images.unsplash.com/photo-1414490929659-9a12b7e31907?q=80&w=1920&auto=format&fit=crop", // جبال ثلجية
    "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1920&auto=format&fit=crop", // غابة سرخس
    "https://images.unsplash.com/photo-1470770841072-f978d0d8be89?q=80&w=1920&auto=format&fit=crop", // حقل قمح
    "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=1920&auto=format&fit=crop", // طبيعة خريفية
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1920&auto=format&fit=crop", // منظر بانورامي للجبال
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop", // حقول خضراء متدرجة
    "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?q=80&w=1920&auto=format&fit=crop", // غيوم وردية وقت الغروب
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop", // جبال روكي
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1920&auto=format&fit=crop", // غابة ضبابية
    "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1920&auto=format&fit=crop", // مسار جبلي
    "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1920&auto=format&fit=crop", // أزهار برية
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop", // منظر كندي
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1920&auto=format&fit=crop", // شجر الصنوبر
    "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1920&auto=format&fit=crop"  // سماء ليلية
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
