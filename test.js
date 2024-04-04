$('button').on('click', function() {
    var name = $(this).data('name')
  
  
    $('#column-right').empty()
  
    if (name === 'tom-brady-1') {
  
      $('#column-right').css('background-image', 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjhra2RyemwzOTEzbzJid3V6enh1eXlrMjdoaTQ0ejVkemFsdnZxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q30Ccpo7ANqWo1O/giphy.gif")')
    }
  
    if (name === 'tom-brady-2') {
      $('#column-right').css('background-image', 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGE3bW45YjVtZDgzYTR6MjI5anZ3NHV0ZTdjbTNucmcwZnE3NDk3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26gR0hw5iIHUClqcU/giphy.gif")');
    }
  
    if (name === 'tom-brady-3') {
      $('#column-right').css('background-image', 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXFlY3k4YTJwaHkzbXFpaHdmdWFtNGVraWp4bm42OXh0Y2dkZHo3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/64jVVzB87tzG/giphy.gif")');
    }
  
  })
  