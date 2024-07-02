// Colors

var color_neutral_50 = '#812B98';
var color_neutral_60 = '#FF2978';

// Remove Placeholder

document.addEventListener("DOMContentLoaded", function () {

    var input_alt = document.getElementById('input-alt');
    var input_larg = document.getElementById('input-larg');
    var placeholder_input_alt = input_alt.placeholder;
    var placeholder_input_larg = input_larg.placeholder;

    input_alt.addEventListener('focus', function () {
        input_alt.placeholder = '';
    });

    input_alt.addEventListener('blur', function () {
        input_alt.placeholder = placeholder_input_alt;
    });

    input_larg.addEventListener('focus', function () {
        input_larg.placeholder = '';
    });

    input_larg.addEventListener('blur', function () {
        input_larg.placeholder = placeholder_input_larg;
    });
});

// only number and mask

document.addEventListener('input', function(event) {
    
    var target = event.target;

    if (target.id === 'phone') {

        var value = target.value.replace(/\D/g, '');
        var formattedValue = '';

        if (value.length > 0) {
            formattedValue = '(' + value.substring(0, 2);
        }
        if (value.length > 2) {
            formattedValue += ') ' + value.substring(2, 6);
        }
        if (value.length > 6) {
            formattedValue += '-' + value.substring(6, 10);
        }

        target.value = formattedValue;
    }

    if (target.id === 'input-alt' || target.id === 'input-larg' || target.id === 'quantity' || target.id === 'year') {
        var valor = target.value;
        valor = valor.replace(/\D/g, '');
        target.value = valor;
    }
});


// Show Div

function showDivInstalation() {

    var instalation = document.getElementById('installation');
    var fieldset_content_vehicle = document.querySelector('.fieldset-content-vehicle');
    var content_vehicle_atributs_select = document.querySelector('.content-vehicle-atributs-select');
    var others = document.querySelector('.others');
    var input_installation = document.getElementById('input-installation');

    if(instalation.value === '1') {
        fieldset_content_vehicle.style.display = 'flex';
        content_vehicle_atributs_select.style.display = 'block';
        others.style.display = 'none';
    } else if(instalation.value === '2') {
        others.style.display = 'block';
        fieldset_content_vehicle.style.display = 'none';
        content_vehicle_atributs_select.style.display = 'none';
        input_installation.focus();
    }
}


// Quantity

function adjust_quantity(value) {

    var quantity = document.getElementById('quantity');
    var currentValue = parseInt(quantity.value) + value;

    if (currentValue >= 0) {
        quantity.value = currentValue;
    }
}

function handleInput(input) {

    if (input.value.trim() === '') {
        input.value = '0'; 
    }
}

// Required fields

