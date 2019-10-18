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
        this.clearSelect();
        Otab.isOpen=true;
        this.data.tabArray.push(Otab);
        // this.data.activeName= Otab.name;

    },
    deleteTab(Otab){
        let Atab=this.data.tabArray;
        let index=0;
        for(let i in Atab){
            if(Atab[i]==Otab){
                Atab.splice(i,1);
                index=i
                break;
            }
        }
        if(index!=0){
            Atab[index-1].isOpen=true;
        }
    },
    clearSelect(){
        let Atab=this.data.tabArray;
        for(let item of Atab){
            item.isOpen=false
        }
    }
}

export default fun;