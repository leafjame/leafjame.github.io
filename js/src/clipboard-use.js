/*页面载入完成后，创建复制按钮*/
!function (e, t, a) {
  /* code */
  initCopyCode();
}(window, document);

function initCopyCode() {
  var copyHtml = '';
  copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
  //fa fa-globe可以去字体库替换自己想要的图标
  copyHtml += '  <i class="fa fa-clipboard"></i><span>Copy</span>';
  copyHtml += '</button>';
  $(".highlight .code pre").before(copyHtml);
  new ClipboardJS('.btn-copy', {
    target: function(trigger) {
      // sweetalert
      swal({
        title: "Copied!",
        text: "",
        icon: "success",
        timer: 1500,
        button: true
      });
      return trigger.nextElementSibling;
    }
  });
}
