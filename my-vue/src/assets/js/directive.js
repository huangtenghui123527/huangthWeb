import v from "vue";

v.directive("silder",function(el,binding,vnode){
    console.log(el.firstChild.clientHeight);
    let obj=binding.value;
    if(obj.isOpen){

    }
})
