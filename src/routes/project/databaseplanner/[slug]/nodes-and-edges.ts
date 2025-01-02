export const initialNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 0, y: 0 },
    data: {
      label: 'User',
      fields: [
        { id: 'user-id', name: 'id', type: 'uuid', required: true },
        { id: 'user-email', name: 'email', type: 'string', required: true },
        { id: 'user-name', name: 'name', type: 'string' },
        { id: 'user-created', name: 'createdAt', type: 'datetime' }
      ]
    }
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 200, y: 200 },
    data: {
      label: 'Product',
      fields: [
        { id: 'product-id', name: 'id', type: 'uuid', required: true },
        { id: 'product-name', name: 'name', type: 'string', required: true },
        { id: 'product-price', name: 'price', type: 'float' },
        { id: 'product-created', name: 'createdAt', type: 'datetime' },
        { id: 'product-updated', name: 'updatedAt', type: 'datetime' }
      ]
    }
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 400, y: 0 },
    data: {
      label: 'Order',
      fields: [
        { id: 'order-id', name: 'id', type: 'uuid', required: true },
        { id: 'order-user-id', name: 'userId', type: 'uuid', required: true },
        { id: 'order-product-id', name: 'productId', type: 'uuid', required: true },
        { id: 'order-quantity', name: 'quantity', type: 'int' },
        { id: 'order-total', name: 'total', type: 'float' }
      ]
    }
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 600, y: 0 },
    data: {
      label: 'Category',
      fields: [
        { id: 'category-id', name: 'id', type: 'uuid', required: true },
        { id: 'category-name', name: 'name', type: 'string', required: true }
      ]
    }
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 800, y: 0 },
    data: {
      label: 'Review',
      fields: [
        { id: 'review-id', name: 'id', type: 'uuid', required: true },
        { id: 'review-product-id', name: 'productId', type: 'uuid', required: true },
        { id: 'review-user-id', name: 'userId', type: 'uuid', required: true },
        { id: 'review-rating', name: 'rating', type: 'int' },
        { id: 'review-comment', name: 'comment', type: 'string' }
      ]
    }
  },
  // ... other nodes
];

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'step',
    data: { onDelete: null }
  },
  // Add more initial edges as needed
]; 