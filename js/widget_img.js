if(document.getElementsByClassName == undefined) {
  var images = $('#comments').find('.comment-content')
} else {
  var images = document.getElementById('comments').getElementsByClassName('comment-content')
}

for (key in images) {
  var image = images[key]
  if (image.innerHTML) {
  	if (image.innerHTML.match(/\[img\](.*)\[\/img\]/g)) {
      imgcode = image.innerHTML;
      imgcode = imgcode.replace(/\[img\]/gi, '<br><img onmouseover="if (this.width >= cimw || this.height >= cimh) {this.style.cursor=\'pointer\'; title=\'Показать в полный размер\';}" onclick="if (this.width >= cimw || this.height >= cimh) {window.open(this.src);}" src="');
      imgcode = imgcode.replace(/\[\/img\]/gi, '" id=comment-img><br>');
      imgcode = imgcode.replace(/<br><br><img/gi, '<br><img');
      image.innerHTML = imgcode.replace(/img><br><br>/gi, 'img><br>');
    }
  }
}