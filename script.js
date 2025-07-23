
let screen = 1;
const app = document.getElementById('app');
function nextScreen() {
  if(screen === 1) showCities();
  else if(screen === 2) showProjectForm();
  else if(screen === 3) showMap();
  else if(screen === 4) showAssistant();
  else if(screen === 5) showTeam();
}
function showCities() {
  screen = 2;
  app.innerHTML = `
    <h2 style="text-align:center; margin-bottom: 20px;">نسبة المشاريع في مدن عسير</h2>
    <div class="city-container card">
      
      <div class="city-block">
        <h3 class="city-name">أبها</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 90%;"></div>
        </div>
        <p class="city-details">%70مطاعم 90٪، مقاهي 55٪، تعليم 80٪، مرافق </p>
      </div>
      
      <div class="city-block">
        <h3 class="city-name">خميس مشيط</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 85%;"></div>
        </div>
        <p class="city-details">%66مطاعم 85٪، مقاهي 60٪، تعليم 75٪، مرافق</p>
      </div>
      
      <div class="city-block">
        <h3 class="city-name">النماص</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 70%;"></div>
        </div>
        <p class="city-details">%مطاعم 70٪، مقاهي 40٪، تعليم 60٪، مرافق 55</p>
      </div>
      
      <div class="city-block">
        <h3 class="city-name">محايل عسير</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 60%;"></div>
        </div>
        <p class="city-details">%مطاعم 60٪، مقاهي 35٪، تعليم55٪، مرافق 50</p>
      </div>
      
      <div style="text-align:center; margin-top: 25px;">
        <button onclick="nextScreen()">التالي</button>
      </div>
    </div>
  `;
}




function showProjectForm() {
  screen = 3;
  app.innerHTML = '<h2>استكشف عسير واختر مشروعك</h2>' +
    '<select id="projectType">' +
    '<option>نوع المشروع</option>' +
    '<option>مطعم</option>' +
    '<option>مقهى</option>' +
    '<option>مستشفى</option>' +
    '<option>مدرسة</option>' +

    '</select>' +
    '<select id="city">' +
    '<option>اختر المدينة</option>' +
    '<option>أبها</option>' +
    '<option>خميس مشيط</option>' +
    '<option>النماص</option>' +
    '<option>محايل عسير</option>' +
    '</select>' +
    '<input type="number" placeholder="حدد ميزانيتك " id="budget" />' +
    '<button onclick="nextScreen()">عرض الخريطة</button>';
}
function showMap() {
  screen = 4;
  const type = document.getElementById('projectType').value;
  const city = document.getElementById('city').value;
  const budget = document.getElementById('budget').value;
  app.innerHTML = '<h2>📍 الخريطة التفاعلية</h2>' +
    `<p>أفضل موقع لمشروع ${type} في ${city} بميزانية ${budget} ريال</p>` +
    '<div id="map"></div>' +
    '<button onclick="nextScreen()">التالي</button>';
  setTimeout(initMap, 200);
}
function initMap() {
  const map = L.map('map').setView([18.2164, 42.5053], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker([18.2164, 42.5053]).addTo(map).bindPopup('موقع مقترح للاستثمار في عسير').openPopup();
}
function showAssistant() {
  screen = 5;
  app.innerHTML = '<h2>🤖 المساعد الذكي للاستثمار</h2>' +
   '<h4> احصل على توصيات مخصصة بناء على مجال اسثمارك وميزانتيك</h4>' +
    '<input type="text" placeholder="اكتب سؤالك هنا..." id="question" />' +
    '<button onclick="replyBot()">إرسال</button>' +
    '<div id="botReply" style="margin-top:10px;"></div>' +
    '<button onclick="nextScreen()">التالي</button>';
}
function replyBot() {
  const question = document.getElementById('question').value;
  let reply = "شكرًا لسؤالك! لمزيد من التفاصيل، سيتم التواصل معك قريبًا.";
  if(question.includes("أفضل")) reply = "أفضل موقع حسب نوع مشروعك سيكون في أبها أو خميس مشيط حسب دراسة السوق.";
  document.getElementById('botReply').innerText = reply;
}
function showTeam() {
  screen = 6;
  app.innerHTML = 
    '<p>شموخ الثبيتي - علوم حاسبات </p>' +


    '<button onclick="location.reload()">العودة للرئيسية</button>';
}
