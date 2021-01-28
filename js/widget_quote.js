if(document.getElementsByClassName == undefined) {
  var answers = $('#comments').find('.comment-content')
} else {
  var answers = document.getElementById('comments').getElementsByClassName('comment-content')
}

for (key in answers) {
  var answer = answers[key]
  if (answer.innerHTML) {
    answer.innerHTML = answer.innerHTML.replace(/(\[q=\")|(\[url\])/gi, '<table><tr><td><span class=comment-quote-name><span class=name-color>');
    answer.innerHTML = answer.innerHTML.replace(/(\"\])|(\[\/url\]\[q\])/gi, '</span> писал\(а\)</span></td></tr></table><table class=comment-quote><tr><td>');
    answer.innerHTML = answer.innerHTML.replace(/\[q\]/gi, '<table><tr><td><span class=comment-quote-name>Цитата</span></td></tr></table><table class=comment-quote><tr><td>');
    answer.innerHTML = answer.innerHTML.replace(/\[\/q\]/gi, '</td></tr></table>');
    answer.innerHTML = answer.innerHTML.replace(/table><br>/gi, 'table>');
  }
}