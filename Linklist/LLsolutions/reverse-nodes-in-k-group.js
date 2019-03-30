/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 
 //reverse() returns the reverse of the Linked list
var reverse=function (head){
    var prev=null;
    var curr=head;
    var next;
    while(curr!=null){
    next=curr.next;
    curr.next=prev;
    prev=curr;
    curr=next;
    }
    head=prev;
    return head;
 }

//getlength()returns the length of the Linked list
var getlength=function(head){
var length=0;
var temp=head;
while(temp!=null)
{
  temp=temp.next;
  length=length+1;
}
return length;
} 

var reverseKGroup = function(head, k) {
var length=getlength(head);
if(length%k!=0){


}
else{
   
    
}

};