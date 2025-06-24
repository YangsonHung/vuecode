import dayjs from 'dayjs';
export default function (app: any) {
    app.directive('format-time', {
        created(el: any, bindings: any) {
            bindings.formatString = 'YYYY-MM-DD HH:mm:ss';
            if (bindings.value) {
                bindings.formatString = bindings.value;
            }
        },
        mounted(el: any, bindings: any) {
            const textContent = el.textContent;
            let timestamp = parseInt(textContent);
            if (textContent.length === 10) {
                timestamp = timestamp * 1000;
            }
            el.textContent = dayjs(timestamp).format(bindings.formatString);
        },
    });
}
