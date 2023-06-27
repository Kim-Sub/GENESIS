let $idArea=document.getElementById('idArea')
let $idAMes=document.getElementById('idMes')
let $pwArea=document.getElementById('pwArea')
let $pwMes=document.getElementById('pwMes')
let $pwArea2=document.getElementById('pwArea2')
let $pwMes2=document.getElementById('pwMes2')

let $name=document.getElementById('name')
let $nameMes=document.getElementById('nameMes')
let $phone=document.getElementById('phone')
let $phMes=document.getElementById('phMes')
let $email=document.getElementById('email')
let $eMes=document.getElementById('eMes')
let $born=document.getElementById('born')
let $bMes=document.getElementById('bMes')

let $gMes=document.getElementById('gMes')


//★  https://regexr.com/ 에서 검증 가능하다.
//★  https://regexr.com/ 에서 검증 가능하다.

let regId=/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/
$idArea.addEventListener('blur' , function(){
    //중복확인 버튼으로 인식되는게 아니고 blur 함수 때문에 test가 인식된다.
    if(!regId.test($idArea.value)){ /* 값이 같을때 사용가능한 id입니다 노출 */
        $idAMes.innerHTML="이름은 실명으로 정확히 기재해주세요."
        $idAMes.style.color='#d2232a'
        $idAMes.style.fontWeight='bold'
    }else{
        $idAMes.innerHTML="검색 가능한 이름 입니다"
        $idAMes.style.color='green'
    }
})

let regPw=/^[A-HJ-NPR-Z0-9]{17}$/;
// . = 전체 문자열을 의미한다.
// \d = 숫자열을 의미한다.
// ? 없거나 있거나
// * 없거나 있거나 많거나
// + 하나 혹은 많거나,
// ^ 앞에 있으면 시작하는 것으로 인식하지만, ()[] 안에 있으면 부정(not)이 된다.
$pwArea.addEventListener('blur' , function(){
    if(!regPw.test($pwArea.value)){
        $pwMes.innerHTML="유효하지 않은 자동차 차대 번호입니다."
        $pwMes.style.color='#d2232a'
        $pwMes.style.fontWeight='bold'
    }else{
        $pwMes.innerHTML="자동차 차대 번호가 유효합니다."
        $pwMes.style.color='green'
    }
})
$pwArea2.addEventListener('blur', function(){
    if(($pwArea.value == $pwArea2.value) && (!$pwArea2.value=='')){
        $pwMes2.innerHTML="비밀번호 확인 완료"
        $pwMes2.style.color='green'
    }else{
        if(($pwArea.value=='') || ($pwArea2.value =='')){
            $pwArea.focus()
            $pwArea2.value=''
        }else{
            $pwMes2.innerHTML="동일한 비밀번호를 입력해주세요"
            $pwMes2.style.color='#d2232a'
            $pwMes2.style.fontWeight='bold'
            $pwArea2.value=''
            $pwArea2.focus()
        }
    }
})


let regName=/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/
$name.addEventListener('blur', function(){
    if(regName.test($name.value)){
        $nameMes.innerHTML=""
    }else{
        $nameMes.innerHTML="이름을 입력해주세요"
        $nameMes.style.color='#d2232a'
        $nameMes.style.fontWeight='bold'
        $name.value=''
        $name.focus()
    }
})


let regPhone=/(^01[016789]{1})([0-9]{3,4})[0-9]{4}$/
$phone.addEventListener('blur', function(){
    if(regPhone.test($phone.value)){
        $phMes.innerHTML=""
    }else{
        $phMes.innerHTML="올바른 연락처를 입력해주세요"
        $phMes.style.color='#d2232a'
        $phMes.style.fontWeight='bold'
        $phone.value=''
        $phone.focus()
    }
})


let regEmail=/^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*\.[a-zA-Z]/g
let regemail=/^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/g;

$email.addEventListener('blur', function(){
    if(regEmail.test($email.value)){
        $eMes.innerHTML=""
    }else{
        if($email.value==""){
            $eMes.innerHTML=""
        }else{
        $eMes.innerHTML="올바른 이메일을 입력해주세요"
        $eMes.style.color='#d2232a'
        $eMes.style.fontWeight='bold'
        $email.value=''
        $email.focus()}
    }
})


let regBorn=/^[0-9]{6}$/
$born.addEventListener('blur' , function(){
    if(regBorn.test($born.value)){
        $bMes.innerHTML=""
    }else{
        if($born.value==""){
            $bMes.innerHTML=""
        }else{
            $bMes.innerHTML="올바른 생년월일을 8글자로 입력해주세요"
            $bMes.style.color='#d2232a'
            $bMes.style.fontWeight='bold'
            $born.value=''
            $born.focus()}
        }
})


document.getElementById('submit').onclick=function(){
    if($idArea.value==""){
        alert('아이디를 입력하세요');
        return false;
    }else{
        if(!regId.test($idArea.value)){
            alert('아이디는 대문자, 소문자, 숫자 포함 4 글자 이상만 가능');
            $idArea.value="";
            return false;
        }else{
            if($pwArea.value==""){
                alert('비밀번호를 입력하세요');
                return false;
            }else{
                if($pwArea.value!==$pwArea2.value){
                    alert('비밀번호가 일치하지 않습니다.');
                    return false;
                }else{
                    if($name.value==""){
                        alert('이름을 입력하세요');
                        return false;
                    }else{
                        if($phone.value==""){
                            alert('번호를 입력하세요');
                            return false;
                        }else{
                            if($email.value==""){
                                alert('이메일을 입력하세요');
                                return false;
                            }else{
                                if($born.value==""){
                                    alert('생년월일을 입력하세요');
                                    return false;
                                }else{
                                    if(document.querySelector('[name=gender]:checked')==null){
                                        $gMes.style.color='red';
                                        $gMes.innerHTML='성별을 체크해주세요'
                                        document.getElementById('female').focus();
                                    }else{
                                        location.href='login.html'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}