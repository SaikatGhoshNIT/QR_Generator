const QR_api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const inputbox = document.querySelector('.input_box');
const image = document.querySelector('#image');
const button = document.querySelector('.btn');

const qrGenerator = async (userinput)=>{
    if(userinput != null){
        document.querySelector('.qr_here').style.display = 'block'
        image.src = QR_api+userinput;
    }
    else
        document.querySelector('.qr_here').style.display = 'none'

}

button.addEventListener('click', ()=>{
    qrGenerator(inputbox.value)

    inputbox.value = ' ';
})

