const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: 'Error creating order', error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const filters = {};
    const queryFilters = req.query.filters || {};

    const insertedAt = queryFilters['inserted_at'];
    if (insertedAt) {
      const date = new Date(insertedAt);
      const nextDay = new Date(insertedAt);
      nextDay.setDate(nextDay.getDate() + 1);
      filters.orderDate = { $gte: date, $lt: nextDay };
    }

    const productIds = queryFilters['product_ids'];
    if (productIds) {
      let idsArray = productIds;
      if (typeof productIds === 'string') {
        idsArray = productIds.replace(/[\[\]\s]/g, '').split(',');
      }
      filters.product = { $in: idsArray };
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const orders = await Order.find(filters)
      .skip(skip)
      .limit(limit)
      .populate('product', 'name price departureDate')
      .populate('user', 'firstName lastName email');

    const totalOrders = await Order.countDocuments(filters);

    res.json({
      totalOrders,
      totalPages: Math.ceil(totalOrders / limit),
      currentPage: page,
      orders,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = req.body.status;
    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting order', error: err.message });
  }
};