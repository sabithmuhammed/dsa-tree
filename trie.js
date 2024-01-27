class TrieNode{
    constructor(){
        this.children = new Map()
        this.endOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    add(word){
        let node = this.root
        for(const char of word){
            if(!node.children.has(char)){
                node.children.set(char,new TrieNode())
            }
            node = node.children.get(char)
        }
        node.endOfWord = true
    }
    search(word){
        let node = this.root
        for(const char of word){
            if(!node.children.has(char)){
                return false
            }
            node = node.children.get(char)
        }
        return node.endOfWord
    }
    startsWith(prefix){
        let node = this.root
        for(const char of prefix){
            if(!node.children.has(char)){
                return false
            }
            node = node.children.get(char)
        }
        return true;
    }
}
const tt = new Trie()
tt.add("students")
tt.add("books")
console.log(tt.search('books'));
console.log(tt.search('stu'));
console.log(tt.startsWith('stu'));
console.log(tt.startsWith('boo'));