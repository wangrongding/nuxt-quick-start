<template>
    <div>
        <div class="head">
            <nuxt-link class="menu-item" to="/">首页</nuxt-link>
            <nuxt-link class="menu-item" to="/page1">导航一</nuxt-link>
            <nuxt-link class="menu-item" to="/page2">导航二</nuxt-link>
            <nuxt-link class="menu-item" to="/page3">导航三</nuxt-link>
            <nuxt-link class="menu-item" to="/page4">导航四</nuxt-link>
        </div>
        <div class="main">
            <nuxt />
        </div>
        <div class="foot">脚部</div>
    </div>
</template>
<style scoped lang="less">
.head {
    height: 50px;
    background: white;
    border: 1px solid #c3c3c3;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu-item {
        margin: 0 30px;
    }
}
.main {
    min-height: calc(100vh - 50px);
}
.foot {
    border: 1px solid #c3c3c3;
    text-align: center;
}
</style>
