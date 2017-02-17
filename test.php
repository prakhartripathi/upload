<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
	function callpro(){
	var node = document.createElement('LI');
	node.appendChild(document.createTextNode('zoop'));
	document.getElementById('pro').appendChild(node);
}
</script>
</head>
<body>
		<ul id="pro">
			<li>boom</li>
			<li>soom</li>
		</ul>
		<button onclick="callpro();">soop it
		</button>
</body>
</html>