function validarInput() {
    
    var input_alt = document.getElementById('input-alt');
    var input_larg = document.getElementById('input-larg');
    var material = document.getElementById('material');
    var finishing = document.getElementById('finishing');
    var fieldset_content_vehicle = document.querySelector('.fieldset-content-vehicle');
    var brand = document.getElementById('brand');
    var model = document.getElementById('model');
    var year = document.getElementById('year');
    var color = document.getElementById('color');
    var area = document.getElementById('area');
    var goal = document.getElementById('goal');
    var quantity = document.getElementById('quantity');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phone = document.getElementById('phone');
    var phonePattern = /^\(\d{2}\) \d{4}-\d{4}$/;
    var input_installation = document.getElementById('input-installation');

    if (input_alt && !input_alt.value.trim()) {
        alert('Informe o valor da altura.');
        input_alt.focus();
        return false;
    } else if (input_larg && !input_larg.value.trim()) {
        alert('Informe o valor da largura.');
        input_larg.focus();
        return false;
    } else if (material && material.value === '') {
        alert('Escolha o tipo de material.');
        material.focus();
        return false;
    } else if (finishing && finishing.value === '') {
        alert('Escolha o tipo de acabamento.');
        finishing.focus();
        return false;
    } else if(fieldset_content_vehicle.style.display === 'flex' || fieldset_content_vehicle.style.display === 'block') {
        if (brand && !brand.value.trim()) {
            alert('Informe a marca do veículo.');
            brand.focus();
            return false;
        } else if (model && !model.value.trim()) {
            alert('Informe o modelo do veículo.');
            model.focus();
            return false;
        } else if (year && (!year.value.trim() || year.value.trim().length < 4)) {
            alert('Informe o ano do veículo corretamente com 4 dígitos.');
            year.focus();
            return false;
        } else if (color && !color.value.trim()) {
            alert('Informe a cor do veículo.');
            color.focus();
            return false;
        } else if (area && area.value === '') {
            alert('Escolha a área do veículo a ser adesivada.');
            area.focus();
            return false;
        } else if (goal && goal.value === '') {
            alert('Selecione o objetivo da adesivação do veículo.');
            goal.focus();
            return false;
        } else if (input_installation && !input_installation.value.trim()) {
            alert('Informe o local da adesivação');
            input_installation.focus();
            return false;
        }

    } else if (quantity && (quantity.value === '0' || quantity.value === '')) {
        alert('A quantidade mínima de produto é 1.');
        quantity.focus();
        return false;
    } else if (name && !name.value.trim()) {
        alert('Digite seu nome.');
        name.focus();
        return false;
    } else if (email && !email.value.trim()) {
        alert('Digite seu email.');
        email.focus();
        return false;
    } else if (email && !emailPattern.test(email.value.trim())) {
        alert("Por favor, insira um endereço de email válido.");
        email.focus();
        return false;
    } else if (phone && (!phone.value.trim() || phone.value.trim().length < 14)) {
        alert('Digite o número de telefone corretamente com 10 dígitos.');
        phone.focus();
        return false;
    } else if (phone && !phonePattern.test(phone.value.trim())) {
        alert("Por favor, insira um número de telefone válido no formato (XX) XXXX-XXXX.");
        phone.focus();
        return false;
    } else {
        return true;
    }
}

// progress bar

document.getElementById('fileInput').addEventListener('change', (event) => {

    const file = event.target.files[0];
    const fileName = document.getElementById('fileName');
    const progress_bar = document.querySelector('.progress-bar');
    const progress = document.getElementById('progress');
    const progress_text = document.getElementById('progress-text');
    const confirmacao = confirm('Deseja carregar o arquivo ' + file.name + ' ?');

    if (!confirmacao) {
        loadFile(fileInput.files[0]);
    }

    function updateProgressBar(percentage) {

        progress.style.width = percentage + '%';
        progress_text.textContent = 'Carregando: ' + percentage + '%';
    }

    if (file) {

        fileName.innerText = file.name;
        progress_bar.style.display = 'flex';
        uploadButton.style.display = 'none';
        removeButton.style.display = 'flex';

        let progress = 0;

        const interval = setInterval(() => {

            if (progress < 100) {
                progress += 10;
                updateProgressBar(progress);
            } else {
                clearInterval(interval);
            }

            if (progress === 100) {
                progress_text.textContent = '100% Concluido';
            }

        }, 100);
    }
});


removeButton.addEventListener('click', () => {

    const removeButton = document.getElementById('removeButton');
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const progress = document.getElementById('progress');
    const progress_bar = document.querySelector('.progress-bar');
    const confirmacao = confirm('Deseja remover o arquivo ' + fileName.innerText + ' ?');

    if (confirmacao) {

        fileInput.value = '';
        fileName.innerText = 'Nenhum arquivo selecionado';
        removeButton.style.display = 'none';
        uploadButton.style.display = 'flex';
        progress.style.width = '0%';
        progress_bar.style.display = 'none';

    } else {
        return;
    }
});

// Toggle

document.addEventListener('DOMContentLoaded', function () {

    var toggles = document.querySelectorAll('.toggle-content');

    toggles.forEach(function(toggleContent) {

        var toggle = toggleContent.querySelector('.toggle');
        var down = toggleContent.querySelector('.fa-chevron-down');
        var up = toggleContent.querySelector('.fa-chevron-up');
        var descriptionContent = toggleContent.querySelector('.description-content');

        toggle.addEventListener('click', function () {


            if (descriptionContent.style.maxHeight === '' || descriptionContent.style.maxHeight === '0px') {

                descriptionContent.style.maxHeight = descriptionContent.scrollHeight + 'px';
                down.style.display = 'none';
                up.style.display = 'block';

            } else {

                descriptionContent.style.maxHeight = '0px';
                up.style.display = 'none';
                down.style.display = 'block';
            }
        });
    });
});



