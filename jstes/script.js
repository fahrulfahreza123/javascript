//prototyle membuat objek JS

//     let siswa1 = {
//         nama: 'Fahrul',
//         energi: 10,
//         makan: function (porsi) {
//             this.energi = this.energi + porsi;
//             console.log(`hallo ${this.nama}, selamat makan!`);
//         }
//     }

//     let siswa2 = {
//         nama: 'Fahreza',
//         energi: 20,
//         makan: function (porsi) {
//             this.energi = this.energi + porsi;
//             console.log(`hallo ${this.nama}, selamat makan!`);
//         }
//     }

//     function siswa(nama, energi){
//         let siswa = {};
//         siswa.nama = nama;
//         siswa.energi = energi;

//         siswa.makan = function (porsi){
//             this.energi += porsi;
//             console.log(`halo ${this.nama}, selamat makan`);
//         }

//         siswa.olahraga = function (jam){
//             this.energi -= jam;
//             console.log(`halo ${this.nama}, selamat berolahraga`);
//         }
//         return siswa;
//     }

//     let Fahrul = siswa('Fahrul', 10);
//     let Fahreza = siswa('Fahreza', 20);


// //Function Declaration
//     const methodsiswa = {
//         makan : function (porsi){
//             this.energi += porsi;
//             console.log(`halo ${this,nama}, selamat makan`);
//         },
//         olahraga : function (jam){
//             this.energi -= jam;
//             console.log(`halo ${this.nama}, selamat bermain!`);
//         },

//         tidur: function (jam){
//             this.energi += jam * 2;
//             console.log(`halo ${this.nama}, selamat tidur`);
//         }
//     };
//     function siswa(nama, energi){
//         let siswa = Object.create(methodsiswa);
//         siswa.nama = nama;
//         siswa.energi = energi;

//         return siswa;
//     }

//     let Fahrul = siswa('Fahrul', 10);
//     let Fahreza = siswa('Fahreza', 20);



//Execution Context, Hoisting & Scope

var name = 'Fahrul Fahreza';
var igusername = 'fahrul.fahreza.7';
var fbusername = 'fahrul.fahreza.7';

function instaURL(igusername){
    var igURL = 'http://instagram.com/';
    return igURL + igusername;
    
}

function faceURL(fbusername){
    var fbURL = 'http://facebook.com/';
    return fbURL + fbusername;
    
}

console.log(instaURL(igusername));
console.log(faceURL(fbusername));

    //PROTOTYPE OBJEK INHERITANCE

    function siswa(nama, energi){
        this.nama = nama;
        this.energi= energi; 
    }

    siswa.prototype.makan = function (porsi){
        this.energi += porsi;
        return `halo ${this.nama}, selamat makan!`;
    }

    siswa.prototype.olahraga = function(jam){
        this.energi -= jam;
        return `halo ${this.nama}, selamat berolahraga`;
    }

    siswa.prototype.tidur = function(jam){
        this.energi += jam * 2;
        return `halo ${this.nama}, selamat tidur`;
    }


    let Fahrul = new siswa('Fahrul', 10);

//versi Class
class siswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `halo ${this.nama}, selamat makan!`;
    }

    olahraga(jam){
        this.energi -= jam;
        return `halo ${this.nama}, selamat berolahraga`;
    }

    tidur(jam){
        this.energi += jam * 2;
        return `halo ${this.nama}, selamat tidur`;
    }
}

let Fahrul = new siswa('Fahrul', 100);
let Fahreza = new siswa('Fahreza', 150);
