"use strict";
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function mergeTwoLists(list1, list2) {
    let newList = new ListNode;
    let mergeList = newList;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            mergeList.next = list1;
            list1 = list1.next;
        }
        else {
            mergeList.next = list2;
            list2 = list2.next;
        }
        mergeList = mergeList.next;
    }
    if (list1 !== null)
        mergeList.next = list1;
    if (list2 !== null)
        mergeList.next = list2;
    return newList.next;
}
