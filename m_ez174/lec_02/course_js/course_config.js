var systemObj={	"auto_next" : false,	"u_progress" : [0],	"cpage_check": false,};	var courseObj = {	"course_num":174,		"week_num": "1",	"week_course_num": "2",	"course_title": "지역사회복지론",	"course_name": "지역사회복지실천의 이념, 가치, 기능, 환경변화",	"title_url": "../common_ui/title.htm",	"control_url": "../../controller_ui/controller.htm",	"menu_url": "../common_ui/vertical_menu.htm",	"map_url": "../common_ui/map.htm",	"menu": [{		"main_menu": "들어가기",		"sub_menu": ["사전학습^2", "학습목표^3"]	}, {		"main_menu": "학습하기",		"sub_menu": ["학습내용1^4", "학습내용2^5", "학습내용3^6", "학습내용4^7"]	}, {		"main_menu": "정리하기",		"sub_menu": ["OX Quiz^8", "학습정리^9"]	}, {		"main_menu": "마무리하기",		"sub_menu": ["생각나누기^10", "형성평가^11"]	}],	"href": [		"changePage", //changePage/loadPage = 페이지 링크시 로드가 아닌 페이지 직접호출 페이지 변화 없이 이동시 		{			"url": "../contents_page/us_c_intro.htm",			"media": "../../../2019_vod/174/04_mp4/intro.mp4",			"meta": [1120, 560, 0, 0],			"paser": "introP()"		}, //		{			"url": "../contents_page/us_c_beforelearning_D.htm",			"media": "../../../2019_vod/mp3/narr_woman_beforelearning.mp3",			"meta": [0, 0, 0, 0],			"paser": "beforelearningP(4)"		},		{			"url": "../contents_page/us_c_goal.htm",			"media": "../../../2019_vod/mp3/narr_woman_goal.mp3",			"meta": [0, 0, 0, 0],			"paser": "goalP()"		},		{			"url": "../contents_page/us_c_mainlearning.htm",			"meta": [790, 440, 120, 150],			"paser": "mainlearningP()"		},				{			"url": "../contents_page/us_c_quiz_02.htm",			"media": "../../../2019_vod/mp3/narr_woman_quiz_02.mp3",			"meta": [0, 0, 0, 0],			"paser": "qu_02P()"		},		{			"url": "../contents_page/us_c_reduce.htm",			"meta": [790, 440, 120, 143],			"paser": "reduceP()"		},		{			"url": "../contents_page/us_c_opinion.htm",			"media": "../../../2019_vod/mp3/narr_woman_opinion.mp3",			"meta": [0, 0, 0, 0],			"paser": "opinionP()"		},				{			"url": "../contents_page/us_c_quiz_04.htm",			"media": "../../../2019_vod/mp3/narr_woman_quiz_04.mp3",			"meta": [0, 0, 0, 0],			"paser": "qu_04P()"		},		{			"url": "../contents_page/us_c_outro.htm",			"media": "../../../2019_vod/174/04_mp4/outro.mp4",			"meta": [1120, 560, 0, 0],			"paser": "outroP()"		}	],	"intro_data": [{		"att_id": "intro_G",		"type": "div",		"data": "",		"sync": 12,		"obj_ea": null	}],	"beforelearning_data": [{		"att_id": "bl_D_img_01",		"type": "src",		"data": "../../common_img/beforelearning/common_bl_img_02.png",		"sync": 1,		"obj_ea": null	}, {		"att_id": "bl_D_text_01",		"type": "text",		"data": "지역사회복지에서 주민이 참가해야 할 필요성이 대두된 배경은?",		"sync": 1,		"obj_ea": null	}],	"goal_data": [{		"att_id": "lg_text_01",		"type": "text",		"data": "1. 지역사회복지실천의 이념, 가치, 기능이 무엇인지를 인식할 수 있다.",		"sync": 1,		"obj_ea": null	}, {		"att_id": "lg_text_02",		"type": "text",		"data": "2. 사회복지 패러다임과 지역사회복지의 환경이 어떻게 변화하는지를 통하여 지역사회복지의 실천방향을 예견해 볼 수 있다.",		"sync": 1,		"obj_ea": null	}, {		"att_id": "lc_text_01",		"type": "text",		"data": "1. 지역사회복지실천의 이념",		"sync": 2,		"obj_ea": null	}, {		"att_id": "lc_text_02",		"type": "text",		"data": "2. 지역사회복지실천의 가치",		"sync": 2,		"obj_ea": null	}, {		"att_id": "lc_text_03",		"type": "text",		"data": "3. 지역사회복지실천의 기능",		"sync": 2,		"obj_ea": null	}, {		"att_id": "lc_text_04",		"type": "text",		"data": "4. 지역사회복지의 환경변화",		"sync": 2,		"obj_ea": null	}],		"outro_data": [{		"att_id": "outro_text01",		"type": "text",		"data": "이번 시간에는",		"sync": 2,		"sync_end": 6,		"obj_ea": null	}, {		"att_id": "outro_text01_01",		"type": "text",		"data": "1주 2차 지역사회복지실천의 이념, 가치, 기능, 환경변화",		"sync": 3,		"sync_end": 6,		"obj_ea": null	}, {		"att_id": "outro_text02",		"type": "text",		"data": "다음 시간에는",		"sync": 8,		"obj_ea": null	}, {		"att_id": "outro_text02_01",		"type": "text",		"data": "2주 1차 영국과 미국 지역사회복지의 역사",		"sync": 9,		"obj_ea": null	}],	};var quiz_Json = {	"quiz_item_02": [{}, {		"quiz_title": "주민참가의 필요성이 대두된 배경으로는 공적서비스의 결함을 보완하기 위함이 있다.",		"example_01": "x",		"example_02": "o",		"correct_num": 1,		"explain_data": "공적 서비스가 규격화되어 획일적으로 제공됨으로써 개개인의 개별적 욕구에 효과적으로 대응하는 데 한계가 있기 때문에 주민참가의 필요성이 대두되게 되었다.",		"user_select": null	}, {		"quiz_title": "지역사회복지실천의 가치의 궁극적 목표는 주민의 행복이다.",		"example_01": "x",		"example_02": "o",		"correct_num": 1,		"explain_data": "지역사회복지가 진행되는 과정에서 전체 주민의 행복에 해로운 일이 벌어져서는 안 된다.",		"user_select": null	}],	"quiz_item_04": [{}, {		"quiz_title": "지역사회복지가 등장하게 된 배경이 아닌 것은?",		"example_01": "지역사회 및 가족기능의 변화에 따라 가족과 지역공동체가 지니고 있던 복지적 기능이 약화되고 있다.",		"example_02": "복지욕구가 비경제적인 면에서 경제적인 복지서비스로 옮겨지고 있다.**",		"example_03": "종래의 시설수용 위주의 복지에서 탈피하여 가정과 이웃과의 정상적 생활 속에서 클라이언트에게 서비스를 제공하는 재가복지서비스가 등장하게 되었다.",		"example_04": "지역사회의 중요성을 점차 인식하게 되었다.",		"correct_num": 2,		"explain_data": "복지욕구가 경제적인 면에서 비경제적인 복지서비스로 옮겨지고 있다.",		"user_select": null	}, {		"quiz_title": "지역사회복지의 환경변화에 대한 설명으로 적절하지 않은 것은?",		"example_01": "빈곤의 문제가 상대적 빈곤에서 절대적 빈곤으로 변화하고 있다.**",		"example_02": "가족의 복지기능이 상실되어 가고 있다.",		"example_03": "탈시설화, 정상화, 통합화 이념이 대두되면서 지역사회복지가 강조되고 있다.",		"example_04": "서비스 전달체계가 중앙정부에서 지방정부로 이행하고 있다.",		"correct_num": 1,		"explain_data": "빈곤의 문제가 절대적 빈곤에서 상대적 빈곤으로 변화하고 있다.",		"user_select": null	}, {		"quiz_title": "지역사회복지가 생활시설에서 벗어나 지역사회에 통합되어 살아갈 수 있도록 하는 것을 무엇이라고 하는가?",		"example_01": "정상화**",		"example_02": "통합화",		"example_03": "탈시설화",		"example_04": "종합화",		"correct_num": 1,		"explain_data": "정상화는 지역사회복지의 사상적 기반이 되는 중요한 부분 중의 하나로 종래의 사회복지의 처우 형태에 대한 반성에서 나타났다. 지역사회복지가 생활시설에서 벗어나 지역사회에 통합되어 살아갈 수 있도록 하는 것이다.",		"user_select": null	}]};