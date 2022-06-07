


          
          $(document).ready(function(){
            var obj;
            $.ajax({
                "url" : "advertisement.json",
                dataType : "json",
                type : "GET",
                async : false,
                success : function(list){
                    obj = list;
                }
            })
            
            var tab = document.getElementById("table");
            
            for(var i = 0;i<10;i++){
                tab.innerHTML +=`
                <tr class="sjmf">
                         <td class="td_1"><input type="checkbox" class="check_1 put"></td> 
                         <td class="td_2 td">${obj.inform[i]}</td>
                         <td class="td_3 td">${obj.user[i]}</td>
                         <td class="td_4 td">${obj.uploader[i]}</td>
                         <td class="td_5 td">${obj.time[i]}</td>
                         <td class="td_8 td"><span class="iconfont icon">&#xe794;</span><span class="iconfont" id="del">&#xe68c;</span></td> 
                   </tr>
                `
                
            }

            $('#checkAll').click(function () {
                //全选反选
                $('.check_1').prop('checked', $(this).prop('checked'));
                });
        
                $("tbody").on('click', '#del', function () {
                    $(this).closest('tr').remove();
                  });
        

                  let bj = document.getElementsByClassName("icon");
                  for(let i = 0;i<bj.length;i++){
                      bj[i].onclick=function(){
                          window.location.href="addAdvertise.html"
                      }
                  }
                  let ej = document.getElementsByClassName("content-wordage-div2");
                  for(let i = 0;i<ej.length;i++){
                      ej[i].onclick=function(){
                          window.location.href="addAdvertise.html"
                      }
                  }

        })