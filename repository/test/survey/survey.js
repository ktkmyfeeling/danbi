function add_question(){
	var text = "";
	text += "<div>";
	text += "<table class='question'>";
	text += "<tr>";
	text += "<td><input type='button' value='up'></td>";
	text += "<td><input type='text' value='객관식 제목1'></td>";
	text += "<td>";
	text += "<select onchange='select_option(this)'>";
	text += "<option value='1' selected>객관식</option>";
	text += "<option value='2'>주관식</option>";
	text += "</select>";
	text += "</td>";
	text += "</tr>";
	text += "<tr class='change_option'>";
	text += "<td><input type='button' value='do'></td>";
	text += "<td colspan='2'>";
	text += "<table class='mutil_option'>";
	text += "<tr>";
	text += "<td><input type='text' value='객관식 옵션1'></td>";
	text += "<td></td>";
	text += "</tr>";
	text += "</table>";
	text += "<table><tr>";
	text += "<td><input type='button' value='옵션추가' onclick='add_option(this)'></td>";
	text += "<td></td>";
	text += "</tr></table>";
	text += "</td>";
	text += "</tr>";
	text += "<td></td>";
	text += "<td></td>";
	text += "<td><input type='button' value='질문삭제' onclick='delete_question(this)'></td>";
	text += "</tr>";
	text += "</table>";
	text += "</div>";
	
	$(".survey_body").append(text);
}

function delete_question(that){
//	console.log($(that).parent().parent().parent().parent().parent().html());
	$(that).parent().parent().parent().parent().parent().remove();
//	console.log($(that).parent().parent().parent().parent().parent().parent().html());
}

function select_option(that){
//	console.log($(that).val());
//	console.log($(that).parent().parent().html());
//	console.log($(that).parent().parent().parent().find('.change_option').html());
//	$(that).parent().parent().parent().find('.change_option').remove();
	var type = $(that).val();
	var text = "";
	
	if(type == 1){
//		text += "<tr class='change_option'>";
		text += "<td><input type='button' value='do'></td>";
		text += "<td colspan='2'>";
		text += "<table class='mutil_option'>";
		text += "<tr>";
		text += "<td><input type='text' value='객관식 옵션1'></td>";
		text += "<td></td>";
		text += "</tr>";
		text += "</table>";
		text += "<table><tr>";
		text += "<td><input type='button' value='옵션추가' onclick='add_option(this)'></td>";
		text += "<td></td>";
		text += "</tr></table>";
		text += "</td>";
//		text += "</tr>";
	}else if(type == 2){
//		text += "<tr class='change_option'>";
		text += "<td><input type='button' value='do'></td>";
		text += "<td>";
		text += "<input type='text' value='주관식 옵션1' readonly>";
		text += "</td>";
		text += "<td></td>";
//		text += "</tr>";
	}
	$(that).parent().parent().parent().find('.change_option').html(text);
}

function add_option(that){
//	console.log($(that).parent().parent().parent().parent().parent().html());
//	console.log($(that).parent().parent().parent().parent().parent().find('.mutil_option').html());
	var text = "";
	text += "<tr>";
	text += "<td><input type='text' value='객관식 옵션1'></td>";
	text += "<td><input type='button' value='삭제' onclick='delete_option(this)'></td>";
	text += "</tr>";
	
	$(that).parent().parent().parent().parent().parent().find('.mutil_option').append(text);
}

function delete_option(that){
	$(that).parent().parent().remove();
}








