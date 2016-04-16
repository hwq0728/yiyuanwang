$(function () {
    //登陆检查
    var $loginEmail = $("#login-email"),
        $loginPassword = $("#login-password"),
        $loginInfo = $("#login-info");
    $(".btn-login").on("click", function () {
        if (checkForm({
                email: $loginEmail.val(),
                password: $loginPassword.val(),
                checkPwd: true,
                showEle: $loginInfo
            })) {
            //$.ajax();
        }
    });

    $loginEmail.on("change", function () {
        checkForm({email: $loginEmail.val(), password: $loginPassword.val(), checkPwd: false, showEle: $loginInfo});
    });

    //注册检测
    var $registerEmail = $("#register-email"),
        $registerPassword = $("#register-password"),
        $registerInfo = $("#register-info");
    $(".btn-register").on("click", function () {
        if (checkForm({
                email: $registerEmail.val(),
                password: $registerPassword.val(),
                checkPwd: true,
                showEle: $registerInfo
            })) {
            //$.ajax();
        }
    });

    $registerEmail.on("change", function () {
        checkForm({
            email: $registerEmail.val(),
            password: $registerPassword.val(),
            checkPwd: false,
            showEle: $registerInfo
        });
    });

    function checkForm(options) {
        if (!checkEmail(options.email)) {
            options.showEle.html("邮箱格式错误，请重新输入").fadeIn("fast");
            return false;
        } else {
            options.showEle.html("").fadeOut("fast");
        }

        //检查密码
        if (options.checkPwd && !options.password) {
            options.showEle.html("请输入密码").fadeIn("fast");
            return false;
        }
        return true;
    }

    function checkEmail(email) {
        var emailPattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+.[a-zA-Z0-9_-]+$/;
        return emailPattern.test(email);
    }
});