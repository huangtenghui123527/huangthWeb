import globle from "./gloData";
var fun={
    data:globle.data,
   /**
    * 计算当前列表长度
    * @param {Array} arr 
    * @param {String} id 
    */
    getLength(arr,id){
        
        for(let item of arr){
            if(item.id==id&&item.isChildren&&item.isOpen){
                // this.getHeight(item.children)
                return item.children.length;
            }
        }
        return 0
    },
    /**
     * 获取父级数据
     * @param {*} arr 
     * @param {*} id 
     */
    getParentData(arr,id){
        let parentData=arr;
        for(let item of arr){
            if(item.id==id){
                return parentData;
            }else{
                this.getParentData(item.children,id)
            }
        }
    },
    addTab(Otab){
        let flag=this.removalDup(Otab);
        this.clearSelect();
        Otab.isOpen=true;
        if(flag){
            this.data.tabArray.push(Otab);
        }
    },
    deleteTab(Otab){
        let Atab=this.data.tabArray;
        let index=0;
        for(let i in Atab){
            if(Atab[i]==Otab&&i>0){
                Atab.splice(i,1);
                index=i
                break;
            }
        }
        if(index>0){
            Atab[index-1].isOpen=true;
        }else{
            Atab[0].isOpen=true;
        }
    },
    clearSelect(){
        let Atab=this.data.tabArray;
        for(let item of Atab){
            item.isOpen=false
        }
        if(Atab.length==1){
            Atab[0].isOpen=true;
        }
    },
    removalDup(Otab){
        let Atab=this.data.tabArray;
        // Atab.indexOf(Otab)
        for(let item of Atab){
            if(item.name==Otab.name){
                return false;
            }
        }
        return true;
    }
}

export default fun;