/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let newList = new ListNode
    let mergeList = newList;

    // 두 리스트가 비워질때까지 반복
    while (list1 !== null && list2 !== null) {
        // 두 리스트를 비교하며 작은 수부터 mergeList 에 하나씩 추가.
        // 특정 리스트에서 mergeList 에 값을 추가하면, 해당 리스트는 다음 노드로 이동
        if (list1.val <= list2.val) {
            mergeList.next = list1;
            list1 = list1.next;
        } else {
            mergeList.next = list2;
            list2 = list2.next;
        }
        // mergeList 에 값이 추가되면 다음 노드로 이동.
        mergeList = mergeList.next;
    }

    // 두 리스트 중 하나가 비어있는 경우
    if (list1 !== null) mergeList.next = list1; // 만약 list1 노드값이 존재하면 mergeList 노드값에 list1 노드값 추가
    if (list2 !== null) mergeList.next = list2; // 만약 list2 노드값이 존재한면 mergeList 노드값에 list2 노드값 추가

    return newList.next;
}