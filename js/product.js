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

    var purpose_use = document.getElementById('purpose-use');
    var fieldset_content_vehicle = document.querySelector('.fieldset-content-vehicle');
    var others_content = document.getElementById('others-content');
    var input_others = document.getElementById('input-others');
    var area_objective_content = document.querySelector('.area-objective-content');

    if(purpose_use.value === '0') {
        
        others_content.style.display = 'block';
        input_others.focus();

    } else {
        others_content.style.display = 'none';
    }
    
    if(purpose_use.value === '1') {

        fieldset_content_vehicle.style.display = 'flex';
        area_objective_content.style.display = 'block';

    } else {
        fieldset_content_vehicle.style.display = 'none';
        area_objective_content.style.display = 'none';
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

function showAlert(alert, message) {

    var alert = document.getElementById(alert);

    alert.textContent = message;
    alert.style.display = 'block';

}

function hideAlert(input, alert) {

    var input = document.getElementById(input);
    var alert = document.getElementById(alert);

    input.addEventListener('blur', function() {

        if(input.value.trim()) {
            alert.style.display = 'none';
        }
    });
}

function validarInput() {

    var input_alt = document.getElementById('input-alt');
    var input_larg = document.getElementById('input-larg');
    var material = document.getElementById('material');
    var thickness = document.getElementById('thickness');
    var finishing = document.getElementById('finishing');
    var fieldset_content_vehicle = document.querySelector('.fieldset-content-vehicle');
    var brand = document.getElementById('brand');
    var model = document.getElementById('model');
    var year = document.getElementById('year');
    var color = document.getElementById('color');
    var area = document.getElementById('area');
    var vehicle_objective = document.getElementById('vehicle-objective');
    var banner_objective = document.getElementById('banner-objective');
    var purpose_use = document.getElementById('purpose-use');
    var input_purpose_use = document.getElementById('input-purpose-use');
    var input_objective = document.getElementById('input-objective');
    var application = document.getElementById('application');
    var others_content = document.getElementById('others-content');
    var input_others = document.getElementById('input-others');
    var quantity = document.getElementById('quantity');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phone = document.getElementById('phone');
    var phonePattern = /^\(\d{2}\) \d{4}-\d{4}$/;
    var public_place = document.getElementById('public_place');
    var number = document.getElementById('number');
    var complement = document.getElementById('complement');
    var neighborhood = document.getElementById('neighborhood');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var cep = document.getElementById('cep');
    var cepPattern = /^[0-9]{5}-?[0-9]{3}$/;
    var observation = document.getElementById('observation');

    if (input_alt && !input_alt.value.trim()) {
     
        showAlert('input-alt-alert', 'informe as dimensões (altura x largura).');
        hideAlert('input-alt', 'input-alt-alert');
        input_alt.focus();
        return false;
    }

    if (input_larg && !input_larg.value.trim()) {
      
        showAlert('input-larg-alert', 'informe as dimensões (altura x largura).');
        hideAlert('input-larg', 'input-larg-alert');
        input_larg.focus();
        return false;
    }

    if (material && material.value === '') {
      
        showAlert('material-alert', 'Escolha o tipo de material.');
        hideAlert('material', 'material-alert');
        material.focus();
        return false;
    }

    if (thickness && thickness.value === '') {
      
        showAlert('thickness-alert', 'Selecione a espessura do produto.');
        hideAlert('thickness', 'thickness-alert');
        thickness.focus();
        return false;
    }

    if (finishing && finishing.value === '') {

        showAlert('finishing-alert', 'Escolha o tipo de acabamento.');
        hideAlert('finishing', 'finishing-alert');
        finishing.focus();
        return false;
    }

    if (purpose_use && purpose_use.value === '') {
       
        showAlert('purpose-use-alert', 'Escolha a finalidade de uso.');
        hideAlert('purpose-use', 'purpose-use-alert');
        purpose_use.focus();
        return false;
    }

    if (input_purpose_use && !input_purpose_use.value.trim()) {
       
        showAlert('input-purpose-use-alert', 'Informe a finalidade de uso.');
        hideAlert('input-purpose-use', 'input-purpose-use-alert');
        input_purpose_use.focus();
        return false;
    }

    if (input_objective && !input_objective.value.trim()) {
       
        showAlert('input-objective-alert', 'Informe o objetivo da placa.');
        hideAlert('input-objective', 'input-objective-alert');
        input_objective.focus();
        return false;
    }

    if (fieldset_content_vehicle && fieldset_content_vehicle.style.display != 'none') {
        
        if (brand && !brand.value.trim()) {
            
            showAlert('brand-alert', 'Informe a marca do veículo.');
            hideAlert('brand', 'brand-alert');
            brand.focus();
            return false;
        }

        if (model && !model.value.trim()) {
            
            showAlert('model-alert', 'Informe o modelo do veículo.');
            hideAlert('model', 'model-alert');
            model.focus();
            return false;
        }

        if (year && (!year.value.trim() || year.value.trim().length < 4)) {
            
            showAlert('year-alert', 'Informe o ano do veículo corretamente com 4 dígitos.');
            hideAlert('year', 'year-alert');
            year.focus();
            return false;
        }

        if (color && !color.value.trim()) {
            
            showAlert('color-alert', 'Informe a cor do veículo.');
            hideAlert('color', 'color-alert');
            color.focus();
            return false;
        }

        if (area && area.value === '') {
            
            showAlert('area-alert', 'Escolha a área do veículo a ser adesivada.');
            hideAlert('area', 'area-alert');
            area.focus();
            return false;
        }

        if (vehicle_objective && vehicle_objective.value === '') {
            
            showAlert('vehicle-objective-alert', 'Selecione o objetivo da adesivação do veículo.');
            hideAlert('vehicle-objective', 'vehicle-objective-alert');
            vehicle_objective.focus();
            return false;
        }
    }

    if (others_content && others_content.style.display != 'none') {
        
        if (input_others && !input_others.value.trim()) {
            
            showAlert('input-others-alert', 'Informe o local da adesivação.');
            hideAlert('input-others', 'input-others-alert');
            input_others.focus();
            return false;
        }
    }

    if (banner_objective && banner_objective.value === '') {
            
        showAlert('banner_objective-alert', 'Selecione o objetivo da faixa.');
        hideAlert('banner_objective', 'banner_objective-alert');
        vehicle_objective.focus();
        return false;
    }

    if (application && application.value === '') {
        
        showAlert('application-alert', 'Escolha quem realizará a aplicação do adesivo.');
        hideAlert('application', 'application-alert');
        application.focus();
        return false;
    }

    if (quantity && (quantity.value === '0')) {
        
        showAlert('quantity-alert', 'A quantidade mínima de produto é 1.');
        hideAlert('quantity', 'quantity-alert');
        quantity.focus();
        return false;
    }

    if (name && !name.value.trim()) {

        showAlert('name-alert', 'Digite seu nome.');
        hideAlert('name', 'name-alert');
        name.focus();
        return false;
    }

    if (email && !email.value.trim()) {

        showAlert('email-alert', 'Digite seu email.');
        hideAlert('email', 'email-alert');
        email.focus();
        return false;
    }

    if (email && !emailPattern.test(email.value.trim())) {

        showAlert('email-alert', 'Por favor, insira um endereço de email válido.');
        hideAlert('email', 'email-alert');
        email.focus();
        return false;
    }

    if (phone && !phone.value.trim()) {
        
        showAlert('phone-alert', 'Digite o seu número de telefone.');
        hideAlert('phone', 'phone-alert');
        phone.focus();
        return false;
    }

    if (phone && !phonePattern.test(phone.value.trim())) {
        
        showAlert('phone-alert', 'Por favor, insira um número de telefone válido no formato (XX) XXXX-XXXX.');
        hideAlert('phone', 'phone-alert');
        phone.focus();
        return false;
    }

    if (public_place && !public_place.value.trim()) {

        showAlert('public_place-alert', 'Informe o logradouro.');
        hideAlert('public_place', 'public_place-alert');
        public_place.focus();
        return false;
    }

    if (number && !number.value.trim()) {

        showAlert('number-alert', 'Digite o número da residência.');
        hideAlert('number', 'number-alert');
        number.focus();
        return false;
    }

    if (neighborhood && !neighborhood.value.trim()) {

        showAlert('neighborhood-alert', 'Informe o bairro.');
        hideAlert('neighborhood', 'neighborhood-alert');
        neighborhood.focus();
        return false;
    }

    if (city && !city.value.trim()) {
        
        showAlert('city-alert', 'Informe a cidade.');
        hideAlert('city', 'city-alert');
        city.focus();
        return false;
    }

    if (state && !state.value.trim()) {

        showAlert('state-alert', 'Informe o estado.');
        hideAlert('state', 'state-alert');
        state.focus();
        return false;
    }

    if(cep && !cep.value.trim()) {

        showAlert('cep-alert', 'Informe o CEP.');
        hideAlert('cep', 'cep-alert');
        cep.focus();
        return false;
    }

    if (cepPattern && !cepPattern.test(cep.value)) {

        showAlert('cep-alert', 'Por favor, preencha um CEP válido.');
        hideAlert('cep', 'cep-alert');
        cep.focus();
        return false;
    }

    if (confirm("Deseja enviar o formulário?")) {
        
        var complementValue;
        var observationValue;
    
        complementValue = !complement.value ? 'Não informado.' : complement.value;
        observationValue = !observation.value ? 'Nenhuma observação.' : observation.value;
    
        var message = `Olá!\n\nSolicitei um orçamento através do site www.postart.net.br para o seguinte produto:\n\n*Banner*\n\nTamanho: ${input_alt.value} x ${input_larg.value} cm\nMaterial: ${material.options[material.selectedIndex].text}\nQuantidade: ${quantity.value}\n\n*Contato*\n\nNome: ${name.value}\nEmail: ${email.value}\nTelefone: ${phone.value}\n\n*Endereço*\n\nLogradouro: ${public_place.value}\nNúmero: ${number.value}\nComplemento: ${complementValue}\nBairro: ${neighborhood.value}\nCidade: ${city.value}\nEstado: ${state.value}\nCEP: ${cep.value}\n\n*Observação*\n\n${observationValue}\n\n\n_Aguardo seu retorno._\n\n_Obrigado,_\n_${name.value}_`;      
        var phoneNumber = '5535984368959';
        var url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');

        /*var formData = new FormData();

        formData.append('phoneNumber', phoneNumber);
        formData.append('message', message);
        formData.append('fileUrl', 'https://example.com/path/to/your/file'); // Substitua pela URL do arquivo real
    
        axios.post('http://localhost:3000/send-message', formData)
    
        .then(response => {
            alert('Mensagem enviada com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao enviar mensagem:', error);
            alert('Erro ao enviar mensagem.');
        });*/
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



