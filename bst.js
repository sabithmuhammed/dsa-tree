class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }
    this.insertNode(this.root, node);
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  preOrder(root) {
    if (!root) {
      return;
    }
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  inOrder(root) {
    if (!root) {
      return;
    }
    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }
  postOrder(root){
    if(!root){
        return
    }
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.data);
  }
  bfs(){
    const result =[]
    const queue = []
    if(this.root){
        queue.push(this.root);
        while(queue.length){
            const curr = queue.shift()
            result.push(curr.data)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    return result
  }
  min(root){
    if(!root.left){
        return root.data
    }
    return this.min(root.left)
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
    if(data<root.data){
        root.left = this.deleteNode(root.left,data)
    }else if(data > root.data){
        root.right=this.deleteNode(root.right,data)
    }else{
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.data = this.max(root.right)
        root.right=this.deleteNode(root.right,root.data)
    }
    return root
  }
}
const bst = new BST();
bst.insert(45, bst.root);
bst.insert(15, bst.root);
bst.insert(25, bst.root);
bst.insert(50, bst.root);
console.log(bst);
bst.preOrder(bst.root);
console.log("hfdgkj");
bst.inOrder(bst.root);
console.log("hfdgkj");
bst.postOrder(bst.root);
console.log(bst.bfs());
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
bst.delete(15)
bst.delete(45)
console.log(bst.bfs());
console.log("hfdashfkajskl");
bst.inOrder(bst.root)
