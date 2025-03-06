const namaSaya = "afriza herdian"; 
let usia = 17

const biodata = document.getElementById('biodata');
console.log('biodata');

function generateBiodata() {
    if(usia > 10 && usia < 18) {
    console.log('bocil anying')
    } 
    else if (usia > 17 && usia < 48) {
    console.log('subur nich')  
}
else {
    console.log('tuwir sia goblog')
}
}

console.log(namaSaya);
console.log(usia);

generateBiodata();
