angular.module('angular-fileUpload',["ngFileUpload"]).component('ngfUpload', {
	"templateUrl": 'ngf-upload/template.html',
	"controllerAs": "ngfUploadCtrl",
	"controller": ngfUploadController,
	"bindings": {
		"uploadFiles": "&",
		"draDrop": "<"
	},

	"transclude": {
		"uploadTrigger": "uploadTrigger"
	}
});

function ngfUploadController($scope) {
	var ngfUploadCtrl = this;

	ngfUploadCtrl.upload = function(files) {
		console.log("Inside uplaod of file-upload");
		if(files && files.length) {
			var file;
			var i = 0;
			for(; i<files.length; i++) {
				file = files[i];
				ngfUploadCtrl.uploadFiles({
					"file": "file"
				}); 
			}
		}
	}
}

