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
/*大轮播*/
~function(){
    var banner=document.getElementById('banner');
    var inner=document.getElementById('inner');
    var lis=inner.getElementsByTagName('li');

}();
/*视频轮播*/
~function(){
    var data=ajaxSend("get","imgData.json");
    var listTop=document.getElementById('listTop');
    var innerList=document.getElementById("innerList");
    var lists=innerList.getElementsByTagName("li");
    //轮播按钮
    var listBtn=document.getElementById("listBtn");
    var btnLists=listBtn.getElementsByTagName("li");
    console.log(lists);
    var str=``;
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
    innerList.innerHTML=str;
    innerList.style.width=data.length*261+"px";
}();

