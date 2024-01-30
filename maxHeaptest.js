class MaxHeap{
    constructor(){
        this.item = []
    }
    parentIndex(i){
        return Math.ceil(i/2)-1
    }
    leftChild(i){
        return 2*i+1
    }
    rightChild(i){
        return 2*i+2
    }
    insert(data){
        this.item.push(data)
        this.heapifyUp()
    }
    swap(i,j){
        [this.item[i],this.item[j]]=[this.item[j],this.item[i]]
    }
    heapifyUp(){
        let current = this.item.length-1
        while(this.item[current]>this.item[this.parentIndex(current)]){
            this.swap(current,this.parentIndex(current))
            current = this.parentIndex(current)
        }
    }
    buildHeap(arr){
        arr.forEach(element => {
            this.insert(element)
        });
    }
    delete(){
        const deletedEle = this.item[0]
        this.swap(0,this.item.length-1);
        this.item.length--;
        this.heapifyDown()
        return deletedEle
    }
    heapifyDown(){
        let current = 0;
        while(true){
            let biggest = current
            if(this.item[this.leftChild(current)] > this.item[biggest]){
                biggest = this.leftChild(current)
            }
            if(this.item[this.rightChild(current)] > this.item[biggest]){
                biggest = this.rightChild(current)
            }
            if(current === biggest){
                break
            }
            this.swap(current,biggest)
            current = biggest;
            
        }
    }
}

const heap = new MaxHeap()
// heap.buildHeap([2,3,4,5,6])
// heap.insert(20)
// console.log(heap);
// console.log(heap.delete());
// console.log(heap);
// console.log(heap.delete());
// console.log(heap);
// console.log(heap.delete());
// console.log(heap);

function heapSort(arr){
    const result = []
    heap.buildHeap(arr);
    arr.forEach(()=>{
        result.push(heap.delete())
    })
    return result
}

const arr = [5,4,3,2,8,9,4]
console.log(heapSort(arr));