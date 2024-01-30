class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null 
    }
}

class BST{
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
    if(newNode.data < root.data){
        if(!root.left){
            root.left = newNode
        }else{
            this.insertNode(root.left,newNode)
        }
    }else{
        if(!root.right){
            root.right = newNode
        }else{
            this.insertNode(root.right,newNode)
        }
    }

   }
   search(data){
   return this.searchData(this.root,data);
   }
   searchData(root,data){
    if(!root){
        return false
    }
    if(root.data === data){
        return true
    }
    if(data < root.data){
        return this.searchData(root.left,data)
    }else{
        return this.searchData(root.right,data)
    }
   }
   traverse(option='in'){
    const result = []
    if(option==='in'){
        this.inOrder(this.root, result)
    }
    if(option==='pre'){
        this.preOrder(this.root, result)
    }
    if(option==='post'){
    this.postOrder(this.root,result)
        
    }
    return result
   }
   preOrder(root,result){
    if(!root){
        return
    }
    result.push(root.data)
    this.preOrder(root.left,result)
    this.preOrder(root.right,result)

   }
   postOrder(root,result){
    if(!root){
        return
    }
    this.postOrder(root.left,result)
    this.postOrder(root.right,result)
    result.push(root.data)
   }
   inOrder(root,result){
    if(!root){
        return
    }
    this.inOrder(root.left,result)
    result.push(root.data)
    this.inOrder(root.right,result)
   }
   getMin(){
    if(!this.root){
        return undefined
    }
    return this.min(this.root)
   }
   min(root){
    if(!root.left){
        return root.data
    }
    return this.min(root.left)
   }
   getMax(){
    if(!this.root){
        return undefined
    }
    return this.max(this.root)
   }
   max(root){
    if(!root.right){
        return root.data
    }
    return this.max(root.right)
   }
   delete(data){
    this.root = this.deleteNode(this.root,data)
   }
   deleteNode(root,data){
    if(!root){
        return root
    }
    if(data < root.data){
        root.left = this.deleteNode(root.left,data)
    }else if(data > root.data){
        root.right = this.deleteNode(root.right,data)
    }else{
        if(!root.left){
            return root.right
        }
        if(!root.right){
            return root.left
        }
        root.data = this.min(root.right)
        root.right = this.deleteNode(root.right,root.data)
    }
    return root;
   }
   closest(value){
    let closestVal = this.root.data
    let root = this.root
    while(root){
        if(Math.abs(root.data - value) < Math.abs(closestVal - value)){
            closestVal=root.data
        }
        if(value < root.data){
            root = root.left
        }else if(value > root.data){
            root = root.right
        }else{
            return root.data
        }
    }
    return closestVal
   }

}

const bst = new BST()
bst.insert(5);
bst.insert(15);
bst.insert(1);
bst.insert(4);
console.log("Search 25 ",bst.search(25));
console.log("Search 5 ",bst.search(5));
console.log("preorder ",bst.traverse('pre'));
console.log("postorder ",bst.traverse('post'));
console.log("inorder ",bst.traverse('in'));
console.log("minimum value ",bst.getMin());
console.log("maximum value ",bst.getMax());
console.log("Deleting 5 ",);
bst.delete(5);
console.log("after deletion ",bst.traverse('in'));

console.log("Closest value to 9",bst.closest(9));

function validateTree(tree){
    const arr = tree.traverse('in')
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}

console.log("Validate tree",validateTree(bst));