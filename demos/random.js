registerLayout("random", class {
  async intrinsicSizes() {}
  async layout(children, edges, constraintSpace, styles) {
    const childFragments = []
    for(const child of children) {
      const childFragment = await child.layoutNextFragment();
      childFragment.inlineOffset = Math.random() * constraintSpace.fixedInlineSize;
      childFragment.blockOffset = Math.random() * constraintSpace.fixedBlockSize;
      childFragments.push(childFragment);
    }

    return { childFragments };
  }
});