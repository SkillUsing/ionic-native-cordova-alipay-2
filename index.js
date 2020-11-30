var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Alipay2Original = /** @class */ (function (_super) {
    __extends(Alipay2Original, _super);
    function Alipay2Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alipay2Original.prototype.payment = function (order, success, error) { return cordova(this, "payment", {}, arguments); };
    Alipay2Original.pluginName = "Alipay2";
    Alipay2Original.plugin = "cordova-plugin-alipay-v2";
    Alipay2Original.pluginRef = "cordova.plugins.alipay";
    Alipay2Original.repo = "https://github.com/hhjjj1010/cordova-plugin-alipay-v2";
    Alipay2Original.install = "ionic cordova plugin add cordova-plugin-alipay-v2 --variable APP_ID=your AppId";
    Alipay2Original.installVariables = ["APP_ID"];
    Alipay2Original.platforms = ["Android", "iOS"];
    return Alipay2Original;
}(IonicNativePlugin));
var Alipay2 = new Alipay2Original();
export { Alipay2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXBheS0yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDM0MsMkJBQWlCOzs7O0lBVTVDLHlCQUFPLGFBQUMsS0FBYSxFQUFFLE9BQTZCLEVBQUUsS0FBMkI7Ozs7Ozs7O2tCQXZEbkY7RUE2QzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBhbGlwYXkyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBhbGlwYXkyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbGlwYXktMic7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxpcGF5MjogYWxpcGF5MikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYWxpcGF5Mi5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FsaXBheTInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hbGlwYXktdjInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmFsaXBheScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oaGpqajEwMTAvY29yZG92YS1wbHVnaW4tYWxpcGF5LXYyJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWFsaXBheS12MiAtLXZhcmlhYmxlIEFQUF9JRD15b3VyIEFwcElkJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0lEJ10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGlwYXkyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiDmlK/ku5hcbiAgICogQHBhcmFtIG9yZGVyIEFwcOaUr+S7mOWPguaVsFxuICAgKiBAcGFyYW0gYXBwSWQg5pSv5LuYSWRcbiAgICogQHBhcmFtIHN1Y2Nlc3Mg5oiQ5Yqf5Zue6LCDXG4gICAqIEBwYXJhbSBlcnJvciDlpLHotKXlm57osINcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF5bWVudChvcmRlcjogc3RyaW5nLCBzdWNjZXNzPzogKHJlcz86IGFueSkgPT4gdm9pZCwgZXJyb3I/OiAoZXJyPzogYW55KSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19