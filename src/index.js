const linkedList = () =>  {
    //linkedlist factory function
    const list = {
     head: null
    };

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
    };

    const size = ()  => {
        // return number of nodes in list
        if (list.head === null) return;

        let size = 1;
        let current = list.head;

        while(current.next !== null){
            current = current.next;
            size++;
        }
        console.log(`Size of list: ${size}`);
        return size;

    };

    const head = () => {
        // return the head node (first node)
    if (list.head === null) return;
    else 
        return list.head;
    };

    const tail = () => {
        // return the tail node (last node)
        if (list.head === null) return;

        let current = list.head;

        while (current.next !== null) {
            current = current.next;
        }
        if (current.next === null) {
            console.log(`Head: ${current.value}`)
            return current;
        }
    };

    const nodeAt = (index) => {
        // return the node at given index
        if (list.head === null) return;

        let size = 1;
        let current = list.head;

        while(current.next !== null) {
            current = current.next;
            size++;
            if(size === index) {
                console.log(`Node at given index: ${current.value}`)
                return current;
            }
        }
    };

    const pop = () => {
        // remove the last node of the list
        if (list.head === null) return;

        let index = 1;
        let current = list.head;

        while(current.next !== null) {
            current = current.next;
           if(current.next.next === null) {
            current.next = null;
           }
        }
        
        return list;
    }

    const contains = (val) => {
        // check if linkedList contains given node
        if (list.head === null) 
            return;
        
        let current = list.head;

        while(current.next !== null){
    
            current = current.next;
            if (current.value === val) {
                console.log(`Yes, the list contains ${val}`)
                return current;
            }
        }

    }

    const find = (val) => {
        // return the index of the node containing given value || null
        if (list.head === null) 
            return;
        let current = list.head;
        let index = 0;
        while(current.next !== null) {
            index++;
            current = current.next;
            if(current.value === val) {
                console.log(`${val} found at index ${index}`)
                return current;
            }
        }
    }

    const toString = () => {
        // print linkedList objects as a string 
        //(val) -> (val) -> (val) -> null
        if (list.head === null) 
        return;
    
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

    //Extra credit:

    const insertAt = (value, index) =>  {
        if(list.head === null)
        return;
    
        const newNode = createNode(value);

        let current = list.head;
        let currentIndex = 0;
        let givenIndex = index;

        while(current.next !== null) {
            if(index === 0) {
                newNode.next = list.head;
                list.head = newNode;
                return;
            }
            if(currentIndex === givenIndex-1){
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
            currentIndex++;

        }
        if(current.next === null) {
            current.next = newNode;
        }

        return list;
    }

    const removeAt = (index) => {

    }

    return {
        list,
        append: (value) => append(list, value),
        prepend: (value) => prepend(list, value),
        size,
        head,
        tail,
        nodeAt,
        pop,
        contains,
        find,
        toString,
        insertAt
    };
};

const listOne = linkedList();
listOne.append(2);
listOne.append(3);
listOne.append(4);
listOne.append(5);
listOne.prepend(1);

listOne.size()
listOne.toString()
listOne.head();
listOne.tail()
listOne.nodeAt(3)
listOne.pop()
listOne.contains(2)
listOne.find(2);
listOne.insertAt(10, 4)
listOne.toString()