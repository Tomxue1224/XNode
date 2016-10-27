/*
* @Author: jihanting
* @Date:   2016-10-26 11:18:17
* @Last Modified by:   jihanting
* @Last Modified time: 2016-10-26 19:50:53
*/

$(document).ready(init());

function init(){
	var $navItem;
	var dataList=[{
	"title":"表格一",
	"x":['姓名','周一','周二','周三','周四','周五','周六','周日'],
	"y":['张三','李四','王二','元一'],
	"data":[[1,2,3,4,5,6,7],[2,3,4,5,6,7,8],[3,4,5,6,7,8,9],[4,5,6,7,8,9,0]]
},{
	"title":"表格二",
	"x":['姓名','周一','周二','周三','周四','周五','周六','周日'],
	"y":['王二','张三','李四','元一'],
	"data":[[1,2,3,4,5,6,7],[2,3,4,5,6,7,8],[3,4,5,6,7,8,9],[4,5,6,7,8,9,0]]
},{
	"title":"表格三",
	"x":['姓名','周一','周二','周三','周四','周五','周六','周日'],
	"y":['张三','李四','王二','元一'],
	"data":[[1,2,3,4,5,6,7],[2,3,4,5,6,7,8],[3,4,5,6,7,8,9],[4,5,6,7,8,9,0]]
}];
	for (var i = 0; i < dataList.length; i++) {
		var str="<li class=\"tab\" target=\'#table"+i+"\'>"+dataList[i].title+"</li>";
		var str1="<li class=\"content\" id=\'table"+i+"\' style=\"display:none;\"></li>";
		$(".nav").append(str);
		$(".box").append(str1);
	}
	var container=$(".content");
	for (var i = 0; i < container.length; i++) {
		var _div=container[i];
		showTable(_div,dataList[i]);
	}
	$navItem=$(".nav").find('.tab');
	activeItem($navItem[0]);
	$(".tab").click(function(event) {
		/* Act on the event */
		activeItem(this);
	});
}

function activeItem(item){
	var $item = $(item);
    var $target;
    var $curItem;

    if($item.hasClass('active')) {
        return;
    }
    $curItem = $(".nav").find('.active');
    $curItem.removeClass('active');
    $item.addClass('active');
    $target = $($item.attr('target'));
    $curTarget = $($curItem.attr('target'));

    $target.css('display', 'block');
    $curTarget.css('display', 'none');
}
function showTable(container,dataset){
	var x=dataset.x,y=dataset.y,data=dataset.data,title=dataset.title;
	var _table=document.createElement("table");
	var _title=document.createElement("caption");
	$(_title).text(title);
	_table.appendChild(_title);
	var _tr=document.createElement("tr");
	for(var i=0;i<x.length;i++){
		var _th=document.createElement("th");
		$(_th).text(x[i]);
		_tr.appendChild(_th);
	}
	_table.appendChild(_tr);
	for(var j=0;j<y.length;j++){
		var _tr1 = document.createElement("tr");
		var _td=document.createElement("td");
		$(_td).text(y[j]);
		_tr1.appendChild(_td);
		for(var k=0;k<data[j].length;k++){
			var _td1=document.createElement("td");
			$(_td1).text(data[j][k]);
			_tr1.appendChild(_td1);
		}
		_table.appendChild(_tr1);
	}

	$(container).append(_table);
}

function getData(){
	return $.ajax({url:"/data/getData",async:false});
}