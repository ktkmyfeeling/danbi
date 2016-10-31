<html>

<head>
<?
$study_id = date("YmdHis",time());
?>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type='text/javascript' src='survey.js'></script>

<style type='text/css'>
div{
	margin: 0px auto;
}
</style>

</head>


<body style='margin: 0px;'>

<div style='width: 500px;'>
	개설자 : <input id="id" type="text" value="test">
	스터디 id : <input id="study_id" type="text" value="<?=$study_id ?>">
	<!-- 제목 start -->
	<div>
		<table style='width: 100%; height: 100px;'>
			<tr>
				<td><input id="title" type='text' value='제목1'></td>
			</tr>
			<tr>
				<td><input id="sub_title" type='text' value='서브 제목1'></td>
			</tr>
		</table>
	</div>
	<!-- 제목 end -->
	질문 시작
	<div>
		<table class='survey_body'>
			<tr>
				<td>
					<div>
						<table class='question'>
							<tr>
								<td><input type='button' value='up' onclick='moveUp(this)'></td>
								<td><input class='question_title' type='text' value='객관식 제목1'></td>
								<td>
									<select class='question_type' onchange='select_option(this)'>
										<option value="1" selected>객관식</option>
										<option value="2">주관식</option>
									</select>
								</td>
							</tr>
							<tr class='change_option'>
								<td><input type='button' value='do' onclick='moveDown(this)'></td>
								<td colspan='2'>
									<table class='mutil_option'>
										<tr>
											<td><input type='text' value='객관식 옵션1'></td>
											<td></td>
										</tr>
									</table>
									<table>
										<tr>
											<td><input type='button' value='옵션추가' onclick='add_option(this)'></td>
											<td></td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td><input type='button' value='질문삭제' onclick='delete_question(this)'></td>
							</tr>
						</table>
					</div>
				</td>
			</tr>
		</table>
	</div>
	
	<input type='button' value='질문 추가' onclick='add_question()'>
	
</div>
<input type="button" value="asdf" onclick="saveSurvey()">
</body>



</html>