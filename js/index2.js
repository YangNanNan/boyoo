/**
 *
 * @param {String}type 数据请求类型 get还是post
 * @param {String}url  数据请求地址
 */
function ajaxSend(type,url){
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            data = utils.jsonParse(xhr.responseText);
        }
    };
    xhr.send(null);
    return data;
}
~function(){
    var data=ajaxSend("get","imgData.json");
    var allData=document.getElementById('allData');

    var str=``;
    str+=`<div class="listTop" id="listTop">`;
    str+=`<ul id="innerList">`;
    for(var i=0;i<data.length;i++){
        str+=`<li>
                <a href="###">
                    <img src=${data[i].img} alt="">
                    <h5>斗地主</h5>
                    <p><span>点击播放</span><b></b></p>
                </a>
            </li>`
    }
    str+=`<div class="clear"></div>`;
    str+=`</ul>`;
    str+=`</div>`;
    //allData.innerHTML=str;
    //获取元素
    var listTop=document.getElementById('listTop');
    var innerList=document.getElementById("innerList");
    var lists=innerList.getElementsByTagName("li");
    console.log(lists);
    innerList.style.width=data.length*261+"px";
    var str2='';
    str2+=`<ul class="listBtn" id="listBtn">`;
    for(var i=0;i<data.length/4;i++){
        str2+=`<li></li>`
    }
    str2+=`</ul>`;
    //listBtn.innerHTML=str2;
    //轮播按钮
    var listBtn=document.getElementById("listBtn");
    var btnLists=listBtn.getElementsByTagName("li");
    allData.innerHTML=str+=str2;
}();

