var mainname = ["회사소개","제품소개","경영방침","고객센터"]
var subname = [
  ["CEO인사말","오시는길","회사연혁","수상실적"],
  ["빵류","케이크류","선물세트"],
  ["경영철학","사회공헌"],
  ["문의게시판","칭찬게시판","뉴스레터"]
];

var menufile = [
  ["greetings","direction","history","awards"],
  ["bread","cake","gift"],
  ["philosophy","social"],
  ["qna","good","news"]
];

var file = location.href;
file = file.split("/");
file = file[file.length-1];
file = file.split(".");
file = file[0];


var mainmenu;
var submenu;

for(i=0; i<mainname.length; i++) {
  for(j=0; j<subname[i].length; j++) {
    if(menufile[i][j] == file) {
      mainmenu = i;
      submenu = j;
      $("#bc>a:nth-of-type(2)").text(mainname[i]);
      $("#bc>a:nth-of-type(3)").text(subnname[i][j]);
      $("#bc>a:nth-of-type(2)").attr("href",menufile[i][0]);
      $("#bc>a:nth-of-type(3)").attr("href",menufile[i][j]);
    }
  }
}

if(mainmenu == undefined){
  $("#bc").hide();
}