let tasklist=[]

window.onload=function(){

 function refreshlist(){

    list.innerHTML=''

    // console.log(tasklist)

 
        for (let taskitem of tasklist){

            const li=document.createElement('li')

            const spane=document.createElement('span')
             
             
            spane.innerHTML=taskitem.string
     
            spane.className='spa'
     
             const up=document.createElement('button')
             up.className='btn btn-outline-dark mx-2 col-1'
             up.innerHTML='↑'
             const down =document.createElement('button')
             down.className='btn btn-outline-dark mx-2 col-1'
             down.innerHTML='↓'
             const done =document.createElement('button')
             done.className='btn btn-outline-dark mx-2 col-1'
             done.innerHTML='✔'

             if(taskitem.done==true){
                spane.style.textDecoration="line-through"
             }
             
            
             done.onclick=function(){
                 taskitem.done=true
                 if(taskitem.done==true){
                    spane.style.textDecoration="line-through"
                 }
               
                  
              }
     
     
              li.appendChild(spane)
              li.appendChild(up)
             li.appendChild(down)
             li.appendChild(done)
             list.appendChild(li)
             document.body.appendChild(list)


        }

    }


    const addbtn =document.getElementById('addbtn')
    const deletebtn=document.getElementById('deletebtn')
    const sortbtn=document.getElementById('sortbtn')
    const clearbtn=document.getElementById('clearbtn')

    const item=document.getElementById('inputtask')
    const list=document.getElementById('tasklist')
  


    function addnewtask(){


        tasklist.push({string :item.value,done:false})
        // tasklist.push(item.value,{done :false})
        refreshlist()

        localStorage.setItem('tasks',JSON.stringify(tasklist))

        item.value=''
        

       
 
    }

    if(localStorage.tasks){
        tasklist=JSON.parse(localStorage.getItem('tasks'))
    }
  

    refreshlist()


    addbtn.onclick=function(){
        addnewtask()
    }


    clearbtn.onclick=function(){
        localStorage.clear()
        refreshlist()
    }




    item.addEventListener('keyup',function(event){
        if(event.keyCode==13){
            addnewtask()
        }
    })

}