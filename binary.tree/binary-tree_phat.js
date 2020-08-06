
function Node(index, value) {
    this.index = index;
    this.data = value;
    this.nodeList = null;
    this.left = {};
    this.right = {};
    this.parent = {};
}

Node.prototype.setNodeList = function (nodeList) {
    this.nodeList = nodeList;
}

Node.prototype.setNode = function (left, right) {
    if (typeof left === 'number') {
        this.left = this.nodeList[left];
    }
    if (typeof right === 'number') {
        this.right = this.nodeList[right];
    }
}


Node.prototype.nodeSubscribe = function (data) {
    console.log(data, this);
    const { type, node: nodeIndex, data: value } = data;
    console.log(this, type, nodeIndex, value);
    switch(type) {
        case 'node':
            this.index = nodeIndex;
            this.data = value;
            break;
        case 'left':
            this.left.index = nodeIndex;
            this.left.data = value;
            break;
        case 'right':
            this.right.index = nodeIndex;
            this.right.data = value;
            break;
    }
}

function Tree() {
    this.root = null;
}

Tree.prototype.insert = function (data) {
    this.root = data;
}

Tree.prototype.findNode = function (index) {
    return this.root[index];
}




/* Observer */

function Observer() {
    this.observers = [];
}

Observer.prototype.subscribe = function (fn, context) {
        if (!context) {
            this.observers.push(fn);
        } else {
            this.observers.push(fn.bind(context));
        }
        window.observers = this.observers;
    };


    Observer.prototype.unsubscribe = function (fnUnsubcribe) {
        this.observers = this.observers.filter(fn => {
            if (fn != fnUnsubcribe) {
                return fn;
            }
        })
    };

    Observer.prototype.fire = function (data) {
        console.log("observers", data, this.observers.length);
        if (this.observers.length) {
            this.observers.forEach(function(fn) {
                console.log(">===", data);
                fn.apply(null, ...arguments);
            });
        }
    }




let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let tree = new Tree();
let nodes = [];
let ob = new Observer();

for (let i = 0; i < array.length; i++) {
    let _node = new Node(i, array[i]);
    nodes.push(_node);
    console.log(_node, "_node");
    ob.subscribe(_node.nodeSubscribe, _node);
}

nodes.forEach(el => {
    el.setNodeList(nodes);
})

tree.insert(nodes);

// //set node left and right
// tree.findNode(5).setNode(1, 2);

// console.log(tree.findNode(5).left.data, "<===");
// console.log(tree.findNode(5).left.left.data, "<===");

// tree.findNode(5).left.setNode(7, 8);
// console.log(tree.findNode(5).left.left.data, "<===");

ob.fire({ type: 'node', node: 1, data: 5 });
console.log(tree.findNode(1).data, "<===");
