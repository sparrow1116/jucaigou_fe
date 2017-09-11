import * as PointService from './service';

export default {
    namespace: 'Point',
    state: {
        points: 0,
        goods: [
            {
                id: 10000,
                name: 'OPPO R11 64G',
                originalPrice: 3000,
                pointPrice: 30000,
                img: '../../src/assets/pointMall/0000.png',
                introduction: [
                    {key: '商品名称', value: 'OPPO R11 64G'},
                    {key: '机身颜色', value: '随机'},
                    {key: '主屏尺寸', value: '5.5英寸'},
                    {key: '像素', value: '前置2000万 后置1600万'},
                    {key: '内存', value: '4GB'},
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '实物礼品不同颜色随机发货；',
                    '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                    '邮寄费用由买单侠承担；',
                    '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                    '秦苍科技对积分具有最终解释权;',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
                ]
            },
            {
                id: 10001,
                name: '斐珞尔洁面仪',
                originalPrice: 1280,
                pointPrice: 12800,
                img: '../../src/assets/pointMall/0001.png',
                introduction: [
                    {key: '商品名称', value: '斐珞尔洁面仪'},
                    {key: '颜色', value: '随机'},
                    {key: '重量', value: '93克'},
                    {key: '尺寸', value: '76.2 X 80.5毫米'},
                    {key: '使用次数/充满', value: '300次'},
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '实物礼品不同颜色随机发货；',
                    '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                    '邮寄费用由买单侠承担；',
                    '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                    '秦苍科技对积分具有最终解释权;',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
                ]
            },
            {
                id: 10002,
                name: '捷波朗蓝牙耳机',
                originalPrice: 249,
                pointPrice: 2500,
                img: '../../src/assets/pointMall/0002.png',
                introduction: [
                    {key: '商品名称', value: '捷波朗蓝牙耳机'},
                    {key: '颜色', value: '随机'},
                    {key: '版本', value: '蓝牙4.0'},
                    {key: '传输范围', value: '30米'},
                    {key: '尺寸', value: 'L49.2mm X W14.5mm X H9.5mm'},
                    {key: '重量', value: '8.5克'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '实物礼品不同颜色随机发货；',
                    '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                    '邮寄费用由买单侠承担；',
                    '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                    '秦苍科技对积分具有最终解释权;',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
                ]
            },
            {
                id: 10003,
                name: '小米智能手环',
                originalPrice: 149,
                pointPrice: 1500,
                img: '../../src/assets/pointMall/0003.png',
                introduction: [
                    {key: '商品名称', value: '小米智能手环'},
                    {key: '颜色', value: '随机'},
                    {key: '屏幕尺寸', value: '0.42英寸'},
                    {key: '屏幕材质', value: 'OLED显示屏'},
                    {key: '触摸屏', value: '触摸键'},
                    {key: '链接方式', value: '蓝牙'},
                    {key: '电池容量', value: '70mAh'},
                    {key: '待机时长', value: '20天'},
                    {key: '产品尺寸', value: '155mm-210mm'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '实物礼品不同颜色随机发货；',
                    '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                    '邮寄费用由买单侠承担；',
                    '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                    '秦苍科技对积分具有最终解释权;',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
                ]
            },
            {
                id: 10004,
                name: '有品智能体脂称',
                originalPrice: 89,
                pointPrice: 900,
                img: '../../src/assets/pointMall/0004.png',
                introduction: [
                    {key: '商品名称', value: '有品智能体脂称'},
                    {key: '颜色', value: '随机'},
                    {key: '机身尺寸', value: '260x260x20mm'},
                    {key: '重量', value: '1.2kg'},
                    {key: '链接方式', value: '蓝牙'},
                    {key: '测量范围', value: '8kg~150kg'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '实物礼品不同颜色随机发货；',
                    '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                    '邮寄费用由买单侠承担；',
                    '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                    '秦苍科技对积分具有最终解释权;',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
                ]
            },
            {
                id: 10005,
                name: '小米充电宝2代',
                originalPrice: 79,
                pointPrice: 800,
                img: '../../src/assets/pointMall/0005.png',
                introduction: [
                    {key: '商品名称', value: '小米充电宝2代'},
                    {key: '颜色', value: '随机'},
                    {key: '容量', value: '10000毫安'},
                    {key: '尺寸', value: '130x71x14.1mm'},
                    {key: '重量', value: '228g'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '实物礼品不同颜色随机发货；',
                    '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                    '邮寄费用由买单侠承担；',
                    '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                    '秦苍科技对积分具有最终解释权;',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
                ]
            },
            {
                id: 10006,
                name: '科博尔减肥仪',
                originalPrice: 159,
                pointPrice: 1600,
                img: '../../src/assets/pointMall/0006.png',
                introduction: [
                    {key: '商品名称', value: '科博尔减肥仪'},
                    {key: '颜色', value: '随机'},
                    {key: '控制方式', value: '机械式'},
                    {key: '按摩手法', value: '多功能'},
                    {key: '震动方向', value: '单方向'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '实物礼品不同颜色随机发货；',
                    '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                    '邮寄费用由买单侠承担；',
                    '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                    '秦苍科技对积分具有最终解释权;',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
                ]
            },
            {
                id: 10007,
                name: '买单侠定制双肩包',
                originalPrice: 60,
                pointPrice: 1100,
                img: '../../src/assets/pointMall/0007.png',
                introduction: [
                    {key: '商品名称', value: '买单侠定制双肩包'},
                    {key: '颜色', value: '黑色'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '实物礼品不同颜色随机发货；',
                    '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                    '邮寄费用由买单侠承担；',
                    '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                    '秦苍科技对积分具有最终解释权;',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
                ]
            },
            {
                id: 10008,
                name: '20元话费充值卡',
                originalPrice: 20,
                pointPrice: 200,
                img: '../../src/assets/pointMall/0008.png',
                introduction: [
                    {key: '商品名称', value: '20元话费充值卡'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '请提供准确信息，如因信息提供错误导致收不到礼品，损失由用户承担',
                    '秦苍科技对积分商城具有最终解释权',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514'
                ]
            },
            {
                id: 10009,
                name: '爱奇艺3个月黄金VIP会员',
                originalPrice: 68,
                pointPrice: 700,
                img: '../../src/assets/pointMall/0009.png',
                introduction: [
                    {key: '商品名称', value: '爱奇艺3个月黄金VIP会员'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '请提供准确信息，如因信息提供错误导致收不到礼品，损失由用户承担',
                    '秦苍科技对积分商城具有最终解释权',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514'
                ]
            },
            {
                id: 10010,
                name: '100元京东购物卡',
                originalPrice: 100,
                pointPrice: 1000,
                img: '../../src/assets/pointMall/0010.png',
                introduction: [
                    {key: '商品名称', value: '100元京东购物卡'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '请提供准确信息，如因信息提供错误导致收不到礼品，损失由用户承担',
                    '秦苍科技对积分商城具有最终解释权',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514'
                ]
            },
            {
                id: 10011,
                name: '200元京东购物卡',
                originalPrice: 200,
                pointPrice: 2000,
                img: '../../src/assets/pointMall/0011.png',
                introduction: [
                    {key: '商品名称', value: '200元京东购物卡'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '请提供准确信息，如因信息提供错误导致收不到礼品，损失由用户承担',
                    '秦苍科技对积分商城具有最终解释权',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514'
                ]
            },
            {
                id: 10012,
                name: '王者荣耀英雄皮肤288点券档',
                originalPrice: 28.8,
                pointPrice: 300,
                img: '../../src/assets/pointMall/0012.png',
                introduction: [
                    {key: '商品名称', value: '王者荣耀英雄皮肤288点券档'},
                    {key: '可兑换皮肤', value: '李白范海辛 钟馗地府判官 夏侯惇战争骑士等'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '请提供准确信息，如因信息提供错误导致收不到礼品，损失由用户承担',
                    '秦苍科技对积分商城具有最终解释权',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514'
                ]
            },
            {
                id: 10013,
                name: '王者荣耀英雄皮肤488及588点券档',
                originalPrice: 48.8,
                pointPrice: 500,
                img: '../../src/assets/pointMall/0013.png',
                introduction: [
                    {key: '商品名称', value: '王者荣耀英雄皮肤488及588点券档'},
                    {key: '可兑换皮肤', value: '露娜哥特玫瑰 关羽龙腾万里 后羿阿尔法小队等'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '请提供准确信息，如因信息提供错误导致收不到礼品，损失由用户承担',
                    '秦苍科技对积分商城具有最终解释权',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514'
                ]
            },
            {
                id: 10014,
                name: '王者荣耀英雄皮肤788及888点券档',
                originalPrice: 78.8,
                pointPrice: 800,
                img: '../../src/assets/pointMall/0014.png',
                introduction: [
                    {key: '商品名称', value: '王者荣耀英雄皮肤788及888点券档'},
                    {key: '可兑换皮肤', value: '露娜紫霞仙子 孙尚香水果甜心 典韦黄金武士等'}
                ],
                cashFlow: [
                    '确认符合兑换条件后，点击[兑换]',
                    '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
                ],
                attention: [
                    '请提供准确信息，如因信息提供错误导致收不到礼品，损失由用户承担',
                    '秦苍科技对积分商城具有最终解释权',
                    '如有任何疑问或问题，请联系客服电话021-61117388 转514'
                ]
            }
        ],
        selectGood: {
            id: 10000,
            name: 'OPPO R11 64G',
            originalPrice: 20,
            pointPrice: 200,
            img: 'xxx',
            introduction: [
                {key: '商品名称', value: 'OPPO R11 64G'},
                {key: '机身颜色', value: '随机'},
                {key: '主屏尺寸', value: '5.5英寸'},
                {key: '像素', value: '前置2000万 后置1600万'},
                {key: '内存', value: '4GB'},
            ],
            cashFlow: [
                '确认符合兑换条件后，点击[兑换]',
                '兑换后一周内，我们的客服人员将与您取得联系进行礼品发放，礼品将以快递的形式寄出。'
            ],
            attention: [
                '实物礼品不同颜色随机发货；',
                '实物礼品，不提供退换货服务，礼品图片仅供参考，请以实物为准；',
                '邮寄费用由买单侠承担；',
                '请提供准确的手机号及收货地址，如因信息提供错误导致收不到礼品，损失由用户承担;',
                '秦苍科技对积分具有最终解释权;',
                '如有任何疑问或问题，请联系客服电话021-61117388 转514;'
            ]
        },
        sureBoxShow: false,
        changing: false,
        changed: 0,
        currentState:'idle' // idle,confirm,loading,success,failed
    },
    reducers: {
        actionStatusChange(state,{payload:{status}}){
            state.currentState = status;
            return {...state}
        },
        changeSelect(state,{payload:{selectedGood}}){
            state.selectGood = selectedGood;
            return{...state}
        },
        changePoints(state,{payload:{data}}){
            state.points = data;
            return{...state}
        },
        actionStartChange(state){
            state.currentState = 'loading';
            return{...state}
        }
    },
    effects: {
        *exchange(action,{call,select,put}){
            let selectGood = yield select(state =>{return state.Point.selectGood});
            yield put({
                type: 'actionStartChange'
            });
            const { data } = yield call(PointService.exchange, {id:selectGood.id});
            yield put({
                type: 'actionStatusChange',
                payload:{
                    status:data =='failed'?'failed':'success'
                }
            });
        },
        *UBT({payload:{UBTData}},{call,select,put}){

            
             
            let UBTDataCollection= localStorage.getItem('UBTCollect')?JSON.parse(localStorage.getItem('UBTCollect')):[];
            UBTDataCollection.push(UBTData);
             
            localStorage.setItem("UBTCollect",JSON.stringify(
                UBTDataCollection
            ));
            
            if(UBTDataCollection.length>=10){
                localStorage.setItem("UBTCollect",JSON.stringify([]));
                const { data } = yield call(PointService.UBT, UBTDataCollection);
                
            }

        },
        *changeStatus({payload:{status}},{call,select,put}){
            yield put({
                type: 'actionStatusChange',
                payload:{
                    status
                }
            });
        },
        *selectGood({payload:{goodId}},{call,select,put}){
                let selectedGood = null;
                yield select(state =>{state.Point.goods.map((good)=>{
                if(good.id == goodId){
                    selectedGood = good;
                }
            })});
            yield put({
                type: 'changeSelect',
                payload:{
                    selectedGood
                }
            });
        },
        *getAllPoint(action,{call,select,put}){
            const { data } = yield call(PointService.fetch, {});
            if(data == null){
                /*yield put({
                    type: 'endCall',
                    payload: {
                    },
                });*/
                return;
            }
            yield put({
                type: 'changePoints',
                payload:{
                    data
                }
            });
        }

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/PointDetail') {
                    dispatch({type: 'selectGood', payload: {goodId:query.goodId}});
                }
            });
        }
    }
};
