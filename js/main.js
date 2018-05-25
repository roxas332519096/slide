
let n
initialize();

setInterval(() => {
    leave(seletor(n)).one('transitionend', (e) => {
        enter($(e.currentTarget))
    })
    current(seletor(n+1))
    n += 1;
},3000)


function initialize(){
    n = 1;
    $(`.images > img:nth-child(${n})`).addClass('current').
    siblings().addClass('enter');
}

function x(n){
    if(n > 3){
        n %= 3;
        if (n === 0){
            n = 3
        }
    }
    return n
}

function seletor(n){
    return $(`.images > img:nth-child(${x(n)})`);
}

function leave($node){
    return $node.removeClass('current').addClass('leave')
}

function enter($node){
    return $node.removeClass('leave').addClass('enter')
}

function current($node){
    return $node.removeClass('enter').addClass('current')
}