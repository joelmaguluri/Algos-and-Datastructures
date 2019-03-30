 function ListNode(val) {
         this.val = val;
         this.next = null;
     }
function reverse(head){
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


var a=new ListNode(1);
var b=new ListNode(2);
var c=new ListNode(3);
a.next=b;
b.next=c;
c.next=null;
console.log('before');
var temp=a;
while(temp!=null){
console.log(temp.val);
temp=temp.next;

}
console.log('after')
var a=reverse(a)
var temp=a;
while(temp!=null){
console.log(temp.val);
temp=temp.next;

}