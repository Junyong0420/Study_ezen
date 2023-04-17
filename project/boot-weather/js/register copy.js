$('.register').click(function() { 
   const email = $('#inputEmail3').val();
   const password = $('#inputPassword3').val();
   const gender = $('#gender').val();
   let like = '';

   $('input[name="gridRadios"]').each(function() {
    var value = $(this).val();              
    var checked = $(this).prop('checked');  

    if(checked) {
        like = value;
        return;
    }
   });

   if (!email) {
    alert('이메일을 입력해주세요!');
    return;
   } else {
        //비밀번호를 입력했다면 정규식 체크
        if (!emailCheck(email)) {
            alert('이메일 형식에 맞지 않습니다.');
            return;
        }
    }

   if (!password) {
    alert('비밀번호를 입력해주세요!');
    return;
   } else {
      //비밀번호를 입력했다면 정규식 체크
      if (!pwdCheck(password)) {
        alert('비밀번호는 특수문자/문자/숫자 포함 형태의 8~15자리 이내입니다.');
        return;
      }
   }

   if (!gender) {
    alert('성별을 선택해주세요!');
    return;
   }

   alert('회원가입이 완료되었습니다!');
   location.href = "./index.html";

});

// 정규식
function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
}
  
function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
}