/*
Binary trees are already defined with this interface:
  function Tree(x) {
    this.value = x
    this.left = null
    this.right = null
  }
*/

function sumLeafNodes(root) {
 let sum = 0
 let queue = [root]
 
 while(queue.length) {
    let curr = queue.shift()
    
    if(!curr.left && !curr.right) {
        sum += curr.value
    } else {
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
 }
  
  return sum
}
