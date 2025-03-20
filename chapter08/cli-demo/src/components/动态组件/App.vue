<template>
    <div>
        <button v-for="item in tabs" :key="item" @click="itemClick(item)" :class="{ active: currentTab === item }">
            {{ item }}
        </button>
    </div>
    <div>currentTab: {{ currentTab }}</div>
    <!-- <template v-if="currentTab === 'home'">
        <home></home>
    </template>
<template v-if="currentTab === 'about'">
        <AboutView></AboutView>
    </template>
<template v-if="currentTab === 'category'">
        <category></category>
    </template> -->
    <keep-alive include="Home,About">
        <component :is="currentTab" name="coderwhy" :age="18" @pageClick="pageClick"></component>
    </keep-alive>

    <keep-alive :include="/HomeView|about/">
        <component :is="currentTab" name="coderwhy" :age="18" @pageClick="pageClick"></component>
    </keep-alive>

    <keep-alive :include="['HomeView', 'AboutView']">
        <component :is="currentTab" name="coderwhy" :age="18" @pageClick="pageClick"></component>
    </keep-alive>
</template>

<script>
import Home from './page/Home.vue';
import About from './page/AboutView.vue';
import Category from './page/Category.vue';
export default {
    components: {
        Home,
        About,
        Category,
    },
    data() {
        return {
            tabs: ['Home', 'About', 'category'],
            currentTab: 'home',
        };
    },
    methods: {
        itemClick(item) {
            this.currentTab = item;
        },
        pageClick(value) {
            console.log('value :>> ', value);
            console.log('pageClick');
        },
    },
};
</script>

<style scoped></style>