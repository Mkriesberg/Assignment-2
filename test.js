$('button').on('click', function () {
	var name = $(this).data('name')

		
		$('#column-right').empty()
        if (name === 'tom-brady-1') {
        
            $('#column-right').css('background-image', 
            'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjhra2RyemwzOTEzbzJid3V6enh1eXlrMjdoaTQ0ejVkemFsdnZxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q30Ccpo7ANqWo1O/giphy.gif")')}
        })