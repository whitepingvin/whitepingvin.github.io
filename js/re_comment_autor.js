   // замена в комментарии автора - Анонимно, на своё "Имя"
   if(document.getElementsByClassName == undefined) {
      var authors = $('#comments').find('.user')
      var dates = $('#comments').find('.datetime')
    } else {
      var authors = document.getElementById('comments').getElementsByClassName('user')
      var dates = document.getElementById('comments').getElementsByClassName('datetime')
    }
    for (key in authors) {
      var author = authors[key]
      if (author.innerHTML) {
        author.innerHTML = author.innerHTML.replace(/Анонимно/g, 'Милчеловек') + ' пишет... '
      }
    }
    for (key in dates) {
      var date = dates[key]
      if (date.innerHTML) {
        date.innerHTML += "&nbsp;"
      }
    }
