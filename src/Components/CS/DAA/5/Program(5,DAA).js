import React from "react";
import "./scroll.css";

export default function Intro() {
  const left = "{";
  const right = "}";
  return (
    <>
      <div className="-mt-20 ml-6 -mb-56 font-medium text-2xl font-sans overflow-y-auto h-[800px]">
        <pre className="w-[1340px] bg-inherit">
          import java.io.BufferedReader;
          <br />
          import java.io.IOException;
          <br />
          import java.io.InputStreamReader;
          <br />
          import java.util.Scanner;
          <br />
        </pre>
        <pre className="w-[1340px] bg-inherit">
          <>
            class Student
            <br />
            {left}
            <>
              <pre>
                {"    "}private String USN;
                <br />
                {"    "}private String Name;
                <br />
                {"    "}private String Branch;
                <br />
                {"    "}private String Phone;
                <br />
              </pre>
              <pre>
                {"    "}public String getUSN()
                <br />
                {"    "}
                {left}
                <pre>{"       "}return USN;</pre>
                {"    "}
                {right}
              </pre>
              <pre>
                {"    "}public String getName()
                <br />
                {"    "}
                {left}
                <pre>{"       "}return Name;</pre>
                {"    "}
                {right}
              </pre>
              <pre>
                {"    "}public String getBranch()
                <br />
                {"    "}
                {left}
                <pre>{"       "}return Branch;</pre>
                {"    "}
                {right}
              </pre>
              <pre>
                {"    "}public String getPhone()
                <br />
                {"    "}
                {left}
                <pre>{"       "}return Phone;</pre>
                {"    "}
                {right}
              </pre>
              <pre>
                {"    "}public Student(String USN,String name,String
                branch,String phone)
                <br />
                {"    "}
                {left}
                <pre>
                  {"       "}super();
                  <br />
                  {"       "}USN = USN;
                  <br />
                  {"       "}Name = name;
                  <br />
                  {"       "}Branch = branch;
                  <br />
                  {"       "}Phone = phone;
                  <br />
                </pre>
                {"    "}
                {right}
              </pre>
            </>
            {right}
          </>
        </pre>
        <pre className="w-[1340px] bg-inherit">
          <>
            public class Lab1A <br />
            {left}
            <pre>
              {"    "}public static void main(String[] args) throws IOException
              <br />
              {"    "}
              {left}
              <pre>
                {"        "}BufferedReader in = new
                BufferedReader(newInputStreamReader(System.in));
                <br />
                {"        "}Scanner in = new Scanner(System.in);
                <br />
                {"        "}System.out.println("Enter total number of students:-
                ");
                <br />
                {"        "}int n = in.nextInt(); <br />
                {"        "}Student[] st=new Student[n]; <br />
                {"        "}String usn, name, branch, phone;
                <br />
                {"        "}for(int i=0; i; i++)
                <br />
                {"        "}
                {left}
                <pre>
                  {"            "}System.out.println('\nEnter details of student
                  '+(i+1));
                  <br />
                  {"            "}System.out.print("USN: ");
                  <br />
                  {"            "}usn=stdin.readLine();
                  <br />
                  {"            "}System.out.print("Name: ");
                  <br />
                  {"            "}name=stdin.readLine();
                  <br />
                  {"            "}System.out.print("Branch: "); <br />
                  {"            "}branch=stdin.readLine();
                  <br />
                  {"            "}System.out.print("Phone number: ");
                  <br />
                  {"            "}phone=stdin.readLine();
                  <br />
                  {"            "}st[i] = new Student(usn,name,branch,phone);
                  <br />
                </pre>
                {"      "}
                {right}
                <br />
                {"      "}System.out.println("Student Details ");
                <br />
                {"      "}System.out.println("USN\t\tName\t\tBranch\tPhone ");
                <br />
                {"      "}for(int i=0;i;i++)
                <br />
                {"      "}
                {left}
                <pre>
                  {"       "}System.out.println(st[i].getUSN()+"\t
                  "+st[i].getName()+"\t\t "+st[i].getBranch()+"\t
                  "+st[i].getPhone());
                </pre>
                {"      "}
                {right}
              </pre>
              {"    "}
              {right}
            </pre>
            {right}
          </>
        </pre>
      </div>
    </>
  );
}
