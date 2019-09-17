var tool={
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
        
    }
}

export default tool;