


document.querySelectorAll('.ser-list').forEach(service =>{
    service.addEventListener('click', () =>{
        const ulist_id = service.dataset.id;
        const ulist = document.getElementById(ulist_id)

        if(service.dataset.status == 'false'){
            ulist.style.display = 'block';
            ulist.classList.toggle('ser-list-anim-open')
            service.dataset.status = 'true'
        }
        else if(service.dataset.status == 'true'){
            /* ulist.style.display = 'none'; */
            ulist.classList.toggle('ser-list-anim-open')
            service.dataset.status = 'false'
        }
    })
})