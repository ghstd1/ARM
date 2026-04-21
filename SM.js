let clients = {};

async function loadClientsData() {
    try {
        const response = await fetch('data.json');
        const jsonText = await response.text();
        clients = JSON.parse(jsonText);
        console.log("Данные загружены и распаршены:", clients);
    } catch (error) {
        console.error("Ошибка при загрузке JSON:", error);
    }
}

// Запускаем загрузку сразу при открытии страницы
loadClientsData();

// Твоя функция поиска (нужно поправить одну деталь)
function searchClient() {
    drowinfo(); // Вызываем отрисовку
}

function drowinfo() {
    const input = document.querySelector('.main-inputt');
    const phone = input.value.trim();
    
    // Теперь clients берется из распаршенного JSON
    const client = clients[phone]; 

    if (client) {
        // Твой существующий код отрисовки данных...
        document.getElementById('client-name').innerText = client.name;
        // ... (остальной код из SM.js без изменений)
    } else {
        alert("Абонент не найден");
    }
}

function drowinfo() {
    const input = document.querySelector('.main-inputt');
    const phone = input.value.trim();
    const client = clients[phone]; 

    if (client) {
        // 1. Заполнение данных
        document.getElementById('client-name').innerText = client.name;
        document.getElementById('client-birth').innerText = client.birth;
        document.getElementById('client-contract').innerText = client.contract;
        document.getElementById('client-balance').innerText = client.balance;
        document.getElementById('client-region').innerText = client.region;
        document.getElementById('client-location').innerText = client.location;
        document.getElementById('client-ctn').innerText = phone;
        document.getElementById('client-LK').innerText = client.lk;
        document.getElementById('client-agreement').innerText = client.agreement;
        document.getElementById('client-form_payment').innerText = client.form_payment;
        document.getElementById('client-AT').innerText = client.AT;

        document.querySelectorAll('.js-balance-value').forEach(el => el.innerText = client.balance);
        document.querySelector('.js-tariff-name').innerText = client.tariff;

            // 2. Логика цвета CONDITION
        const conditionEl = document.getElementById('client-condition');
        conditionEl.innerText = client.condition;
        conditionEl.style.borderColor = (client.condition.toLowerCase() === 'блокирован') ? '#cf3838' : '#009e1a';
        conditionEl.style.color = conditionEl.style.borderColor;

        // 3. Логика цвета LK
        const clientLK = document.getElementById('client-LK');
        clientLK.innerText = client.lk;
        clientLK.style.borderColor = (client.lk.toLowerCase() === 'неактивен') ? '#cf3838' : '#009e1a';
        clientLK.style.color = clientLK.style.borderColor;

        // 4. Логика прогресс-баров (GB и Минуты)
        const gbBar = document.querySelector('.js_GB_bar');
        const gbText = document.querySelector('.js_GB_text');
        if (gbBar && gbText) {
            const gbPercent = (client.gb_remains / client.gb_total) * 100;
            gbBar.style.width = gbPercent + '%';
            gbText.innerText = `Остаток: ${client.gb_remains} из ${client.gb_total} ГБ`;
        }
        const minBar = document.querySelector('.js_Min_bar');
        const minText = document.querySelector('.js_Min_text');
        if (minBar && minText) {
        const minPercent = (client.min_remains / client.min_total) * 100;
        minBar.style.width = minPercent + '%';
        minText.innerText = `Остаток: ${client.min_remains} из ${client.min_total} мин`;
}

        // 4. Очистка поля
        input.value = '';
    } else {
        alert("Абонент не найден");
    }
}