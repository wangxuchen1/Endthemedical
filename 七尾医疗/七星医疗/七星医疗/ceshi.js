window.onload=function(){
    var block = document.getElementsByClassName('block')[0];
      // 调用封装的get方法
      get('doctor.json',null,function(req){
        
          
          
        for(var i=0;i<10;i++){
             block.innerHTML += `
               <div class='_title'>
                      <div><input type="checkbox" class="check"></div>
                      <div class="xm">${req[i].name}</div>
                      <div class="tx"><div ></div></div>
                      <div class="dy">${req[i].campus}</div>
                      <div class="zc">${req[i].professional}</div>
                      <div class="ks">${req[i].section}</div>
                      <div class="bq"><div class="tnb">${req[i].lable}</div><div class="ndz"><span>${req[i].lablee}</span></div><div class="sb"><span>${req[i].lableee}</span></div></div>
                      <div class="ysjj"><div>${req[i].introduction}</div></div>
                      <div class="cz"></div>
    
                      
               </div>
             `  
        }
             
      });
    

    



    
}
    
    