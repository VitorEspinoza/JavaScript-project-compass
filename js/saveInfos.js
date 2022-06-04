function SaveQualifications(){
    let listCertificates;
    certificates.querySelectorAll('input').forEach(certificate => {
        listCertificates.Add(certificate.value);
    });

    let teamName = document.querySelector("#teamName").value;
    let institution = document.querySelector('#institution').value;
    let graduation = document.querySelector('#graduation').value;

   let qualification = new Qualification(listCertificates, teamName, institution, graduation);
}
