var mobileMenuOpen = false;
const desktopNav = document.getElementById("desktopNav")
const mobileNavHeader = document.getElementById("mobileHeader")
const mobileNav = document.getElementById("mobileNav")
const mobileNavMenu = document.getElementById("mobileNavMenu")
const contentN = document.getElementById("content")
const navList = document.getElementById("navList")
const burger = document.getElementById("hamburger-icon")
const mobileContent = document.getElementById('mobileContent')

window.onscroll = () => {
    setNavBGT();
  }

burger.addEventListener('click', (e) => {
    mobileMenuOpen = !mobileMenuOpen;
    setNavBGT()
})

function setNavBGT(){
    // Spaghetti
    if(mobileMenuOpen){
        mobileNavHeader.className = "scrolled";
        mobileContent.className = "";
        burger.classList.add('open')
        burger.classList.remove('hamburgerBG')
      // Menu Open, Expand it
    }else{
        burger.classList.remove('open')
        mobileContent.className = "mobileNavContent";
        //mobileNavMenu.classList.remove("mobileNavOpen");
        // Menu not open, Remove NavExpander
        const desktopNavVP = desktopNav.getBoundingClientRect();
        const mobileNavVP = mobileNavHeader.getBoundingClientRect();
        const contentVP = contentN.getBoundingClientRect();

        const contentTop = contentVP.top;
        // Menu is not open, Check Scrolled Position
        if(contentTop <= (desktopNavVP.bottom || mobileNavVP.bottom)){
            desktopNav.className = "scrolled";
            mobileNavHeader.className = "scrolled";
            navList.className = "navListScrolled";
            burger.classList.remove('hamburgerBG')
        }else{
            desktopNav.className = "";  
            mobileNavHeader.className = "";
            navList.className = "navListBlur"
            burger.classList.add('hamburgerBG')
        } 
    }
}