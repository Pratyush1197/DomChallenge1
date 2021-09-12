var count = 0;

function  start() {
    count++;
    setTimeoutInterval()
    
}
function setTimeoutInterval(){
    console.log(count)
        for (var i =1 ;i<=count;i++){
            console.log(i)

        setTimeout(function()
         {
              move(0,setTimeoutInterval);
         }, 5000);
        }
        count = 0
    }


function move(i,callback){
        if (i==0){
            i = 1
            var elem = document.getElementById("progress")
            var width = 1
            var id = setInterval(frame1, 10)
            function frame1(){
                if (width>=100){
                    clearInterval(id)
                    i = 0
                    callback()
                }
                else{
                    width++;
                    elem.style.width = width+"%"
                }
            }
    
    
        }
}