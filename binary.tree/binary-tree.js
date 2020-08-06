
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
}

function Tree() {
    this.root = null;
}

Tree.prototype.insert = function (data) {
    let node = new Node(data);
    if (!this.root) {
        this.root = node;
        return;
    }
    insertNode(this.root, node);
}

Tree.prototype.findNode = function (data) {
    if (!this.root) {
        return null;
    }
    if (this.root.data == data) {
        return this.root;
    }
    // console.log(_findNode(this.root, data));
    return _findNode(this.root, data);
}

function _findNode(currentNode, value) {
    let _node = currentNode;
    if (!_node) {
        return null;
    }
    if (_node.left) {
        if (_node.left.data == value) {
            console.log("_node.left", _node.left);
            return _node.left;
        }
        if (_findNode(_node.left, value) == null) {
            if (_node.right) {
                if (_node.right.data == value) {
                    return _node.right;
                }
                _findNode(_node.right, value);
            }
        }
    }
    else {
        if (_node.right) {
            if (_node.right.data == value) {
                return _node.right;
            }
            _findNode(_node.right, value);
        }
    }

    return null;
}

function insertNode(node, newNode) {
    let tmpRoot = node;
    while (tmpRoot) {
        if (calculateLeafNode(tmpRoot.left) <= calculateLeafNode(tmpRoot.right)) {
            if (!tmpRoot.left) {
                tmpRoot.left = newNode;
                return;
            }
            tmpRoot = tmpRoot.left;
        }
        else {
            if (!tmpRoot.right) {
                tmpRoot.right = newNode;
                return;
            }
            tmpRoot = tmpRoot.right;
        }

    }
}

function calculateLeafNode(node) {
    if (!node) {
        return 0;
    }
    if (!node.left && !node.right) {
        return 1;
    }
    return calculateLeafNode(node.left) + calculateLeafNode(node.right);
}

(function () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let tree = new Tree();
    for (let i = 0; i < array.length; i++) {
        tree.insert(array[i]);
    }
    // console.log(tree.root.data);
    // console.log(tree.root.left.data);
    // console.log(tree.root.left.left.data);

    console.log(tree.findNode(6));
    // console.log(tree.findNode(2).right);
})()