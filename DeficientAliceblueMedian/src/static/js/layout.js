document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementById('menu-toggle')
    const closeSidebar = document.getElementById('close-sidebar')
    const sidebar = document.getElementById('sidebar')

    menuToggle.addEventListener('click', function(){
        sidebar.classList.toggle('active')
    })

    closeSidebar.addEventListener('click', function(){
        sidebar.classList.remove('active')
    })
})