define([], function(){
	var config = {};
	config.apiKey = "AIzaSyBB35jT9xNiPClIOpf2Lo40kqI447b1Jz4";
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '491488844457-q539oarktu2h72tam7gnovdp49tq838m.apps.googleusercontent.com';
 
	 _.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};

	return config;
});

