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

// مصفوفة تحتوي على 30 رابط لصور عالية الدقة (مناظر طبيعية، فضاء، وأجواء هادئة)
const backgrounds = [
    // --- المجموعة الأولى (الخلفيات السابقة) ---
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format&fit=crop", // ضباب وجبال
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920&auto=format&fit=crop", // غابة
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop", // جبال الألب
    "https://images.unsplash.com/photo-1506744626753-1fa44df31c78?q=80&w=1920&auto=format&fit=crop", // بحيرة هادئة
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1920&auto=format&fit=crop", // شلال
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1920&auto=format&fit=crop", // وادي أخضر
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&auto=format&fit=crop", // طبيعة خضراء
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1920&auto=format&fit=crop", // منظر طبيعي واسع

    // --- المجموعة الثانية (مناظر طبيعية جديدة وغابات) ---
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1920&auto=format&fit=crop", // شروق على الشاطئ
    "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044e?q=80&w=1920&auto=format&fit=crop", // وادي بين الجبال المكسوة بالغيوم
    "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1920&auto=format&fit=crop", // غابة مظلمة وغامضة
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1920&auto=format&fit=crop", // أشجار الصنوبر مع ضوء الشمس
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop", // جبال خضراء شاهقة
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1920&auto=format&fit=crop", // طريق وسط غابة خريفية
    "https://images.unsplash.com/photo-1508739773402-3692f80e0c98?q=80&w=1920&auto=format&fit=crop", // طريق متعرج بين الأشجار
    "https://images.unsplash.com/photo-1518182170546-076616fd4cb8?q=80&w=1920&auto=format&fit=crop", // أوراق شجر قريبة ومريحة للعين

    // --- المجموعة الثالثة (الفضاء وسماء الليل) ---
    "https://images.unsplash.com/photo-1434725039720-aaad6dd32faa?q=80&w=1920&auto=format&fit=crop", // سماء ليلية مرصعة بالنجوم
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1920&auto=format&fit=crop", // مجرة درب التبانة
    "https://images.unsplash.com/photo-1462400362591-9cb55eb33149?q=80&w=1920&auto=format&fit=crop", // أضواء الشفق القطبي (Aurora)
    
    // --- المجموعة الرابعة (أجواء شتوية وثلوج) ---
    "https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=1920&auto=format&fit=crop", // مشهد ثلجي هادئ
    "https://images.unsplash.com/photo-1483728642387-6c3ba6c6b871?q=80&w=1920&auto=format&fit=crop", // جبال ضخمة مغطاة بالثلوج

    // --- المجموعة الخامسة (محيطات وبحيرات وغروب) ---
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop", // شاطئ استوائي عند الغروب
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1920&auto=format&fit=crop", // طبيعة صامتة (بحيرة وجبال عاكسة)
    "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1920&auto=format&fit=crop", // جزر خضراء وغيوم من الأعلى
    "https://images.unsplash.com/photo-1504567961542-e24d9439a724?q=80&w=1920&auto=format&fit=crop", // سماء ملونة بتدرجات الغروب
    "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1920&auto=format&fit=crop", // منطاد هواء ساخن في السماء
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop", // جبال مذهلة وقت الغروب

    // --- المجموعة السادسة (مدن وتجريد) ---
    "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1920&auto=format&fit=crop", // مدينة بانورامية في الليل (أضواء هادئة)
    "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1920&auto=format&fit=crop", // غابة بألوان الخريف
    "https://images.unsplash.com/photo-1536147116438-ce2654222af2?q=80&w=1920&auto=format&fit=crop"  // سماء زرقاء صافية مع غيوم متفرقة
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
