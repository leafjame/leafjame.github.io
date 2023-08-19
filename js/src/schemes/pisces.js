$(document).ready(function () {
  piscesJs();
});

function piscesJs(){
  initAffix();
  resizeListener();
}

function initAffix (p1, p2) {
  var sidebarInner = $('.sidebar-inner');
  var headerOffset = getHeaderOffset(),
      footerOffset = getFooterOffset(),
      sidebarHeight = $('#sidebar').height() + NexT.utils.getSidebarb2tHeight(),
      contentHeight = $('#content').height();

  // Not affix if sidebar taller then content (to prevent bottom jumping).
  if (headerOffset + sidebarHeight < contentHeight) {
    sidebarInner.affix({
      offset: {
        top: headerOffset - CONFIG.sidebar.offset,
        bottom: footerOffset
      }
    });
  }

  if(p1 != undefined && p2 != undefined){
    sidebarInner.affix({
      offset: {
        top: p1,
        bottom: p2
      }
    });
  }

  setSidebarMarginTop(headerOffset).css({ 'margin-left': 'initial' });
}

function resizeListener () {
  var mql = window.matchMedia('(min-width: 991px)');
  mql.addListener(function(e){
    if(e.matches){
      recalculateAffixPosition();
    }
  });
}

function getHeaderOffset () {
  return $('.header-inner').height() + CONFIG.sidebar.offset;
}

function getFooterOffset () {
  var footerInner = $('.footer-inner'),
      footerMargin = footerInner.outerHeight(true) - footerInner.outerHeight(),
      footerOffset = footerInner.outerHeight(true) + footerMargin;
  return footerOffset;
}

function setSidebarMarginTop (headerOffset) {
  return $('#sidebar').css({ 'margin-top': headerOffset });
}

function recalculateAffixPosition () {
  $(window).off('.affix');
  var sidebarInner = $('.sidebar-inner');
  sidebarInner.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
  initAffix();
}
