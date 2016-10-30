<html>

<head>

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type='text/javascript' src='survey.js'></script>

<style type='text/css'>
div{
	margin: 0px auto;
}
</style>

</head>


<body style='margin: 0px;'>

<div style='width: 1100px;'>
	<!-- 제목 start -->
	<div>
		<table style='width: 100%; height: 100px;'>
			<tr>
				<td><input type='text' value='제목1'></td>
			</tr>
			<tr>
				<td><input type='text' value='서브 제목1'></td>
			</tr>
		</table>
	</div>
	<!-- 제목 end -->
	질문 시작
	<div class='survey_body'>
		<div>
			<table class='question'>
				<tr>
					<td><input type='button' value='up'></td>
					<td><input type='text' value='객관식 제목1'></td>
					<td>
						<select onchange='select_option(this)'>
							<option value="1" selected>객관식</option>
							<option value="2">주관식</option>
						</select>
					</td>
				</tr>
				<tr class='change_option'>
					<td><input type='button' value='do'></td>
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
			</table>
		</div>
	</div>
	
	<input type='button' value='질문 추가' onclick='add_question()'>
	
	
	<table>
		<tr>
			<td><input type='button' value='up'></td>
			<td><input type='text' value='주관식 제목1'></td>
			<td>
				<select>
					<option selected>객관식</option>
					<option>주관식</option>
				</select>
			</td>
		</tr>
		<tr>
			<td><input type='button' value='do'></td>
			<td>
				<input type='text' value='주관식 옵션1' readonly>
			</td>
			<td></td>
		</tr>
	</table>
</div>

</body>



</html>