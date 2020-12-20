var qrcode = new QRCode("output");

function makeCode(){
    var input = document.getElementById("data");

    qrcode.makeCode(input.value);
}

function generate()
{
    makeCode();
}