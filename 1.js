class Node 
{
    constructor(data)
    {
      this.element = data;
      this.next = null;
    }
}
class Queue 
{
    constructor()
    {
      this.head = null;
    }
     enqueue = (data) => 
     {
      let node = new Node(data),
      current;
      if(this.head === null)
      {
        this.head = node;
      }
      else
      {
        current = this.head;
        while(current.next)
        {
          current = current.next;
        }
        current.next = node;
      }
    }
     dequeue = () => 
     {
        let current = this.head;
      if(current)
      {
        let data = current.element
        current = current.next;
        this.head = current; 
        return  data
      }  
    }
  }
var q = new Queue()
q.enqueue(3)
console.log("q=", q)
q.enqueue(5)
console.log("q=", q)
q.enqueue(2)
console.log("q=", q)
var t1 = q.dequeue()
console.log("t1=", t1)
console.log("q=", q)