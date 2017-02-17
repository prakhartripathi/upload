<?php
	if(!empty($_FILES['file'])){
		foreach($_FILES['file']['name'] as $key => $name){
			if($_FILES['file']['error'][$key] == 0 && move_uploaded_file($_FILES['file']['tmp_name'][$key],'upload/'.$name)){
				$uploaded[] = $name;
			}
		}
		if(!empty($_POST['ajax'])){
			die(json_encode($uploaded));
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="up.js"></script>
	<style type="text/css">
		#upload_progress{
			display: none;
			text-align: center;
			line-height: 15px;
			color:white;
			
		}
		#upload_bar{
			display: none;
			position: relative;
			width:30%;
			height: 15px;
			background-color: #cedbd9;
		}
		#my_bar{
			display: none;
			position: absolute;
			width: 0%;
			height: 100%;
			background-color: #3cd10e;
		}
	</style>
</head>
<body>
	<div id="uploaded">
		<?php
			if(@$uploaded!=0 ){
				foreach($uploaded as $name){
					echo '<div><a href="upload/',$name,'">',$name,'</a></div>';
				}
			}
		?>
	</div>
	
	<div id="upload_bar">
		<div id="my_bar">
		<div id="upload_progress"></div>
		</div>
	</div>
	<div>
		<form action="" method="post" enctype="multipart/form-data">
			<input type="file" id="prakhar" name="file[]" multiple="multple"/>
			<input type="submit" id="submit" value ="upload"/>
		</form>
	</div>
</body>
</html>