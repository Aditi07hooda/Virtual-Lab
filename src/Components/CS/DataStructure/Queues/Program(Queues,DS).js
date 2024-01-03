import React from "react";

export default function intro() {
  const left = "{";
  const right = "}";
  const larrow = "<";
  const rarrow = ">";
  const cmmnt1 = "//deQueue is not possible on empty queue";
  const cmmnt2 = "// 4th element can't be added to because the queue";
  const cmmnt3 = "//Now we have just 2 elements left in queue";

  return (
    <>
      <div>
        <div
          className="text-2xl font-normal font-sans -mt-[530px] overflow-auto h-[820px]"
          style={{ whiteSpace: "pre" }}
        >
          #include {larrow}stdio.h{rarrow}
          <br />
          #define SIZE 3<br />
          void enQueue(int);
          <br />
          void deQueue();
          <br />
          void display();
          <br />
          int items[SIZE], front = -1, rear = -1;
          <br />
          <br />
          int main() {left}
          <br />
          {"    "}deQueue();{"       "} {cmmnt1}
          <br />
          {"    "}enQueue(1);
          <br />
          {"    "}enQueue(2);
          <br />
          {"    "}enQueue(3);
          <br />
          {"    "}enQueue(4);{"       "} {cmmnt2}
          is full
          <br />
          {"    "}display();
          <br />
          {"    "}deQueue();{"       "} {cmmnt3}
          <br />
          {"    "}display();
          <br />
          {"    "}return 0;
          <br />
          {right}
          <br />
          <br />
          void enQueue(int value) {left}
          <br />
          {"    "}if (rear == SIZE - 1)
          <br />
          {"    "}printf("\nQueue is Full!!");
          <br />
          {"    "}else {left}
          <br />
          {"    "}
          {"    "}if (front == -1)
          <br />
          {"    "}
          {"       "}front = 0;
          <br />
          {"    "}
          {"    "}rear++;
          <br />
          {"    "}
          {"    "}items[rear] = value;
          <br />
          {"    "}
          {"    "}printf("\nInserted -&gt %d", value);
          <br />
          {"    "}
          {right}
          <br />
          {right}
          <br />
          <br />
          void deQueue() {left}
          <br />
          {"    "}if (front == -1)
          <br />
          {"       "}printf("\nQueue is Empty!!");
          <br />
          {"    "}else {left}
          <br />
          {"      "}printf("\nDeleted : %d", items[front]);
          <br />
          {"      "}front++;
          <br />
          {"    "}if (front &gt rear)
          <br />
          {"      "}front = rear = -1;
          <br />
          {"    "}
          {right};<br />
          {right}
          <br />
          <br />
          <br />
          void display() {left}
          <br />
          {"    "}if (rear == -1)
          <br />
          printf("\nQueue is Empty!!!");
          <br />
          {"    "}else {left}
          <br />
          {"      "}int i;
          <br />
          {"      "}printf("\nQueue elements are:\n");
          <br />
          {"      "}for (i = front; i &gt rear; i++)
          <br />
          {"         "}printf("%d ", items[i]);
          <br />
          {"    "}
          {right}
          <br />
          {"    "}printf("\n");
          <br />
          {right}
          <br />
        </div>
      </div>
    </>
  );
}
