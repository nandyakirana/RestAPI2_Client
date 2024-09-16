// let mahasiswa = {
//     Nama: "Giacinta Marescotti",
//     NIM: "215314211",
//     Email: "flaviakirana@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

// let xhr = XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function(data){
    console.log(data);
});