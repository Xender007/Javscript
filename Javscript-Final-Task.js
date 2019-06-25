/*--------------global veriable----------------*/
//$(GetCurrentSettings).attr("id")
/*---------One click full content show-----------*/

	var count=0; /*-------------global veriable----------------*/
	var num=0;/*-------------global veriable----------------*/
function displayContent() {
	$("#blog").css({"display": "block"});
	$("#manage").css({"background-color": "#00AADC"});
	$("#home").css({"background-color": "#0085BE"});
	$("#right-nav").css({"visibility": "visible"});
if(count <3)
{

	$.getJSON("js/index.json",function(collectionArray){
	$.each(collectionArray,function(index,value){
        var html="<div class='media' id='blog1' data-field='private'>"+"<div class='media-main-body col-xs-12 col-sm-8 col-md-9'>"+
				"<div class='media-body'>"+
				"<h1 id='mt_"+num+"'>"+collectionArray[index].header+"</h1>"+
				"<span class='link'><p>"+collectionArray[index].link+"</p></span>"+
				"</div>"+
				"<div class='status-check'>"+
				"<p class='comment'>"+collectionArray[index].comments+"</p>"+ 
				"<p class='post'><span class='bullet-mark'>•</span> <span class='post-count'>"+collectionArray[index].posts+"</span></p>"+
				"<p class='follower'><span class='bullet-mark'>•</span> <span class='follower-count'>"+collectionArray[index].followers+"</span></p>"+ 
				"</div>"+
				"<div class='btn-tag'>"+
				"<button type='button' class='btn btn-info customize' id='click_customize_"+num+"' onclick='onCustomizeClick(this)'>"+collectionArray[index].button_customize+"</button>"+
				"<button type='button' class='btn active settings' id='click_settings_"+num+"' onclick='onSettingsClick(this)'>"+collectionArray[index].button_settings+"</button>"+
				"<button type='button' class='btn active upgrade' id='click_upgrade_"+num+"' onclick='onUpgradeClick(this)'>"+collectionArray[index].button_upgrades+"</button>"+
				"</div>"+
				"</div>"+
				"<div class='image col-xs-12 col-sm-4 col-md-3' id='image2'>"+
				"<img class='image-tag col-xs-12 col-sm-12 col-md-12' src="+collectionArray[index].image+"></img>"+
				"</div>"+
				"</div>";
    $('#blog').append(html);
		count++;
		num++;
    })
  })
}
else {
  alert("Already shown all contents !!");
}
}

/*---------------on settings Click----------------*/

