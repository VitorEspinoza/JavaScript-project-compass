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
        let newParentContainer = document.createElement('div');
        let newTrashIcon = document.createElement('img');

        newInputCertificate.classList.add('certificate-input');
        newInputCertificate.classList.add('not-favorite');
        newContainerCertificate.classList.add('certificateContainer');
        newParentContainer.classList.add('flex');
        newParentContainer.classList.add('certificates-save');

        newHeartIcon.src = "./img/heart.svg";
        newHeartIcon.classList.add('heart-icon');
        newTrashIcon.src = "./assets/trash.svg";
        newTrashIcon.classList.add('trash-icon')
         
        newInputCertificate.value = constructorCertificate.value;
        constructorCertificate.value = "";
        newInputCertificate.readOnly = true;

        
        newContainerCertificate.appendChild(newInputCertificate);
        newContainerCertificate.appendChild(newHeartIcon);

        newParentContainer.appendChild(newContainerCertificate);
        newParentContainer.appendChild(newTrashIcon);
        
        
        certificates.appendChild(newParentContainer);
    } 
    else if (certificates.querySelectorAll('.quantity-error').length == 0 && btnAddCertificate.Disabled == true) {    
        let errorQuantCertificates = document.createElement('span');
        errorQuantCertificates.classList.add('errorMessageStyle');
        errorQuantCertificates.classList.add('quantity-error');
        
        errorQuantCertificates.textContent = "Você pode adicionar no máximo 5 certificados";
        certificates.appendChild(errorQuantCertificates);
    }
    
});

certificates.addEventListener('click', () => {
    let favorites = document.querySelectorAll('.heart-icon');

    favorites.forEach(element => {
        
        element.addEventListener('click', () => {
            element.classList.toggle('favorite-true');
            if (element.classList.contains('favorite-true')) {
                element.src = "img/heart-favorite.svg";
                element.parentNode.querySelector("input").classList.add("favorite");
                element.parentNode.querySelector("input").classList.remove("not-favorite");
            }
            else {
                element.src = "img/heart.svg";
                element.parentNode.querySelector("input").classList.add("not-favorite");
                element.parentNode.querySelector("input").classList.remove("favorite");
            }
        });
    });
});



  
