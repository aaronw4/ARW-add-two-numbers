class ListNode {
    constructor(data, next) {
        this.val = data
        this.next = next           
    }
}

var addTwoNumbers = function(l1, l2) {
    let firstNumberArray = []
    let secondNumberArray = []

    let node1 = l1
    firstNumberArray.unshift(node1.val)
    while (node1.next != null) {
        let next = node1.next
        firstNumberArray.unshift(next.val)
        node1 = next
    }
    
    let node2 = l2
    secondNumberArray.unshift(node2.val)
    while (node2.next != null) {
        let next = node2.next
        secondNumberArray.unshift(next.val)
        node2 = next
    }

    firstNumberString = firstNumberArray.join('')
    secondNumberString = secondNumberArray.join('')
    console.log(firstNumberString, secondNumberString)
    sum = Number(firstNumberString) + Number(secondNumberString)
    sumString = String(sum)
    sumArray = sumString.split("")
    sumArrayNumbers = sumArray.map(number => Number(number))

    solution = []
    sumArrayNumbers.forEach(number => solution.unshift(number))
    linkedList = solution.map(number => new ListNode(number, null))

    for (i=0; i < linkedList.length - 1; i++) {
        node = linkedList[i]
        node.next = linkedList[i + 1]
    }
    
    let listNode = linkedList[0]
    console.log(sumArrayNumbers)
    return listNode
};

let node2 = new ListNode(2, null)
let node1 = new ListNode(1, node2)
let node5 = new ListNode(4, null)
let node4 = new ListNode(0, node5)
let node3 = new ListNode(1, node4)

addTwoNumbers(node1, node3)



