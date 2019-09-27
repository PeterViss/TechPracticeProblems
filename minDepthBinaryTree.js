var minDepth = function(root) {
  //if there is no other numbers below the root, put 0 for depth
  if (root === null) return 0;
  //Now you go left, if the root.left doesnt exist. Go Right and recursively call the minDepth function and add 1 because you have a depth of 1 already.
  if (root.left === null) return minDepth(root.right) + 1;
  if (root.right === null) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
