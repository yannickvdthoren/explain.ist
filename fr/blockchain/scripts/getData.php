<?php
function file_get_contents_curl($url){
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

	$data = curl_exec($ch);
	curl_close($ch);

	return $data;
}
$json = file_get_contents('../data.json');
$json = json_decode($json, true);
$results = array();
foreach ($json as $item){
	$source = file_get_contents_curl($item[url]);
	//parsing begins here:
	$doc = new DOMDocument();
	$doc->validateOnParse = true;
	@$doc->loadHTML($source);
	$nodes = $doc->getElementsByTagName('title');

	//get and display what you need:
	$metas = $doc->getElementsByTagName('meta');

	for ($i = 0; $i < $metas->length; $i++)
	{
		$meta = $metas->item($i);
		if($meta->getAttribute('property') == 'og:url')
		$url = $meta->getAttribute('content');
		if($meta->getAttribute('name') == 'twitter:app:name')
		$site_name = $meta->getAttribute('value');
		if($meta->getAttribute('property') == 'og:image')
		$image = $meta->getAttribute('content');
		if($meta->getAttribute('property') == 'og:title')
		$title = $meta->getAttribute('content');
		if($meta->getAttribute('name') == 'description')
		$description = $meta->getAttribute('content');
	}

	//get the url of the main page of the source website
	$site_url = parse_url($url, PHP_URL_HOST);
	//get the url of the website without the www.
	$parse = parse_url($url, PHP_URL_HOST);
	preg_match('/[^.]+\.[^.]+$/', $parse, $matches);

	//get all the data in an array, push it in array results
	$dataSources = array('ligne' => ' ___________ ', 'site' => $matches[0],'site_url' => $site_url, 'title' => $title, 'url' => $url, 'description' => $description, 'image_url' => $image);
	array_push($results, $dataSources);
}
//send data to JS
echo json_encode($results);
?>