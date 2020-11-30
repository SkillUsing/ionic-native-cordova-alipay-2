import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name alipay2
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { alipay2 } from '@ionic-native/alipay-2';
 *
 *
 * constructor(private alipay2: alipay2) { }
 *
 * ...
 *
 *
 * this.alipay2.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Alipay2Original extends IonicNativePlugin {
    /**
     * 支付
     * @param order App支付参数
     * @param appId 支付Id
     * @param success 成功回调
     * @param error 失败回调
     */
    payment(order: string, success?: (res?: any) => void, error?: (err?: any) => void): Promise<any>;
}

export declare const Alipay2: Alipay2Original;