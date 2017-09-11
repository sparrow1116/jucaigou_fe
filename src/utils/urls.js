import { UsingDomain } from './config';

//POST /app/order/list 今日申请列表
export const OrderListUrl = UsingDomain + '/app/order/list';

//GET /app/order/detail/id/{orderId}  今日申请详情页
export const OrderDetailUrl = UsingDomain + '/app/order/detail/id';

//GET /app/point/exchange/{commodity} S 积分兑换商品
export const ExchangeCommodity = UsingDomain + '/app/point/exchange';

//GET /app/point/last S 剩余积分查询
export const RemainPoints = UsingDomain + '/app/point/last';


//post /app/datacollect/actions UBT数据埋点
export const DataCollect = UsingDomain + '/app/datacollect/actions';
