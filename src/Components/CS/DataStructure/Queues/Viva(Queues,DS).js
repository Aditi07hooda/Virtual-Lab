import React from "react";

export default function intro() {
  return (
    <div>
      <pre className="text-[21px] font-[500] font-sans -mt-[780px] overflow-auto h-[820px]">
        1) What is FIFO?
        <br />
        {"     "}Ans: This process can define how data can be inserted and
        accessed in queue. In the process the data inserted at the beginning of
        queue
        <br />
        {"     "} will only be accessed first.
        <br />
        <br />
        2)Which data structure suits the most in the tree construction?
        <br />
        {"     "}Ans: Queue data structure
        <br />
        <br />
        3)How many stacks are required to implement of queue?
        <br />
        {"     "}Ans: 2.
        <br />
        {"     "}The idea is to implement the queue’s enqueue operation so that
        the first entered element always ends up at the top of the stack.
        <br />
        {"     "}To enqueue an item into the queue, first move all elements from
        the first stack to the second stack, <br />
        {"      "}push the item into the first stack, and finally move all
        elements back to the first stack. This
        <br />
        {"     "} ensures that the new item lies at the bottom of the stack and
        hence would be the last one to be removed.
        <br />
        {"     "}To dequeue an item from the queue, return the top item from the
        first stack.
        <br />
        <br />
        4)In a queue, if user try to removing the element from the empty queue
        it is called?
        <br />
        {"     "}Ans: Underflow Condition
        <br />
        <br />
        5) The data structure required for Breadth First Traversal is?
        <br />
        {"     "}Ans: Queue data structure
        <br />
        <br />
        6) Queue serve major role in?
        <br />
        {"     "}Ans: Simulation of limited resource allocation
        <br />
        <br />
        7) What is the worst case time complexity of a sequence of n queue
        operations on an initially empty queue?
        <br />
        {"     "}Ans: θ (n)
        <br />
        <br />
        8) A normal queue, if implemented using an array of size MAX_SIZE, gets
        full when?
        <br />
        {"     "}Ans: When REAR==MAX_SIZE – 1<br />
        <br />
        9)In which data structures,both insertion and deletion operations can
        take place at either end of structure
        <br />
        {"     "}Ans: Dequeue
        <br />
        <br />
        10)Types of Queues
        <br />
        {"     "}Ans: simple queue
        <br />
        {"          "}Circular queue
        <br />
        {"          "}Double ended queue(dequeue)
        <br />
        {"          "}Priority queue
        <br />
      </pre>
    </div>
  );
}
