const express = require('express');
const { User, Order } = require('../db/models');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{
        model: User,
        attributes: ['name'],
      }],
    });
    res.json(orders);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

router.get('/:id', async (req, res) => {
  try {
  const order = await Order.findByPk(req.params.id);
  res.json(order);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

router.post('/orders', async (req, res) => {
  console.log(req.body);
  const { selectValue, productName, productPrice } = req.body;
  try {
    const user = await User.findOne({ where: { name: selectValue } });
    const order = await Order.create({ user_id: user.id, product_name: productName, total_price: productPrice });
    res.json(order);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
  const order = await Order.findByPk(req.params.id);
  await order.update(req.body);
  res.json(order);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to update order' });
  }
});

router.delete('/orders/:id', async (req, res) => {
  try {
  await Order.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to delete order' });
  }
});

module.exports = router;
