<template>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <StyleModule></StyleModule>
    <VbindStyle></VbindStyle>
    <!-- <ShowMessage title="标题" content="内容"></ShowMessage>
    <ShowMessage :title="title" v-bind:content="content"></ShowMessage>
    <ShowMessage :title="message.title" v-bind:content="message.content"></ShowMessage>
    <ShowMessage v-bind="message"></ShowMessage>
    <ShowMessage title="标题22222" :count="count"></ShowMessage>
    <ShowMessage title="标题33333" count="33333"></ShowMessage> -->
    <ShowMessage status="1"></ShowMessage>
</template>

<script>
import Header from './AppHeader.vue';
import Main from './AppMain.vue';
import Footer from './AppFooter.vue'
import StyleModule from './StyleModule.vue'
import VbindStyle from './VbindStyle.vue';
import ShowMessage from './ShowMessage.vue';
export default {
    data: function () {
        return {
            title: '我是标题',
            content: '我是内容',
            message: {
                title: '我是标题2',
                content: '我是内容2',
            },
            count: 2222,
        }
    },
    components: {
        Header,
        Main,
        Footer,
        StyleModule,
        VbindStyle,
        ShowMessage
    }
}
</script>

<style scoped>
.header,
.main,
.footer {
    border: 1px solid black;
    margin-bottom: 4px;
}

.header {
    font-size: 40px;
    color: red;
}

:deep(.msg) {
    color: green;
    font-size: 28px;
}
</style>