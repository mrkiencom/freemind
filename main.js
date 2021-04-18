function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function validate() {
    var name = document.getElementById("username").value;
    var phone = document.getElementById("phonenumber").value;
    var exp = document.getElementById("exp").value;
    var email = document.getElementById("email").value;
    var select = document.getElementById("select").value;
    var nameImage = document.getElementById("input-folder-1").value;

    var check = true;
    if (name == "") {
        alert("Vui lòng nhập tên!");
        check = false;
        return false;
    }
    if (phone == "" || phone.length < 10 || phone.length > 12) {
        alert("Vui lòng nhập lại sđt!");
        check = false;
        return false;
    }
    if (exp == "") {
        alert("Ô Kinh nghiệm không được để trống !");
        check = false;
        return false;

    }
    if (email == "" || validateEmail(email) == false) {
        alert("email bị trống hoặc không hợp lệ!");
        check = false;
        return false;

    }
    if (email == "") {
        alert("Vui lòng nhập email!");
        check = false;
        return false;

    }
    if (select == "") {
        alert("Vui lòng vị trí ứng tuyển!");
        check = false;
        return false;

    }
    if (nameImage == "") {
        alert("Vui lòng chọn ảnh!");
        check = false;
        return false;

    }
    if (check == true) {
        var data = {
            name: name,
            phone: phone,
            position: select,
            exp: exp,
            picture: nameImage,
            email: email
        }
        console.log(JSON.stringify(data))
        fetch('https://freemind-test.netlify.app/.netlify/functions/test', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }
    alert("Gửi CV thành công !");
    return true;
}