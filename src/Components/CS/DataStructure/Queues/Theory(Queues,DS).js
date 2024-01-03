import React from "react";

export default function intro() {
  return (
    <div>
      <pre className="text-2xl font-normal font-sans">
        Queue is a linear data structure which is accessible from both the ends
        and operations are performed using FIFO rule(First-In-First-Out).
        <br />
        According to FIFO rule elements that is inserted first in queue is
        deleted first, elements are inserted through rear end and deleted from
        front
        <br /> end.
        <br />
        <br />
        The pointers Front and Rear is used to perform operations on queue.
        <br />
        ⦁ Front points to element that is inserted first
        <br />
        ⦁ Rear points to the element that is being inserted or element that is
        inserted last.
        <br />
        <br />
        Operations that can be performed in queue are:
        <br />
        ⦁ Enqueue: insertion of elements which occurs only at rear end of queue.
        <br />
        ⦁ Dequeue: Deletion of elements
        <br />
        ⦁ isEmpty: checks if the queue is empty i.e., checks if Front ==NULL
        <br />
        ⦁ isFull: checks if queue is full i.e., checks if Rear==Capacity of
        queue.
        <br />
      </pre>
      {/* <div className="video-responsive flex justify-center">
        <iframe
          width="753"
          height="380"
          src={"https://www.youtube.com/embed/ojGf3SH7n48"}
          frameborder="0"         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div> */}
    </div>
  );
}
