function add_question(){
	var text = "";
	text += "<tr>	<td>";
	text += "<div>";
	text += "<table class='question'>";
	text += "<tr>";
	text += "<td><input type='button' value='up' onclick='moveUp(this)'></td>";
	text += "<td><input class='question_title' type='text' value='객관식 제목1'></td>";
	text += "<td>";
	text += "<select class='question_type' onchange='select_option(this)'>";
	text += "<option value='1' selected>객관식</option>";
	text += "<option value='2'>주관식</option>";
	text += "</select>";
	text += "</td>";
	text += "</tr>";
	text += "<tr class='change_option'>";
	text += "<td><input type='button' value='do' onclick='moveDown(this)'></td>";
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
	text += "</td></tr>";
	
	$(".survey_body").append(text);
}

function delete_question(that){
//	console.log($(that).parent().parent().parent().parent().parent().html());
	if($('.question').length < 2){
		alert('최소 한개 이상의 질문은 있어야 합니다. ');
	}else{
		$(that).parent().parent().parent().parent().parent().remove();
	}
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

function moveUp(el){
	var $tr = $(el).parent().parent().parent().parent().parent().parent().parent(); // 클릭한 버튼이 속한 tr 요소
//	var tr = $(el).parent().parent();
//	console.log(tr.html());
	$tr.prev().before($tr); // 현재 tr 의 이전 tr 앞에 선택한 tr 넣기
}

function moveDown(el){
	var $tr = $(el).parent().parent().parent().parent().parent().parent().parent(); // 클릭한 버튼이 속한 tr 요소
	$tr.next().after($tr); // 현재 tr 의 다음 tr 뒤에 선택한 tr 넣기
}

function saveSurvey(){
	var survey_object = new Object();
	
	var id = $("#title").val();
	var study_id = $("#title").val();
	var title = $("#title").val();
	var sub_title = $("#sub_title").val();
	
	survey_object.id 						= id;
	survey_object.study_id 		= study_id;
	survey_object.title 				= title;
	survey_object.sub_title 	= sub_title;
	
	$(".question").each(function(index){
		var question_title = $(this).find('.question_title').val();
		var question_type = $(this).find('.question_type').val();
		var option_arr = new Array();
		var option_text = $(this).find('.change_option input:text');

		$(option_text).each(function(seq){
			option_arr.push($(this).val());
		});
		
		console.log(question_title);
		console.log(question_type);
		console.log(option_arr);
	});
	
}











