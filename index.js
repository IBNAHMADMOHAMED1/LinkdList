// const n1=
// {
//     data:100
// }
// const n2=
// {
//     data:200
// }
// n1.next=n2
// console.log(n1);

class Node{
    constructor(data,next=null)
    {
        this.data=data;
        this.next=next;
    }
}

// const n1=new Node(200);

// console.log(n1)

class list{
    constructor()
    {
        this.haed=null;
        this.size=0;
    }


    ajouterD(data)
    {
        this.head =new Node(data,this.head);
        this.size++;
    }
        printlist()
        {
            let current =this.head;
            while(current)
            {
                console.log(current.data);
                current=current.next;
            }
        }

    ajouterDr(data)
    {
        let node= new Node(data);
        let current;
        // if empty make head
        if(!this.head)
        {
            this.head=node;
        }
        else
        {
            current=this.head;
            while(current.next)
            {
                current=current.next;
                console.log(current);
            }
            current.next=node
        }
            this.size++;
    }

    inserAt(data, index)
    {
        // if index bra range
        if(index>0 && index>this.size)
        {
           return; 
        }

        // if index first
        if(index === 0)
        {
            this.ajouterD(data);
            return;
        }
        const node =new Node(data);
        let current , prev;

        current=this.head;
        let count=0;
        while(count<index)
        {
            prev=current; // node 9abl index
            count++;
            current=current.next //  node mnba3D index
              
        }
        node.next =current;
        prev.next=node;

        this.size++;
    }


    recherch(index)
    {
        let current =this.head;
         current=0;

        while(current)
        {
            if(current==index)
            {
                console.log(current.data);
            }
            current++;
            current=current.next;
        }
        return null;
    }
    
    sup(index)
    {
        if(index>0 && index>this.size)
        {
           return; 
        }
        let current=this.head
        current=0;
        if (current==index)
        {
            this.head=current.next;
        }
        else
        {
            while(current < index)
            {
                current++;
                prev=current;
                current=current.next;
            }
            prev.next=current.next;
        }

        this.size--;
    }

}
const l1 =new list();
l1.ajouterD(100);
l1.ajouterD(200);
l1.ajouterD(300);
l1.ajouterDr(400);
l1.inserAt(400,2);
// l1.printlist();
// l1.recherch(3);
l1.sup(1);
l1.printlist();