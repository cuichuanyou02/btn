/*
* @Author: mtzy
* @Date:   2017-11-04 10:12:56
* @Last Modified by:   mtzy
* @Last Modified time: 2017-11-04 10:29:01
 *num,element num 点击次数 element 被点击的元素
*/
class PraiseButton{
        constructor(num,element){
             this.num=num;
             this.element=element;
        }
        clickAction(){
             this.element.click(()=>{
                  if(this.num<10){
                         this.element.css('-webkit-filter','grayscale(0)');
                         $("#animation").addClass('num');
                         this.num=add(this.num);
                         setTimeout(function(){
                               $("#animation").removeClass('num');
                         },1000)
                  }else{
                       this.element.css('-webkit-filter','grayscale(1)');
                        this.num=0;
                  }
                  console.log(this.num);
             })
        }
}
class Thumb extends PraiseButton{
    constructor(num,element){
         super(num,element);
    }
}
export default(Thumb);