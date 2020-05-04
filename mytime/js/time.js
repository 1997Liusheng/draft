const mydate = new Date()

function changeLink(){
    document.getElementById('old').innerHTML+= ( mydate.getFullYear()-1997 +"岁");

    document.getElementById('hours').innerHTML+= ( mydate.getHours() +"小时");
    document.getElementById('weeks').innerHTML+= ( mydate.getDay()-1 + " 天"   );
    document.getElementById('month').innerHTML+= ( mydate.getDate()-1 + " 天");
    document.getElementById('year').innerHTML+= ( mydate.getMonth() + " 月");
}