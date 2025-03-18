<template>
    <div>
        <button v-for="item in tabs" :key="item" @click="itemClick(item)"
            :class="{ active: currentTab === item }">{{ item }}</button>
    </div>
    <template v-if="currentTab === 'home'">
        <home></home>
    </template>
    <template v-if="currentTab === 'about'">
        <AboutView></AboutView>
    </template>
    <template v-if="currentTab === 'category'">
        <category></category>
    </template>
</template>

<script>
import Home from './page/Home.vue'
import AboutView from './page/AboutView.vue'
import Category from './page/Category.vue'
export default {
    components: {
        Home,
        AboutView,
        Category
    },
    data() {
        return {
            tabs: ['home', 'about', 'category'],
            currentTab: 'home'
        }
    },
    methods: {
        itemClick(item) {
            this.currentTab = item;
        }
    }
}
</script>

<style scoped></style>