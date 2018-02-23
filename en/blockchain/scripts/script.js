var activeURL = window.location.href;
var oReq = new XMLHttpRequest(); //New request object
oReq.onload = function() {
	var dataSources = this.responseText;
	var data = JSON.parse(dataSources);
	// 1st post
	document.getElementById('first-article-img').style.background = "url(" + data[0].image_url + ") center center";
	document.getElementById('first-article-img').style.backgroundSize = "cover";
	document.getElementById('first-article-title').innerHTML = data[0].title;
	document.getElementById('first-article-title').href = data[0].url;
	document.getElementById('first-article-site').innerHTML = data[0].site;
	document.getElementById('first-article-site').href = "http://" + data[0].site_url;
	document.getElementById('first-article-description').innerHTML = data[0].description;
	// 2nd post
	document.getElementById('second-article-img').style.background = "url(" + data[1].image_url + ") center center";
	document.getElementById('second-article-img').style.backgroundSize = "cover";
	document.getElementById('second-article-title').innerHTML = data[1].title;
	document.getElementById('second-article-title').href = data[1].url;
	document.getElementById('second-article-site').innerHTML = data[1].site;
	document.getElementById('second-article-site').href = "http://" + data[1].site_url;
	// 3rd post
	document.getElementById('third-article-img').style.background = "url(" + data[2].image_url + ") center center";
	document.getElementById('third-article-img').style.backgroundSize = "cover";
	document.getElementById('third-article-title').innerHTML = data[2].title;
	document.getElementById('third-article-title').href = data[2].url;
	document.getElementById('third-article-site').innerHTML = data[2].site;
	document.getElementById('third-article-site').href = "http://" + data[2].site_url;
	// 4th post
	document.getElementById('fourth-article-img').style.background = "url(" + data[3].image_url + ") center center";
	document.getElementById('fourth-article-img').style.backgroundSize = "cover";
	document.getElementById('fourth-article-title').innerHTML = data[3].title;
	document.getElementById('fourth-article-title').href = data[3].url;
	document.getElementById('fourth-article-site').innerHTML = data[3].site;
	document.getElementById('fourth-article-site').href = "http://" + data[3].site_url;
	document.getElementById('fourth-article-description').innerHTML = data[3].description;
	// 5th post
	document.getElementById('fifth-article-img').style.background = "url(" + data[4].image_url + ") center center";
	document.getElementById('fifth-article-img').style.backgroundSize = "cover";
	document.getElementById('fifth-article-title').innerHTML = data[4].title;
	document.getElementById('fifth-article-title').href = data[4].url;
	document.getElementById('fifth-article-site').innerHTML = data[4].site;
	document.getElementById('fifth-article-site').href = "http://" + data[4].site_url;
	// 6th post
	document.getElementById('sixth-article-img').style.background = "url(" + data[5].image_url + ") center center";
	document.getElementById('sixth-article-img').style.backgroundSize = "cover";
	document.getElementById('sixth-article-title').innerHTML = data[5].title;
	document.getElementById('sixth-article-title').href = data[5].url;
	document.getElementById('sixth-article-site').innerHTML = data[5].site;
	document.getElementById('sixth-article-site').href = "http://" + data[5].site_url;
	// 7th post
	document.getElementById('seventh-article-img').style.background = "url(" + data[6].image_url + ") center center";
	document.getElementById('seventh-article-img').style.backgroundSize = "cover";
	document.getElementById('seventh-article-title').innerHTML = data[6].title;
	document.getElementById('seventh-article-title').href = data[6].url;
	document.getElementById('seventh-article-site').innerHTML = data[6].site;
	document.getElementById('seventh-article-site').href = "http://" + data[6].site_url;
	document.getElementById('seventh-article-description').innerHTML = data[6].description;
	// 8th post
	document.getElementById('eighth-article-img').style.background = "url(" + data[7].image_url + ") center center";
	document.getElementById('eighth-article-img').style.backgroundSize = "cover";
	document.getElementById('eighth-article-title').innerHTML = data[7].title;
	document.getElementById('eighth-article-title').href = data[7].url;
	document.getElementById('eighth-article-site').innerHTML = data[7].site;
	document.getElementById('eighth-article-site').href = "http://" + data[7].site_url;
	// 9th post
	document.getElementById('ninth-article-img').style.background = "url(" + data[8].image_url + ") center center";
	document.getElementById('ninth-article-img').style.backgroundSize = "cover";
	document.getElementById('ninth-article-title').innerHTML = data[8].title;
	document.getElementById('ninth-article-title').href = data[8].url;
	document.getElementById('ninth-article-site').innerHTML = data[8].site;
	document.getElementById('ninth-article-site').href = "http://" + data[8].site_url;
};
oReq.open("post", "./scripts/getData.php", true);
oReq.send();