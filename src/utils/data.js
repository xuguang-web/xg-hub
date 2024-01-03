buildTreeData = (nodes) => {
  const nodeMap = {};
  const tree = [];

  // 将节点以id为键存储在nodeMap中
  nodes.forEach((node) => {
    nodeMap[node.id] = node;
  });

  // 遍历每个节点，将其添加到其父节点的children数组中
  nodes.forEach((node) => {
    const parent = nodeMap[node.parentId];
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(node);
    } else {
      tree.push(node); // 没有父节点的节点，视为根节点
    }
  });

  return tree;
};

module.exports = {
  buildTreeData,
};
