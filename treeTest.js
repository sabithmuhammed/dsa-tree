class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null
    }
    insert(data){
        const node = new Node(data)
        if(!this.root){
            this.root = node
            return
        }
        this.insertNode(this.root,node)
    }
    insertNode(root,newNode){
        if(root.data > newNode.data){
            if(!root.left){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(!root.right){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(data){
       return this.searchData(this.root,data)
    }
    searchData(root,data){
        if(!root){
            return false
        }
        if(data === root.data){
            return true
        }
        if(data < root.data){
           return this.searchData(root.left,data)
        }else{
           return this.searchData(root.right,data)
        }
    }
    isEmpty(){
        return this.root === null
    }
}

const tree = new Tree()
console.log("Checking tree is empty or not",tree.isEmpty());
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
console.log("Checking tree contains 5 or not",tree.search(5));
console.log("Checking tree contains 2 or not",tree.search(2));
console.log("Checking tree contains 20 or not",tree.search(20));
console.log("Checking tree is empty or not",tree.isEmpty());
