const content = document.getElementsByClassName('content-container')

const question = document.getElementsByClassName('question')

for (i = 0 ; i < content.length ; i++){
    content[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

for (i = 0 ; i < question.length ; i++){
    question[i].addEventListener('click',function(){
        this.classList.toggle('selected')
        this.classList.toggle('no-border')

    })
}