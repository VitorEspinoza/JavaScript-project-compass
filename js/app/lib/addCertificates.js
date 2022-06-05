const btnAddCertificate = document.querySelector('.btn-certificate');

let certificates = document.getElementById('certificates');

btnAddCertificate.addEventListener('click', (event) => {
    event.preventDefault();
    certificates = document.getElementById('certificates');

    let quantCertificate = certificates.querySelectorAll('.certificate-input')
    console.log
    const constructorCertificate = document.getElementById('input-new-certificate');
    if (quantCertificate.length <  6 && constructorCertificate.value != "") {   
        let newInputCertificate = document.createElement('input');
        let newHeartIcon = document.createElement('img');
        let newContainerCertificate = document.createElement('div');

        newInputCertificate.classList.add('certificate-input');
        newContainerCertificate.classList.add('certificateContainer');
        
        newHeartIcon.src = "./img/heart.svg";
        newHeartIcon.classList.add('heart-icon');
         
        newInputCertificate.value = constructorCertificate.value;
        constructorCertificate.value = "";
        newInputCertificate.readOnly = true;
    
        newContainerCertificate.appendChild(newInputCertificate);
        newContainerCertificate.appendChild(newHeartIcon);

        certificates.appendChild(newContainerCertificate);
    } 
    else if (certificates.querySelectorAll('.quantity-error').length == 0 && btnAddCertificate.Disabled == true) {    
        let errorQuantCertificates = document.createElement('span');
        errorQuantCertificates.classList.add('errorMessageStyle');
        errorQuantCertificates.classList.add('quantity-error');
        
        errorQuantCertificates.textContent = "Você pode adicionar no máximo 5 certificados";
        certificates.appendChild(errorQuantCertificates);
    }
    
});

certificates.addEventListener('mousedown', () => {
    let favorites = document.querySelectorAll('.heart-icon');

    favorites.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('favorite-true');
            if (element.classList.contains('favorite-true')) {
                element.src = "img/heart-favorite.svg";
            }
            else {
                element.src = "img/heart.svg";
            }
        });
    });
});



  
