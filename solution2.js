class ListNode {
    constructor(data, next) {
        this.val = data
        this.next = next           
    }
}

var addTwoNumbers = function(l1, l2) {
    let node1 = l1
    let node2 = l2
    let nodeSum = node1.val + node2.val
    let next1 = node1.next
    let next2 = node2.next
    let firstNode
    let firstRun = true
    let carryOver = 0

    if (nodeSum > 9) {
        nodeSum = nodeSum - 10
        carryOver = 1
    }

    let listNode = new ListNode(nodeSum, null)    

    if (next1 === null && next2 === null) {
        firstNode = listNode
    }

    while (next1 != null || next2 != null) {
        if (next1 != null && next2 != null) {
            let nextSum = next1.val + next2.val + carryOver
            carryOver = 0

            if (nextSum > 9) {
                nextSum = nextSum - 10
                carryOver = 1
            }    

            let newListNode = new ListNode(nextSum, null)
            listNode.next = newListNode

            if (firstRun === true) {
                firstNode = listNode
                firstRun = false
            }

            listNode = newListNode  
            next1 = next1.next
            next2 = next2.next
        }
        else if (next1 != null && next2 === null) {
            let value = next1.val + carryOver
            carryOver = 0

            if (value > 9) {
                value = value - 10
                carryOver = 1
            }

            let newListNode = new ListNode(value, null)
            listNode.next = newListNode
            
            if (firstRun === true) {
                firstNode = listNode
                firstRun = false
            }

            listNode = newListNode
            next1 = next1.next
        }
        else if (next1 === null && next2 != null) {
            let value = next2.val + carryOver
            carryOver = 0
            
            if (value > 9) {
                value = value - 10
                carryOver = 1
            }

            let newListNode = new ListNode(value, null)
            listNode.next = newListNode
            
            if (firstRun === true) {
                firstNode = listNode
                firstRun = false
            }

            listNode = newListNode
            next2 = next2.next
        } 
    }

    if (carryOver === 0) {
        console.log(firstNode)
        return firstNode
    } else {
        let newListNode = new ListNode(1, null)
        listNode.next = newListNode
        return firstNode
    }    
}


let node2 = new ListNode(2, null)
let node1 = new ListNode(1, null)
let node5 = new ListNode(1, null)
let node4 = new ListNode(9, node5)
let node3 = new ListNode(9, node4)

addTwoNumbers(node1, node3)
