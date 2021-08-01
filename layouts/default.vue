<template>
    <div class="page-container">
        <div class="head">
            <div class="nav-left">
                <nuxt-link class="menu-item" to="/introduction">公司简介</nuxt-link>
                <nuxt-link class="menu-item" to="/page2">酒店会所</nuxt-link>
                <nuxt-link class="menu-item" to="/page3">文化办公</nuxt-link>
            </div>
            <div class="logo-container">
                <img class="logo-bg" src="../assets/images/bg.png" alt="" />
                <nuxt-link class="menu-item" to="/home">
                    <img class="logo" src="../assets/images/logo.png" alt="" />
                </nuxt-link>
            </div>
            <div class="nav-right">
                <nuxt-link class="menu-item" to="/page4">商业地产</nuxt-link>
                <nuxt-link class="menu-item" to="/page5">私人住宅</nuxt-link>
                <nuxt-link class="menu-item" to="/cooperation">业务合作</nuxt-link>
            </div>
        </div>
        <div class="main">
            <nuxt />
        </div>
        <!-- <div class="foot">脚部</div> -->
        <!-- <div v-show="!init" class="guide"></div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    computed: {
        init() {
            return sessionStorage.getItem("init");
        },
    },
    created() {},
    mounted() {
        // this.$nextTick(() => {
        //     this.init = sessionStorage.getItem("init");
        // });
        // console.log(this.init);
        // !this.init &&
        //     setTimeout(() => {
        //         this.init = true;
        //         this.init && sessionStorage.setItem("init", true);
        //     }, 3000);
    },
};
</script>
<style scoped lang="less">
* {
    user-select: none;
}
.page-container {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    .head {
        height: 50px;
        // border: 1px solid #c3c3c3;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        z-index: 100;
        .nav-left {
            background: rgba(55, 28, 23, 0.75);
            border-bottom: 1px solid #777777f2;
            flex: 1;
            text-align: right;
            display: flex;
            justify-content: flex-end;
        }
        .nav-right {
            background: rgba(55, 28, 23, 0.75);
            border-bottom: 1px solid #777777f2;
            flex: 1;
            text-align: left;
            display: flex;
            justify-content: flex-start;
        }
        .menu-item {
            height: 50px;
            padding: 0 30px;
            display: inline-block;
            line-height: 50px;
            margin: 0 25px;
            text-decoration: none;
            color: white;
            font-size: 20px;
            &:hover {
                background: rgb(134, 86, 75);
            }
        }
        .logo-container {
            width: 250px;
            height: 240px;
            text-align: center;
            position: relative;
            .logo-bg {
                position: absolute;
                top: 0;
                left: 0;
                margin-top: 95px;
                width: 250px;
                height: 102px;
            }
            img {
                height: 90px;
                width: 90px;
                margin-top: 95px;
                position: absolute;
                top: 5px;
                left: 80px;
            }
        }
    }
    .main {
        flex: 1;
        min-height: calc(100vh - 80px);
    }
    .foot {
        height: 30px;
        border: 1px solid #c3c3c3;
        text-align: center;
    }
    .guide {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: red;
    }
}
</style>
