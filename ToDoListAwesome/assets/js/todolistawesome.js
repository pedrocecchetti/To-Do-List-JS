$("ul").on("click","li", doneclass);

$('ul').on("click","li span",deletaritem);

$('ul').on("hover","span",show);

$("input[type='text'").on('keypress',enterPress);


function deletaritem(event){
	$(this).parent().fadeOut(265,function(){
		$(this).remove();	
	})
	event.stopPropagation();
}

function enterPress(event){
	if(event.which === 13 ){
		var toDoText = $(this).val();
		var htmlToDoText = "<li><span class='delete'><i class='far fa-trash-alt'></i></span>" + toDoText + "</li>" 
		$('ul').append(htmlToDoText);
		$(this).val("");
	}
}


function doneclass(){
	$(this).toggleClass('done');
}


function show(){

}