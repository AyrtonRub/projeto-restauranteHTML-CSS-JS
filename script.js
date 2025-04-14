(function(){
    //Função paraadicionar e remover a sombra do header

    function manipulateShadowHeader (){
        const header = document.querySelector("header")
        const scrollPosition = window.scrollY

       scrollPosition > 60 ? header.classList.add("shadow"):  header.classList.remove("shadow")
    }

    
    const jsWeb = Array.from(document.querySelectorAll("[js-web]"))
    const navItems = Array.from(document.querySelectorAll("[js-nav]"))
    
    if(navItems.length > 0) {
        navItems[0].classList.add("active")
    }
    //função para adicionar animação dos elementos
    
    function handleElementVisibility() {
        let visibleSection = null
        let visibleSectionItems = 0

        jsWeb.forEach((section, index) => {
            const rect = section.getBoundingClientRect()
            const isVisible = rect.top - 60 < window.innerHeight && rect.bottom > window.
            innerHeight - 60
            if(isVisible) {
                visibleSection = section
                visibleSectionItems = index
            }
        })
        

        navItems.forEach(el => el.classList.remove("active"))
        if(visibleSection) {
            visibleSection.classList.add("visible")
            navItems[visibleSectionItems].classList.add("active")
        }
        
    }

    const showSlider = Array.from(document.querySelectorAll("[show]"))
    let currentIndex = 0

    function sliderShow() {
        showSlider[currentIndex].classList.remove("cardVisible")
        currentIndex = (currentIndex + 1) % showSlider.length
        showSlider[currentIndex].classList.add("cardVisible")
        
    }

    setInterval(() => sliderShow(), 5000);

    window.addEventListener("scroll", manipulateShadowHeader)
    window.addEventListener("scroll", handleElementVisibility)
})()