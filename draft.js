/* First question is your root node

there should be a YES and NO path
If YES, then continue down that path
if NO, then the next level should have a YES node equal to NULL

When the YES node is equal to null, the no node's value will be set as the final decision

Then the decision should be the value of the node at that level

If there is a value at the YES node, meaning that the YES node is not equal to null, then the recursive function is called and the next level in the tree gets evaluated until the last leaf node or until a no node is reached.

If the YES node of a current node is equal to null, then we set the final decision to be the value of the current node. - because that current node is already a NO node

*/

// Set up the tree nodes 


// Recursive function to traverse the decision tree
function makeDecision(node) {
    answer = prompt(node.value)

    if (answer.toLowerCase() === 'yes') {
        if (node.left !== null) {
            makeDecision(node.left)
        } else {
            return `Decision: ${node.value}`
        }
    } else if (answer.toLowerCase() === 'no') {
        if (node.right !== null) {
            return node.right.value
        } else {
            return `Decision: ${node.value}`
        }
    } else {
        return `Invalid answer. Please try again.`
    }
}
