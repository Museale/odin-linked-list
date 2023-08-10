const linkedList = () =>  {
    //linkedlist factory function
    const list = {
     head: null
    }

    const createNode = (value) => {
      return {
        value: value,
        next: null
      };
    };

    const append = (list, value) =>  {
        //add a node to the end of the list
        const newNode = createNode(value);

        if(list.head === null) {
            list.head = newNode;
            return;
        }

        let current = list.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;

        return list;
    };
    
        const prepend = (list, value) => {
            //add a node to the beginning of the list
            if (list.head === null) return;

            const newNode = createNode(value);
            newNode.next = list.head;
            list.head = newNode;

            return list;
        }

    const size = ()  => {
        // return number of nodes in list
        if (list.head === null)
            return;

        let size = 1;
        let current = list.head;

        while(current.next !== null){
            current = current.next;
            size++;
        }
        console.log(size);
        return size;

    }

    // const head = () => {
    //     // return the head node (first node)
    // }

    // const tail = () => {
    //     // return the tail node (last node)
    // }

    // const nodeAt = (index) => {
    //     // return the node at given index
    // }

    // const pop = () => {
    //     // remove the last node of the list
    // }

    // const contains = (val) => {
    //     // check if linkedList contains given node
    // }

    // const find = (val) => {
    //     // return the index of the node containing given value || null
    // }

    const toString = () => {
        if (list.head === null) 
            return;
        
        // print linkedList objects as a string 
        //(val) -> (val) -> (val) -> null

        let string = '';
        let current = list.head;

        while(current !== null) {
            string += `( ${current.value} ) -> `;
            current = current.next;
        }

        string += 'null';
        console.log(string)
        return string;
    }

    return {
        list,
        append: (value) => append(list, value),
        prepend: (value) => prepend(list, value),
        size,
        // head,
        // tail,
        // nodeAt,
        // pop,
        // contains,
        // find,
        toString
    };
};

const listOne = linkedList();
listOne.append(20);
listOne.append(60);
listOne.append(90);
listOne.append(20);
listOne.prepend(1);

listOne.size()
listOne.toString()
