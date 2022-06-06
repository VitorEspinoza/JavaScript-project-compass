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
        newContainerCertificate.classList.add('certificateContainer');
        newParentContainer.classList.add('flex');
        newParentContainer.classList.add('certificates-save');

        if (constructorCertificate.parentNode.querySelector("img").classList.contains("favorite-true")) {
            newHeartIcon.src = "./img/heart-favorite.svg";
            newHeartIcon.classList.add('heart-icon');
            newHeartIcon.classList.add('favorite-true');
        }
        else {
            newHeartIcon.src = "./img/heart.svg";
            newHeartIcon.classList.add('heart-icon');
        }
       
       
        newTrashIcon.src = "./assets/trash.svg";
        newTrashIcon.classList.add('trash-icon')
              
        newInputCertificate.value = constructorCertificate.value;
        constructorCertificate.value = "";
        constructorCertificate.parentNode.querySelector("img").src = "./img/heart.svg"
        constructorCertificate.parentNode.querySelector("img").classList .remove("favorite-true");
        newInputCertificate.readOnly = true;
        
        
        newContainerCertificate.appendChild(newInputCertificate);
        newContainerCertificate.appendChild(newHeartIcon);
        newContainerCertificate

        newParentContainer.appendChild(newContainerCertificate);
        newParentContainer.appendChild(newTrashIcon);
        newParentContainer.classList.add("container-certificate-options");
        
        AddInOrder(newParentContainer, certificates.querySelectorAll(".certificates-save"));
    } 
    else if (certificates.querySelectorAll('.quantity-error').length == 0 && btnAddCertificate.Disabled == false) {    
        let errorQuantCertificates = document.createElement('span');
        errorQuantCertificates.classList.add('errorMessageStyle');
        errorQuantCertificates.classList.add('quantity-error');
        
        errorQuantCertificates.textContent = "Você pode adicionar no máximo 5 certificados";
        certificates.appendChild(errorQuantCertificates);
    }
    
});

certificates.addEventListener('click', () => {
    let trashs = document.querySelectorAll('.trash-icon');

    let favorites = document.querySelectorAll('.heart-icon');
    favorites.forEach(element => {
        
        element.addEventListener('mousedown', (e) => {
            var lastCertificates = certificates.querySelectorAll(".certificates-save");
            var actualCertificates = Array.prototype.slice.call(document.querySelectorAll(".certificates-save"));
            let fatherContainerCertificate = document.getElementById('certificates');

            lastCertificates.forEach(certificate => {
                if (certificate.querySelector('div').querySelector('img').classList.contains("favorite-true")) {
                    actualCertificates.unshift(certificate);
                }
                else {
                    actualCertificates.push(certificate)
                }
                updateOrderCertificates(lastCertificates, actualCertificates, fatherContainerCertificate);
            });
           
            element.classList.toggle('favorite-true');
            if (element.classList.contains('favorite-true')) {
                element.src = "img/heart-favorite.svg";
            }
            else {
                element.src = "img/heart.svg";
            }
            
        });
    });

    trashs.forEach(element => {
        
        element.addEventListener('click', () => {
            ParentContainer = element.parentNode;
            ParentContainer.parentNode.removeChild(ParentContainer);
        });
    });
});

function AddInOrder(newCertificateContainer, lastCertificates) {
    let actualCertificates = Array.prototype.slice.call(document.querySelectorAll(".certificates-save"));
    let fatherContainerCertificate = document.getElementById('certificates');
    if (newCertificateContainer.querySelector('div').querySelector('img').classList.contains("favorite-true"))
    {
        actualCertificates.unshift(newCertificateContainer);
    }
    else {
        actualCertificates.push(newCertificateContainer)
    }
        updateOrderCertificates(lastCertificates, actualCertificates, fatherContainerCertificate);

}

function updateOrderCertificates(lastCertificates, actualCertificates, fatherContainerCertificate) {
    lastCertificates.forEach(certificate => {
        fatherContainerCertificate.removeChild(certificate);
    });
    
    actualCertificates.forEach(certificate => {
    fatherContainerCertificate.appendChild(certificate);
    })
}


  
