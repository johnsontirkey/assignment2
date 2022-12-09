
function changeFontStyle1(e){
    const text1 = document.querySelector('.para4');
    if(e.target.id === "bold1"){
        e.target.classList.toggle('active1');
        text1.classList.toggle('bold1');
    }

    if(e.target.id === "italic1"){
    e.target.classList.toggle('active1');
    text1.classList.toggle('italic1');
    }

    if(e.target.id === "underline1"){
    e.target.classList.toggle('active1');
    text1.classList.toggle('underline1');
    }

}


function changeFontStyle2(e){
    const text2 = document.querySelector('.para5');
    if(e.target.id === "bold2"){
        e.target.classList.toggle('active2');
        text2.classList.toggle('bold2');
    }

    if(e.target.id === "italic2"){
    e.target.classList.toggle('active2');
    text2.classList.toggle('italic2');
    }

    if(e.target.id === "underline2"){
    e.target.classList.toggle('active2');
    text2.classList.toggle('underline2');
    }

}
    function changeFontStyle3(e){
        const text3 = document.querySelector('.para6');
        if(e.target.id === "bold3"){
            e.target.classList.toggle('active3');
            text3.classList.toggle('bold3');
        }
    
        if(e.target.id === "italic3"){
        e.target.classList.toggle('active3');
        text3.classList.toggle('italic3');
        }
    
        if(e.target.id === "underline3"){
        e.target.classList.toggle('active3');
        text3.classList.toggle('underline3');
        }

}


const btn_action1 = document.querySelector('.btn_action1');
btn_action1.addEventListener('click', changeFontStyle1);

const btn_action2 = document.querySelector('.btn_action2');
btn_action2.addEventListener('click', changeFontStyle2);

const btn_action3 = document.querySelector('.btn_action3');
btn_action3.addEventListener('click', changeFontStyle3);