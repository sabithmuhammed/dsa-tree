class Heap{
    constructor(){
        this.data = []
    }
    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeftChild(i){
        return i*2+1
    }
    getRightChild(i){
        return i*2+2
    }
    swap(i,j){
        const temp = this.data[i]
        this.data[i]=this.data[j]
        this.data[j]=temp
    }
    insert(key){
        this.data[this.data.length] = key
        this.heapifyUp();
    }
    heapifyUp(){
        let curr = this.data.length-1;
        while(this.data[curr] > this.data[this.getParent(curr)]){
            this.swap(curr,this.getParent(curr))
            curr = this.getParent(curr)
        }
    }
    extract(){
        const max = this.data[0]
        this.data[0]=this.data[this.data.length-1]
        this.data.length--
        this.heapifyDown()
        return max
    }
    heapifyDown(){

    }
}
const hh = new Heap()
hh.insert(5)
hh.insert(20)
hh.insert(10)
hh.insert(50)
hh.insert(30)
hh.insert(40)
console.log(hh);