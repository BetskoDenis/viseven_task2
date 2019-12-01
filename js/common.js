function active(){

    if(ship__wrapper.classList.contains('active')){
        ship__wrapper.classList.remove('active');
        iceberg_top.classList.remove('active')
        torpedo__wrapper.classList.remove('active')
        explosion.classList.remove('active')
        cat_fly.classList.remove('active')
        bubble_popup__wrapper.classList.remove('active')
        start_button.innerHTML = 'Розпочати божевілля'

    }else{

        ship__wrapper.classList.add('active');
        iceberg_top.classList.add('active')
        torpedo__wrapper.classList.add('active')
        explosion.classList.add('active')
        cat_fly.classList.add('active')
        bubble_popup__wrapper.classList.add('active')
        start_button.innerHTML = 'Режим спокою'

    }
}

start_button.onclick = function () {
    active();


}