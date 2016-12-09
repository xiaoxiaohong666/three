
function menujson(){
    var cmenus=[
        {'id':'100','name':'报表中心','href':'#'
        },
        {"id":"200","name":"应用管理","href":"#"
        },
        {"id":"300","name":"个人信息","href":"#"
        }
    ];
    var two=$(".two" );
    for(var i=0;i<cmenus.length;i++) {
        two.append("<li>" + "<a href=''>" + cmenus[i].name + "</a>" + "</li>");
    }
}