function onCustomizeClick(getCurrentElement){
	var getId=$(getCurrentElement).attr("id");
	var splitId=getId.split("_");
		$("#click_customize_"+splitId[2]).css({"background-color": "#00AADC","border-color": "#E0E5E8", "color": "#ffffff"});
		$("#click_settings_"+splitId[2]).css({"background-color": "#F3F7F9","border-color": "#E0E5E8", "color": "#999999"});
		$("#click_upgrade_"+splitId[2]).css({"background-color": "#F3F7F9","border-color": "#E0E5E8", "color": "#999999"});

    
    
    var getHeaderId=$(getCurrentElement).attr("id");
	var headerId=getHeaderId.split("_");
	console.log(headerId);
	var getName=$(getCurrentElement).parent().siblings(".media-body").find("h1").text();


	if(getName!="KTLA 5" && headerId[2]=="0" ) {
		alert("This "+getName+" going to change .");
		$(getCurrentElement).parent().siblings(".media-body").find("h1").text("KTLA 5");
	}
	if(getName!="Audibles - SI.com" && headerId[2]=="1" ) {
		alert("This "+getName+" going to change .");
		$(getCurrentElement).parent().siblings(".media-body").find("h1").text("Audibles - SI.com");
	}
	if(getName!="ProBasketballTalk" && headerId[2]=="2" ) {
		alert("This "+getName+" going to change .");
		$(getCurrentElement).parent().siblings(".media-body").find("h1").text("ProBasketballTalk");
	}
}
/*----------------on settings Click-----------------*/
function onSettingsClick(GetCurrentSettings){
	$(".settingsPopup").remove();
	$(".blockScreen").remove();
	var getId=$(GetCurrentSettings).attr("id");
	var splitId=getId.split("_");
		$("#click_customize_"+splitId[2]).css({"background-color": "#F3F7F9","border-color": "#E0E5E8", "color": "#999999"});
		$("#click_settings_"+splitId[2]).css({"background-color": "#00AADC","border-color": "#E0E5E8", "color": "#ffffff"});
		$("#click_upgrade_"+splitId[2]).css({"background-color": "#F3F7F9","border-color": "#E0E5E8", "color": "#999999"});
	
	$("<div>",{"id":"block_"+getId,"class":"blockScreen"}).appendTo("body");
/*-----------Creating Settings popup dynamically and their children----------*/
		$("<div>",{"id":"settings_"+getId,"class":"settingsPopup"}).appendTo("body");
		$("#settings_"+getId).append("<div><img class='cross' onclick='onCrossClick()' src='logo/cross.jpg'/></div><div>Enter Value:</div>"
		+"<div><input type='text' class='input-text' id='input-value'/>"+
		"<input type='submit' class='submit-btn'  id='inputSetting_"+getId+"'/>"+
		"<input type='submit' class='clear-btn' onclick='onClearClick()' value='Clear'  id='inputSetting_"+getId+"'/></div>");
	
/*----------------input submit click--------------------*/
	$("#inputSetting_"+$(GetCurrentSettings).attr("id")).off("click").on("click",function(){
		inputUpdate($(this).siblings("input").val(),$(GetCurrentSettings));
	})
}
/*-----------------on settings submit Click----------------*/
function inputUpdate(getCurrentInputValue,GetPostElement){
	$("#settings_"+$(GetPostElement).attr("id"));
	if(getCurrentInputValue === '')
		{
			alert("No Input Given");
		}
		else if (getCurrentInputValue.indexOf(' ') == 0) {
			alert("No space should given before the text");
			$("#input-value").val('');
		}
	else
		{
			$(GetPostElement).parent().siblings(".media-body").find("h1").text(getCurrentInputValue);
			$(".settingsPopup").remove();
			$(".blockScreen").remove();
		}
}
/*------------------On Clear Button Click-------------------*/
function onClearClick() { 
	$("#input-value").val('');
}
/*------------------On Cross Click-----------------*/
function onCrossClick() {
	$(".settingsPopup").remove();
	$(".blockScreen").remove();
}
/*-----------------on Upgrade Click----------------*/
   function onUpgradeClick(getUpgradeSettings){

		var getId=$(getUpgradeSettings).attr("id");
		var splitId=getId.split("_");
		$("#click_customize_"+splitId[2]).css({"background-color": "#F3F7F9","border-color": "#E0E5E8", "color": "#999999"});
		$("#click_settings_"+splitId[2]).css({"background-color": "#F3F7F9","border-color": "#E0E5E8", "color": "#999999"});
		$("#click_upgrade_"+splitId[2]).css({"background-color": "#00AADC","border-color": "#E0E5E8", "color": "#ffffff"});
		var x=Math.floor((Math.random() * 9) + 1);
		var y=Math.floor((Math.random() * 1000) + 1000);
		var z=Math.floor((Math.random() * 500) + 100);
		$(getUpgradeSettings).parent().siblings(".status-check").find(".comment").text(x +" New Comments");
		$(getUpgradeSettings).parent().siblings(".status-check").children(".post").find(".post-count").text(y +" Posts");
		$(getUpgradeSettings).parent().siblings(".status-check").children(".follower").find(".follower-count").text(z +" Followers");

}
/*-----------------On Hover Click-----------------*/
$("#right-nav").hover(function(){
    $(this).css("border-bottom", "4px solid black");
    }, function(){
    $(this).css("border-bottom", "0px solid black");
  });
/*-----------------on Private Click----------------*/
	function onClickPrivate(){
		$("#all").css({"border-bottom": "0px solid black", "color": "#44A5CF"});
		$("#public").css({"border-bottom": "0px solid black", "color": "#44A5CF"});
		$("#private").css({"border-bottom": "4px solid black", "color": "#000000"});
	}
/*-----------------on Public Click----------------*/
	function onClickPublic(){
		$("#all").css({"border-bottom": "0px" , "color": "#44A5CF"});
		$("#public").css({"border-bottom": "4px solid black", "color": "#000000"});
		$("#private").css({"border-bottom": "0px", "color": "#44A5CF"});
	}
/*-----------------on All Click----------------*/
	function onClickAll(){
		$("#all").css({"border-bottom": "4px solid black", "color": "#000000"});
		$("#public").css({"border-bottom": "0px", "color": "#44A5CF"});
		$("#private").css({"border-bottom": "0px", "color": "#44A5CF"});
	}
/*-----------------------------------------------------------------End of The Code---------------------------------------------------------*/