var systemObj={	"auto_next" : false,	"u_progress" : [0],	"cpage_check": false,};var courseObj = {	"course_num":174,	"week_num": "1",	"week_course_num": "1",	"course_title": "지역사회복지론",	"course_name": "오리엔테이션 / 지역사회와 지역사회복지의 개념",	"title_url": "../../controller_ui/title.htm",	"control_url": "../../controller_ui/controller.htm",	"menu_url": "../../controller_ui/vertical_menu.htm",	"map_url": "../../controller_ui/map.htm",	"menu": [{		"main_menu": "들어가기",		"sub_menu": ["교수님소개^2", "사전학습^3", "학습목표^4"]	}, {		"main_menu": "학습하기",		"sub_menu": ["학습내용1^5", "학습내용2^6", "학습내용3^7"]	}, {		"main_menu": "정리하기",		"sub_menu": ["OX Quiz^8", "학습정리^9"]	}, {		"main_menu": "마무리하기",		"sub_menu": ["생각나누기^10"]	}],	"href": [		"changePage", //changePage/loadPage = 페이지 링크시 로드가 아닌 페이지 직접호출 페이지 변화 없이 이동시 		{			"url": "../../mobile_page/us_c_intro.htm",			"media": "../../../2019_vod/174/04_mp4/intro.mp4",			"meta": [1120, 560, 0, 0],			"paser": "introP()"		}, //		{			"url": "../../mobile_page/us_c_orientation.htm",			"media": "../../../2019_vod/174/04_mp4/prof_introduce.mp4",			"meta": [790, 440, 120, 150],			"paser": "orientationP()"		},		{			"url": "../../mobile_page/us_c_beforelearning_D.htm",			"media": "../../../2019_vod/mp3/narr_woman_beforelearning.mp3",			"meta": [0, 0, 0, 0],			"paser": "beforelearningP(4)"		},		{			"url": "../../mobile_page/us_c_goal.htm",			"media": "../../../2019_vod/mp3/narr_woman_goal.mp3",			"meta": [0, 0, 0, 0],			"paser": "goalP()"		},		{			"url": "../../mobile_page/us_c_mainlearning.htm",			"meta": [790, 440, 120, 150],			"paser": "mainlearningP()"		},			{			"url": "../../mobile_page/us_c_quiz_02.htm",			"media": "../../../2019_vod/mp3/narr_woman_quiz_02.mp3",			"meta": [0, 0, 0, 0],			"paser": "qu_02P()"		},		{			"url": "../../mobile_page/us_c_reduce.htm",			"meta": [790, 440, 120, 143],			"paser": "reduceP()"		},		{			"url": "../../mobile_page/us_c_opinion.htm",			"media": "../../../2019_vod/mp3//narr_woman_opinion.mp3",			"meta": [0, 0, 0, 0],			"paser": "opinionP()"		},						{			"url": "../../mobile_page/us_c_outro.htm",			"media": "../../../2019_vod/174/04_mp4/outro.mp4",			"meta": [1120, 560, 0, 0],			"paser": "outroP()"		}	],	"intro_data": [{		"att_id": "intro_G",		"type": "div",		"data": "",		"sync": 12,		"obj_ea": null	}],	"beforelearning_data": [{		"att_id": "bl_D_img_01",		"type": "src",		"data": "../common_img/beforelearning/common_bl_img_02.png",		"sync": 1,		"obj_ea": null	}, {		"att_id": "bl_D_text_01",		"type": "text",		"data": "지역사회복지는 어떤 개념일까요?",		"sync": 1,		"obj_ea": null	}],	"goal_data": [{		"att_id": "lg_text_01",		"type": "text",		"data": "1. 지역사회복지론 과목의 전반적인 교육내용을 통해 자신의 목표를 설명할 수 있다.",		"sync": 1,		"obj_ea": null	}, {		"att_id": "lg_text_02",		"type": "text",		"data": "2. 지역사회 및 지역사회복지에 대한 개념을 설명할 수 있다.",		"sync": 1,		"obj_ea": null	}, {		"att_id": "lg_text_03",		"type": "text",		"data": "3. 지역사회복지와 관련된 유사개념들을 구분할 수 있다.",		"sync": 1,		"obj_ea": null	}, {		"att_id": "lc_text_01",		"type": "text",		"data": "1. 오리엔테이션",		"sync": 2,		"obj_ea": null	}, {		"att_id": "lc_text_02",		"type": "text",		"data": "2. 지역사회의 개념",		"sync": 2,		"obj_ea": null	}, {		"att_id": "lc_text_03",		"type": "text",		"data": "3. 지역사회복지의 개념",		"sync": 2,		"obj_ea": null	}],		"outro_data": [{		"att_id": "outro_text01",		"type": "text",		"data": "이번 시간에는",		"sync": 2,		"sync_end": 6,		"obj_ea": null	}, {		"att_id": "outro_text01_01",		"type": "text",		"data": "1주 1차 오리엔테이션 / 지역사회와 지역사회복지의 개념",		"sync": 3,		"sync_end": 6,		"obj_ea": null	}, {		"att_id": "outro_text02",		"type": "text",		"data": "다음 시간에는",		"sync": 8,		"obj_ea": null	}, {		"att_id": "outro_text02_01",		"type": "text",		"data": "1주 2차 지역사회복지실천의 이념, 가치, 기능, 환경변화",		"sync": 9,		"obj_ea": null	}],	};var quiz_Json = {	"quiz_item_02": [{}, {		"quiz_title": "피터는 지역사회의 개념을 지리적 지역사회와 기능적 지역사회로 나누었다.",		"example_01": "x",		"example_02": "o",		"correct_num": 2,		"explain_data": "로스는 지역사회의 개념을 지리적 지역사회와 기능적 지역사회로 나누었다.",		"user_select": null	}, {		"quiz_title": "지역사회를 위한 사회복지는 지역사회를 하나의 클라이언트 체계로 간주하고 클라이언트로서의 지역사회 문제를 해결하고 욕구를 충족시킬 수 있는 사회복지의 목표를 강조한다.",		"example_01": "x",		"example_02": "o",		"correct_num": 1,		"explain_data": "지역사회를 위한 사회복지의 정의이다. 예로는 지역사회 조직화, 사회계획, 사회행동, 역량강화 등이 있다.",		"user_select": null	}],};