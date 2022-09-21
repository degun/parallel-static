const whatsapp = document.querySelector('header ul li:nth-child(3) a');
whatsapp.href = process.env.WHATSAPP_URL;
function socialLinksChange (){
  const width = Math.max(
    document.documentElement["clientWidth"],
    document.body["scrollWidth"],
    document.documentElement["scrollWidth"],
    document.body["offsetWidth"],
    document.documentElement["offsetWidth"]
  );
  const instagram = document.querySelector('header ul li:nth-child(1) a');
  const linkedin = document.querySelector('header ul li:nth-child(2) a');
  const whatsapp = document.querySelector('header ul li:nth-child(3) a');
  instagram.innerHTML = width < 750 ? 'IN' : 'Instagram';
  linkedin.innerHTML = width < 750 ? 'LI' : 'LinkedIn';
  whatsapp.innerHTML = width < 750 ? 'WU' : 'WhatsApp';
}

window.addEventListener('load', function () {
  socialLinksChange();
  window.addEventListener('resize', socialLinksChange);
})