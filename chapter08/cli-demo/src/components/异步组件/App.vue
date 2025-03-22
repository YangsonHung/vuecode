<template>
    <div>
        <Home></Home>
        <!-- <AsyncCategory></AsyncCategory> -->
         <Suspense>
            <template #default>
                <AsyncCategory></AsyncCategory>
            </template>
            <template #fallback>
                <Loading></Loading>
            </template>
         </Suspense>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
// import { sum } from './math.js'
import("./math.js").then(math => {
    console.log(math.sum(1,3))
})
import Home from './Home.vue';
import Loading from './Loading.vue';
import Error from './Error.vue';
// 异步加载组件，工厂函数写法
const AsyncCategory1 = defineAsyncComponent(() => import('./AsyncCategory.vue'));
// 异步加载组件，对象类型写法
const AsyncCategory = defineAsyncComponent({
    loader: () => import('./AsyncCategory.vue'),
    loadingComponent: Loading,
    errorComponent: Error,
    delay: 200,
    timeout: 3000,
    suspensible: false,
    onError(error, retry, fail, attempts) {
        if (error.message.match(/fetch/) && attempts <= 3) {
            console.log('fetch error')
            retry();
        } else {
            fail();
        }
    }
});


export default {
    components: {
        Home,
        AsyncCategory
    }
}
</script>

<style scoped>

</style>