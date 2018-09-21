var media_href = "04_mp4/intro.mp4";var isCtrl_drag = false;var media_conten, fileURL;var posToSec = 0;var posToVol = 0;//========================//function mediaSet() {    media_content = document.getElementById("media_active");    //media_content = $("#media_active");    $("#file_url").val(media_href);    fileURL = $("#file_url").val();    mediaLoad(current_page);}function mediaLoad(href_value) {    var page_info = courseObj.href[href_value];    var temp_meta    media_content.src = page_info.media;    if (media_content.canPlayType) {        media_content.load();        media_content.addEventListener('loadedmetadata', function() {            console.log(page_info.meta[0]);            if (page_info.meta[0] != undefined) {                temp_meta = page_info.meta[0];            }          //  this.setAttribute("width", temp_meta);			 this.setAttribute("width", "100%");            $("#media_active").css({                //"top": page_info.meta[2] + "px",                //"left": page_info.meta[3] + "px"            })            addSliderFn();        }, false);        media_content.ontimeupdate = function() {            mediaSyncProc();        };    }}function addSliderFn() {    slider = $(".progress-bar");    vslider = $(".volume-bar");    slider.attr({        "oninput": "sliderFn(0)",        "onchange": "sliderFn(0)",        "onmouseDown": "sliderFn(1)",        "onmouseup": "sliderFn(2)",        "title": "콘텐츠콘트롤러 입니다."    });    vslider.attr({        "onchange": "vsliderFn()",        "oninput": "vsliderFn()",        "title": "볼륨콘트롤러 입니다."    });}function sliderFn(condition_str) {    if (condition_str === 0) {        var slider_width = slider.css("width");        var slider_width_num = Number(slider_width.split("px")[0]);        posToSec = media_content.duration * (slider.val() / 1000);    }    media_content.paused;    setTime(posToSec);    switch (condition_str) {        case 1: //down            isCtrl_drag = true;            mediaSyncProc();            break;        case 2: //up            endCheck();            var cur_sec = Math.floor(media_content.currentTime);            var tot_sec = Math.floor(media_content.duration);            console.log("slide up !!" + cur_sec + "   == .  " + tot_sec)            if (media_content.paused && cur_sec != tot_sec) {                media_content.play();            }            isCtrl_drag = false;            break;        default:    }}function vsliderFn() {    posToVol = vslider.val() / 100;    if (posToVol <= 0.01) {        media_content.volume = 0;    } else {        media_content.volume = posToVol;    }}function getMedia() {    var fileURL = $("#file_url").val();    if (fileURL != "") {        media_content.src = fileURL;        media_content.load(); // if HTML source element is used    } else {        errMessage("Enter a valid video URL"); // fail silently    }}function mediaPlay() {    media_content.play();}function mediaPause() {    media_content.pause();}function mediaStop() {    media_content.pause();    setTime(0);}function setTime(tValue) {    try {        if (tValue == 0) {            document.getElementById("media_active").currentTime = tValue;        } else {            document.getElementById("media_active").currentTime = tValue;        }    } catch (err) {        errMessage("Video content might not be loaded");    }}//===================리플레이 스크립트======================//function mediaReplay() {    var vid = document.getElementById("media_active");    vid.autoplay = true;    vid.load();    var i;    for (i in syncObj) {        $("#" + syncObj[i].att_id).hide();    }}//==================================////===================배속 스크립트======================//function mediaSpeed(param_value) {    var vid = document.getElementById("media_active");    vid.playbackRate = param_value;}//==================================//function mediaSyncProc() {    var cur_sec = Math.floor(media_content.currentTime);    var tot_sec = Math.floor(media_content.duration);    //  console.info(cur_sec + "  ==  " + (Math.floor(tot_sec / 2) + break_time) + "   break_page : " + break_page + "   current_page : " + current_page);    if (cur_sec == Math.floor(tot_sec / 2) + break_time && break_page == current_page) {        break_page = 0;        breakOpen();    }    $(".current-time").html(sectotime(cur_sec));    $(".duration-time").html(sectotime(tot_sec));    var i, j, k, x = "";    //if (cur_sec == tot_sec - 1) {    endCheck();    //}    if (isCtrl_drag) {        console.log(isCtrl_drag);    } else {        $(".progress-bar").val((media_content.currentTime / media_content.duration) * 1000);        //$(".progress-bar").val(0);    }    for (i in syncObj) {        if (syncObj[i].sync <= media_content.currentTime && $("#" + syncObj[i].att_id).css("display") == "none" && isCtrl_drag == false && (syncObj[i].sync_end > media_content.currentTime || syncObj[i].sync_end == undefined)) {            $("#" + syncObj[i].att_id).fadeIn();        } else if (syncObj[i].sync_end <= media_content.currentTime) {            $("#" + syncObj[i].att_id).fadeOut();        } else if (isCtrl_drag) {            $("#" + syncObj[i].att_id).hide();        }    }}var setControlIs = false;function setBtnProcess() {    if (setControlIs) {        setControlIs = false;        $(".set-control-layer").fadeIn();        $("#set_btn_on").hide();        $("#set_btn_off").show();    } else {        setControlIs = true;        $(".set-control-layer").fadeOut();        $("#set_btn_on").show();        $("#set_btn_off").hide();    }}function s_pageReturn() {    var s_page = 0;    var i;    var lec_num = Number(queryString("lec_num"));    for (i = 0; i < lec_num; i++) {        s_page = s_page + course_pageInfo[i];    }    //alert("lec_num  : " + lec_num);    return s_page;}function endCheck() {    var cur_sec = Math.floor(media_content.currentTime);    var tot_sec = Math.floor(media_content.duration);    //console.log("isCtrl_drag" + isCtrl_drag + "Page end!!" + cur_sec + " == " + tot_sec + "media_content.paused: " + media_content.paused + " setControlIs " + setControlIs);    if (media_content.paused) {        $("#media_pause_btn").hide();        $("#media_play_btn").show();    } else {        $("#media_pause_btn").show();        $("#media_play_btn").hide();    }    if ($("#next_msg_layer").css("display") == "none" && cur_sec >= tot_sec - 1 && (systemObj.cpage_check == false || current_page < lastPage())) {        $("#next_msg_layer").slideDown();        systemObj.u_progress[current_page - 1] = 1;        progressStrObj[current_page - 1] = "true";        var set_page = s_pageReturn() + current_page;        // alert(return_page)        window.parent.postMessage({ page_n_: "" + set_page }, '*');        console.info(progressStrObj);        checkProgress(); //============+============+============+============+============+============+============+============+============+============+============+============+============+============+    }}function syncEvent() {    var pageObj = courseObj.page_data["page_item_" + itostr(1)];}