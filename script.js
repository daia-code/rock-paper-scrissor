var com_ch=['rock','paper','scrissor'];
var dict=[{'opt':['rock','scrissor'],'message':'Rock beats scrissor!'},{'opt':['scrissor','paper'],'message':'Scrissor beats paper!'},{'opt':['paper','rock'],'message':'Paper beats rock!'}];

function your_Ch1(){
   my_computer('rock');
}
function your_Ch2(){
    my_computer('paper');
 }
 function your_Ch3(){
    my_computer('scrissor');
 }
 function my_computer(you){
   var el= document.getElementById('text');
   el.style.visibility = "visible" ;
    var no=Math.floor(Math.random() * 3);
    console.log('You - '+ you);
    console.log('Computer - '+com_ch[no]);
    document.getElementById('you-computer').textContent="You chose "+ you+"."+"Computer chose "+ com_ch[no]+".";
    compare_result(you,com_ch[no]);
 }
function compare_result(you,computer){
   var btn = document.getElementById ( "again" ) ;  
 if(you==computer){
   document.getElementById('result').textContent='Equals';
   console.log('Your option '+you+' is equals with computer oprion '+computer);
   document.getElementById('winner').textContent=' ';
 
 }else{
  
         for(var i=0;i<dict.length;i++){
            if( (you==dict[i].opt[0] && computer==dict[i].opt[1]) ||( you==dict[i].opt[1] && computer==dict[i].opt[0] )){
                document.getElementById('result').textContent=dict[i].message;
                console.log(dict[i].message);
                if(computer==dict[i].opt[0] && you==dict[i].opt[1] ){
                  document.getElementById('winner').textContent='Computer win! 🎉';
                  console.log('Computer win!');
                  document.getElementById('winner').style.paddingLeft='28%';
                }else
                if(you==dict[i].opt[0] && computer==dict[i].opt[1]){
                  document.getElementById('winner').style.paddingLeft='34%';
                  console.log('I win!');
                  document.getElementById('winner').textContent='You win! 🎉';
                }
              
                   
                 
              }
      
            }
              
            }
            btn.style.visibility = "visible" ;
           
         }
function try_again(){
   var el= document.getElementById('text');
   el.style.visibility="hidden";
   var btn=document.getElementById('again');
   btn.style.visibility="hidden";
}
            
            
         
 
   
 
 
