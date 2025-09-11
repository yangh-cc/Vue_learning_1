import request from '@/utils/request'

// 订单结算确认
// mode：cart ==> obj {cartIds}
// mode: buyNow ==> obj { goodsId, goodsNum, goodsSkuId}
export const checkOder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // cart / buyNow
      delivery: 10,
      couponId: 0,
      isUsePoint: 0,
      ...obj // 将传递过来的参数对象 动态展开
    }
  })
}
// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10,
    couponId: 0,
    isUsePoint: 0,
    payType: 10, // 余额支付
    ...obj
  })
}
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
